export interface Service {
  title: string;
  desc: string;
}

export interface Midman {
  id: number;
  name: string;
  alias: string;
  fb: string;
  wa: string;
  ig: string;
  jamKerja: string;
  services: Service[];
  avatar: string;
}

export interface Scammer {
  id: number;
  name: string;
  alias: string;
  fb: string;
  wa: string;
  ig: string;
  modus: { title: string; desc: string }[];
  avatar: string;
}

export const midmen: Midman[] = [
  {
    id: 1,
    name: "Julie Sean",
    alias: "Julie Sean (Cece) Verified",
    fb: "https://web.facebook.com/julieseanrekberverified?locale=id_ID",
    wa: "0812-7000-0082",
    ig: "",
    jamKerja: "07.30 - 00.30 WIB",
    services: [
      { title: "Admin Rekber", desc: "Hanya Melayani Transaksi di Messenger" }
    ],
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Julie&backgroundColor=fdf2f8"
  },
  {
    id: 2,
    name: "Deni Eka Nata Zen",
    alias: "Deni Eka Nata Zen",
    fb: "https://web.facebook.com/inyorZENREAL28?locale=id_ID",
    wa: "0853 5848 1367",
    ig: "",
    jamKerja: "24 JAM",
    services: [
      { title: "OPEN MC / REKBER", desc: "Pasti on 24 jam" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Deni&backgroundColor=b6e3f4"
  },
  {
    id: 3,
    name: "Hendri",
    alias: "Hendri ADMIN REKBER JATIM",
    fb: "https://web.facebook.com/hendri.78505?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "ONLINE 24 JAM",
    services: [
      { title: "Admin Rekber", desc: "Hanya Melayani Transaksi Messenger" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Hendri&backgroundColor=c0aede"
  },
  {
    id: 4,
    name: "Jefry Alson",
    alias: "Jefry Alson Admin Rekber 24JAM",
    fb: "https://web.facebook.com/rekberjefryalson?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "24 JAM",
    services: [
      { title: "Admin Rekber", desc: "Melayani jasa rekber 24 jam" },
      { title: "Jasa Hangusin Kode", desc: "Layanan hangusin kode" },
      { title: "Jasa Convert", desc: "RM - USDT - IDR" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Jefry&backgroundColor=d1d5db"
  },
  {
    id: 5,
    name: "Nadia Purnama",
    alias: "Nadia Purnama Rekber",
    fb: "https://web.facebook.com/rekbernadia28?locale=id_ID",
    wa: "08999359250",
    ig: "",
    jamKerja: "07.00 - 01.30 WIB",
    services: [
      { title: "Admin Rekber", desc: "Transaksi hanya Di akun utama saja" }
    ],
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Nadia&backgroundColor=ffd5dc"
  },
  {
    id: 6,
    name: "Revi Sri Mega Azzahra",
    alias: "Revi Sri Mega Azzahra (ADMIN REKBER)",
    fb: "https://web.facebook.com/revisrimega?locale=id_ID",
    wa: "https://linktr.ee/Revisri",
    ig: "",
    jamKerja: "06.30 - 23.30 WIB",
    services: [
      { title: "Admin Rekber", desc: "Online setiap hari" }
    ],
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Revi&backgroundColor=f5d0fe"
  },
  {
    id: 7,
    name: "Agung Gunawan",
    alias: "Agung Gunawan (REKBER & CV)",
    fb: "https://web.facebook.com/REKBER.AGUNGGUNAWAN.REAL?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "ON 24 JAM",
    services: [
      { title: "REKBER & CV", desc: "Menerima semua rekber kecuali akun Bank & E-wallet" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Agung&backgroundColor=dcfce7"
  },
  {
    id: 8,
    name: "YamaoStore",
    alias: "YamaoStore REKBER FB/WA ALL GAME",
    fb: "https://web.facebook.com/yamaostoree?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "24 JAM",
    services: [
      { title: "REKBER ALL GAME", desc: "Melayani rekber via Facebook dan WhatsApp 24 jam" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Yamao&backgroundColor=ffedd5"
  },
  {
    id: 9,
    name: "Muhammad Rizki",
    alias: "Muhammad Rizki (ADMIN REKBER)",
    fb: "https://web.facebook.com/endutrekber3955?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "ONTIME 24 JAM",
    services: [
      { title: "Admin Rekber", desc: "ONLY FACEBOOK !!" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Rizki&backgroundColor=e0e7ff"
  },
  {
    id: 10,
    name: "Hengky Filza",
    alias: "Hengky Filza - Admin Rekber -",
    fb: "https://web.facebook.com/HMG.Hengkyfilzarekber?locale=id_ID",
    wa: "",
    ig: "",
    jamKerja: "11.00 - 00.30 WIB",
    services: [
      { title: "Admin Rekber", desc: "Kamis OFF" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Hengky&backgroundColor=f1f5f9"
  }
];

export const scammers: Scammer[] = [];