import { Message } from 'whatsapp-web.js';

const InformasiHandler = (message: Message) => {
  message.reply(
    `*MENU KELAS SYARIAH*
Kirim Perintah sebagai berikut:


*Mengetahui Jadwal Peruliahan*
\`\`\`!Jadwal (Nama Hari)="!Jadwal Senin"\`\`\`

*Mengetahui Link Materi*
\`\`\`!Link (Nama Matkul)="!Link PIK"\`\`\`

*Mengetahui Nomer Whatsapp Dosen*
\`\`\`!Nomer Pak/Bu (Nama Dosen)="!Nomer Bu Chyntia"\`\`\`


_Saat ini bot masih dalam tahap pengembangan_`
  );
};

export default InformasiHandler;
