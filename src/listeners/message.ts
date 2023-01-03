import { Message } from 'whatsapp-web.js';

import helpHandler from '../handlers/help';
import InformasiHandler from '../handlers/informasi';
import Menuhandler from '../handlers/menu';
import stickerHandler from '../handlers/sticker';
import kirimpesanHandler from '../handlers/tag';
import goErrorHandler from '../utils/goErrHandler';
import parseOptions from '../utils/parseOptions';
import parseOptions2 from '../utils/parseOptions2';

const messageListener = async (message: Message) => {
  
  // get contact info
  const { data: contact, error } = await goErrorHandler(() =>
    message.getContact()
  );
  if (!contact) {
    message.reply('Terjadi kesalahan pada saat mendapatkan info kontak');
    return console.error('Error when getting contact.', error);
  }

  // stop the listener if message is from a status or from a group
  if (message.isStatus || contact.isGroup) return;

  // parse command and options
  const [command, ...rest] = message.body.split(' ').map((cmd) => cmd.trim());
  const options = rest
    .join(' ')
    .replaceAll(' name', '|name')
    .replaceAll(' author', '|author')
    .split('|');
  const { stickerName, stickerAuthor } = parseOptions(options);

  // handle help
  if (command.toLowerCase().includes('!help')) {
    return helpHandler(message);
  }

// handle kirim pesan
if (command.toLowerCase().includes('!kirim')) {
  await kirimpesanHandler(message);
}

  // handle menu
  if (command.toLowerCase().includes('!menu')) {
    return Menuhandler(message);
  }

  //handle informasi
  if (command.toLowerCase().includes('!informasi')) {
    return InformasiHandler(message);
  }

  // handle sticker
  if (['!sticker', '!stiker'].includes(command) && message.type === 'image') {
    await stickerHandler({
      message,
      phoneNumber: contact.id.user,
      stickerName,
      stickerAuthor,
    });

    if (!contact.name || !contact.name.endsWith('(DONATUR)'))
      await message.reply(
        'Merasa terbantu oleh bot ini? Anda bisa sepuasnya membuat Aib-Aib \n\nDILARANG KERAS UNTUK KONTEN 18+\n\nSetelah Anda melakukan, jangan lupa istighfar, pesan ini akan hilang di request selanjutnya.'
      );

    return;
  } else if (command.toLowerCase().includes('sticker')) {
    return message.reply('Gambarnya mana?');
  }

  //message.reply('*Command salah*, coba cek kembali command yang Anda kirim');
};


export default messageListener;
