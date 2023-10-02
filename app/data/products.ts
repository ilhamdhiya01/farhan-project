export type Product = {
  image: string;
  name: string;
  slug: string;
  category: string;
  stock: number;
  description?: string;
  specification?: string;
};
const createSlug = (name: string) => {
  return name
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};
export const products: Product[] = [
  {
    image: '/images/oven1.jpeg',
    name: 'Electric Baking Oven ED-36 Getra',
    slug: createSlug('Electric Baking Oven ED-36 Getra'),
    category: 'Bread Oven',
    stock: 25,
    description: 'Pengalaman memasak yang tak terlupakan dimulai dengan peralatan yang tepat, dan Electric Baking Oven ED-36 Getra adalah jawaban untuk semua kebutuhan Anda dalam dunia memanggang. Dari panganan lezat hingga kue indah, oven ini telah dirancang dengan cermat untuk membawa keajaiban patiseri langsung ke dapur Anda.',
    specification: 'Model & Tipe	:	ES-1890 | Dimensi	:	180x 90 x 120 cm | Burner	:	2 Pcs + 1 Soup ring | Daya Listrik	:	2x 12000 Watt ( 380V/3P/50Hz) | Material	:	Stainless Steel | Weight	:	186kg',
  },
  {
    image: '/images/oven2.jpeg',
    name: 'Baking Oven KRD-36',
    slug: createSlug('Baking Oven KRD-36'),
    category: 'Bread Oven',
    stock: 50,
    description: 'Kompor induksi ( electric kwali range) besar menggunakan tenaga listrik ini dirancang untuk memasak makanan, menggoreng, menumis, merebus aneka masakan ( asian food, dll)',
    specification: 'Model & Tipe	:	CS-1095DX | Voltase	:	220-240 Volt | Frekuensi	:	50/60 Hz | Daya Listrik Blower	:	250 Watt | Bahan Bakar Utama	:	Gas LPG | Material	:	Stainless Steel | Sistem Pengapian	:	Manual Air Regulator | Diameter Burner	:	45 Cm | Kompartemen	:	1 Burner + 1 Soup Ring | Berat	:	143 Kg | Dimensi	:	105 x 95 x 80/115 Cm',
  },
  {
    image: '/images/cerobong1.jpeg',
    name: 'Cerobong Slicer Getra Q-31',
    slug: createSlug('Cerobong Slicer Getra Q-31'),
    category: 'Cerobong GKR',
    stock: 50,
    description: 'Bread Slicer Getra Q-31 adalah solusi sempurna untuk semua kebutuhan pemotongan roti Anda. Dengan desain yang inovatif dan teknologi mutakhir, alat ini dirancang untuk memberikan kemudahan dan presisi dalam memotong roti dengan hasil yang konsisten, menjadikannya peralatan penting untuk bisnis roti, kafe, atau restoran Anda.',
    specification: 'Model & Tipe	:	Q31 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Daya Listrik Blower	:	250 Watt | Jumlah Pisau	:	31 Pcs | Ketebalan Potong	:	12 mm | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  {
    image: '/images/cerobong2.jpeg',
    name: 'Gas Charbroiler Lava Rock Getra RSK-3',
    slug: createSlug('Gas Charbroiler Lava Rock Getra RSK-3'),
    category: 'Cerobong GKR',
    stock: 60,
    description: 'Bread Slicer Getra Q-GKR  adalah solusi sempurna untuk semua kebutuhan pemotongan roti Anda. Dengan desain yang inovatif dan teknologi mutakhir, alat ini dirancang untuk memberikan kemudahan dan presisi dalam memotong roti dengan hasil yang konsisten, menjadikannya peralatan penting untuk bisnis roti, kafe, atau restoran Anda.',
    specification: 'Model & Tipe	:	RSK-3 | Permukaan Wajan	:	Lava Rock + Cabinet | Ukuran Wajan	:	55 x 45 cm |  Bahan Bakar Utama	:	Gas LPG Low Pressure | Material	:	Stainless Steel | Berat	:	160 Kg | Dimensi	:	700 x 800 x 950 mm',
  },
  {
    image: '/images/kitchen-set1.jpeg',
    name: 'Combi Deck Proofer Getra RFL-24SS+FJ-10',
    slug: createSlug('Combi Deck Proofer Getra RFL-24SS+FJ-10'),
    category: 'Kitchen Shet',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  {
    image: '/images/kitchen-set2.jpeg',
    name: 'Deck RFL-24SS+FJ-10',
    slug: createSlug('Deck RFL-24SS+FJ-10'),
    category: 'Kitchen Shet',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  {
    image: '/images/kitchen-set3.jpeg',
    name: 'Kitchec Set RFL-24SS+FJ-10',
    slug: createSlug('Kitchec Set RFL-24SS+FJ-10'),
    category: 'Kitchen Shet',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  {
    image: '/images/kompor1.jpeg',
    name: 'FJ-10 Kompor',
    slug: createSlug('FJ-10 Kompor'),
    category: 'Kompor',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG',
  },
  {
    image: '/images/kompor2.jpeg',
    name: 'FJ-KRS10 Kompor',
    slug: createSlug('FJ-KRS10 Kompor'),
    category: 'Kompor',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG',
  },
  {
    image: '/images/meja1.jpeg',
    name: 'Cocktail Station/Bar Station Stainless Steel (Available Custom)',
    slug: createSlug('Cocktail Station/Bar Station Stainless Steel (Available Custom)'),
    category: 'Meja Stainless',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Dimensi : 180x70x85 Cm | Material : Full Stainless Steel',
  },
  {
    image: '/images/meja2.jpeg',
    name: 'S/s Working Table with Drawers Getra',
    slug: createSlug('S/s Working Table with Drawers Getra'),
    category: 'Meja Stainless',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Dimensi : 210 x 70 x (85+10) cm | Dimensi Bowl : 80 x 50 x 30 cm | Material : Full Stainless Steel',
  },
  {
    image: '/images/meja3.jpeg',
    name: 'Working Table Stainless Steel WK-180',
    slug: createSlug('Working Table Stainless Steel WK-180'),
    category: 'Meja Stainless',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG',
  },
  {
    image: '/images/meja4.jpeg',
    name: 'Working Table Stainless Steel WK-150',
    slug: createSlug('Working Table Stainless Steel WK-150'),
    category: 'Meja Stainless',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Dimensi : 150x70x85 Cm | Material : Full Stainless Steel',
  },
];
