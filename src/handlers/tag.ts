import { Message } from 'whatsapp-web.js';
import { client } from '..';
import goErrorHandler from '../utils/goErrHandler';
import parseOptions2 from '../utils/parseOptions2';
import parseOptions3 from '../utils/parseOptions3';

const kirimpesanHandler = async (message: Message) => {
const [command, ...rest] = message.body.split(' ').map((cmd) => cmd.trim());
const options = rest
const { text, nohp } = parseOptions2(options);
const { nohp2 } = parseOptions3(options);
  // get contact info
  const { data: contact, error } = await goErrorHandler(() =>
    message.getContact()
  );

  const phoneNumber = contact?.name
 // get current timestamp
 const timeStamp = new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
  });
//const contact = client.getNumberId(number)

//Kirim pesan ke nomor tertentu


client.sendMessage(nohp, text);
await message.reply(
`Hai *${phoneNumber}*, Pesan Kamu Sudah Tersampaikan dengan rincian : \n\nNomer Penerima : ${nohp2}\n\nPesan : ${text}\n\npesan ini akan hilang di request selanjutnya.`
);
console.log(`[${timeStamp}] Pesan dari ${phoneNumber} sudah terkirim Ke ${nohp2}`);

}

export default kirimpesanHandler;

