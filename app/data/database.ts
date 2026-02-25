export interface Midman {
  id: number;
  name: string;
  alias: string;
  fb: string;
  wa: string;
  ig: string;
  jamKerja: string;
  services: { title: string; desc: string }[];
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
    name: "Ravi Guntur",
    alias: "Ravi MM Verified",
    fb: "https://facebook.com/ravi.mm",
    wa: "0811-2233-4455",
    ig: "@ravi_rekber",
    jamKerja: "08:00 - 23:00 WIB",
    services: [
      { title: "ADMIN REKBER MLBB", desc: "Fast Respond Messenger" },
      { title: "ADMIN REKBER FF", desc: "Ready 24 Jam via WA" }
    ],
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Ravi&backgroundColor=e0e7ff"
  },
  {
    id: 2,
    name: "Santi Putri",
    alias: "Santi Rekber Indo",
    fb: "https://facebook.com/santi.rekber",
    wa: "0812-9988-7766",
    ig: "@santi_mm",
    jamKerja: "10:00 - 21:00 WIB",
    services: [
      { title: "ADMIN REKBER HOK", desc: "Honor of Kings Specialist" },
      { title: "ADMIN REKBER MLBB", desc: "Aman & Terpercaya" }
    ],
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Santi&backgroundColor=ffedd5"
  },
  {
    id: 3,
    name: "Bimo Sakti",
    alias: "Bimo Trusted JB",
    fb: "https://facebook.com/bimo.sakti",
    wa: "0899-8877-6655",
    ig: "@bimo_rekber",
    jamKerja: "09:00 - 00:00 WIB",
    services: [
      { title: "ADMIN REKBER PUBG", desc: "Sedia Akun Spek Sultan" },
      { title: "ADMIN REKBER ALL GAME", desc: "Fee Murah Bersahabat" }
    ],
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Bimo&backgroundColor=f1f5f9"
  }
];

export const scammers: Scammer[] = [
  {
    id: 1,
    name: "Dani 'Ghost' Setiawan",
    alias: "PENIPU TERVERIFIKASI",
    fb: "https://facebook.com/dani.ghost.scam",
    wa: "0899-1122-3344",
    ig: "---",
    modus: [
      { title: "MODUS EDIT STRUK", desc: "Bukti Transfer Palsu" },
      { title: "MODUS ADMIN PALSU", desc: "Kloning Profil Admin" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ScamA&colors[]=f43f5e"
  },
  {
    id: 2,
    name: "Hendra Ripper",
    alias: "PENIPU TERVERIFIKASI",
    fb: "https://facebook.com/hendra.rip",
    wa: "0838-1122-3344",
    ig: "---",
    modus: [
      { title: "AKUN HACKBACK (HB)", desc: "Menarik Akun Setelah Dijual" },
      { title: "TESTIMONI PALSU", desc: "Edit Chat Customer" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ScamB&colors[]=f43f5e"
  },
  {
    id: 3,
    name: "Admin Palsu (Impersonator)",
    alias: "PENIPU TERVERIFIKASI",
    fb: "https://facebook.com/admin.palsu.jb",
    wa: "0812-3344-5566",
    ig: "---",
    modus: [
      { title: "DUPLIKAT PROFIL", desc: "Persis Foto Profil Admin Asli" },
      { title: "DIRECT TRANSFER", desc: "Memaksa Bayar Tanpa Rekber" }
    ],
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ScamC&colors[]=f43f5e"
  }
];