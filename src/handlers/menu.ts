import { Message } from 'whatsapp-web.js';

const Menuhandler = (message: Message) => {
  message.reply(
    `*MENU KELAS SYARIAH*
Silahkan Pilih Menu Yang Tersedia Sebagai Berikut:


*Mengetahui Informasi Peruliahan*
\`\`\`!informasi\`\`\`

*Mengetahui Informasi Pembuatan Stiker Ototmatis*
\`\`\`!help\`\`\`


_Saat ini bot masih dalam tahap pengembangan_`
  );
};

export default Menuhandler;
