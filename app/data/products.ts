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
    image: '/images/image1.jpg',
    name: 'Electric Baking Oven ED-36 Getra',
    slug: createSlug('Electric Baking Oven ED-36 Getra'),
    category: 'Bread Oven',
    stock: 25,
    description: 'Alat yang digunakan untuk mengikat beberapa jenis kantong plastik dengan isolatif. Biasa digunakan untuk kebutuhan di supermarket, rumah tangga dan untuk kemasan permen, cookies, kelapa dan sebagainya.',
    specification: 'Model & Tipe	:	ES-1890 | Dimensi	:	180x 90 x 120 cm | Burner	:	2 Pcs + 1 Soup ring | Daya Listrik	:	2x 12000 Watt ( 380V/3P/50Hz) | Material	:	Stainless Steel | Weight	:	186kg',
  },
  {
    image: '/images/image2.jpg',
    name: 'Gas Kwali Range Blower Getra CS-1095DX',
    slug: createSlug('Gas Kwali Range Blower Getra CS-1095DX'),
    category: 'Bread Oven',
    stock: 50,
    description: 'Kompor induksi ( electric kwali range) besar menggunakan tenaga listrik ini dirancang untuk memasak makanan, menggoreng, menumis, merebus aneka masakan ( asian food, dll)',
    specification: 'Model & Tipe	:	CS-1095DX | Voltase	:	220-240 Volt | Frekuensi	:	50/60 Hz | Daya Listrik Blower	:	250 Watt | Bahan Bakar Utama	:	Gas LPG | Material	:	Stainless Steel | Sistem Pengapian	:	Manual Air Regulator | Diameter Burner	:	45 Cm | Kompartemen	:	1 Burner + 1 Soup Ring | Berat	:	143 Kg | Dimensi	:	105 x 95 x 80/115 Cm',
  },
  {
    image: '/images/image3.jpg',
    name: 'Bread Slicer Getra Q-31',
    slug: createSlug('Bread Slicer Getra Q-31'),
    category: ' Bakery Equipment',
    stock: 50,
    description: 'Kompor induksi ( electric kwali range) besar menggunakan tenaga listrik ini dirancang untuk memasak makanan, menggoreng, menumis, merebus aneka masakan ( asian food, dll)',
    specification: 'Model & Tipe	:	Q31 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Daya Listrik Blower	:	250 Watt | Jumlah Pisau	:	31 Pcs | Ketebalan Potong	:	12 mm | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  {
    image: '/images/image4.jpg',
    name: 'Gas Charbroiler Lava Rock Getra RSK-3',
    slug: createSlug('Gas Charbroiler Lava Rock Getra RSK-3'),
    category: ' Bakery Equipment',
    stock: 60,
    description: 'Kompor induksi ( electric kwali range) besar menggunakan tenaga listrik ini dirancang untuk memasak makanan, menggoreng, menumis, merebus aneka masakan ( asian food, dll)',
    specification: 'Model & Tipe	:	RSK-3 | Permukaan Wajan	:	Lava Rock + Cabinet | Ukuran Wajan	:	55 x 45 cm |  Bahan Bakar Utama	:	Gas LPG Low Pressure | Material	:	Stainless Steel | Berat	:	160 Kg | Dimensi	:	700 x 800 x 950 mm',
  },
  {
    image: '/images/image5.jpg',
    name: 'Combi Deck Oven + Proofer Getra RFL-24SS+FJ-10',
    slug: createSlug('Combi Deck Oven + Proofer Getra RFL-24SS+FJ-10'),
    category: ' Bakery Equipment',
    stock: 60,
    description: 'Kombinasi deck oven dengan proofer lebih praktis dan menghemat tempat, Oven dioperasikan menggunakan gas LPG sedangkan Proofer menggunakan tenaga listrik.',
    specification: 'Model & Tipe	:	RFL-24SS+FJ-10 | Voltase	:	220-240V | Frekuensi	:	50/60 Hz | Bahan Bakar Utama	:	Gas LPG 2 x 2.2 BTU | Daya Listrik	:	1000 Watt | Kapasitas Oven	:	2 Deck 4 Loyang | Bahan Bakar Utama	:	Gas LPG | Material	:	Besi Cor + Stainless Steel | Berat	:	64.5 Kg | Dimensi	:	650 mm x 610 mm x 750 mm',
  },
  // {
  //   image: '/images/image3.jpg',
  //   name: 'Product 3',
  //   slug: createSlug('Product 3'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Mesin yang digunakan untuk memasang tutup botol plastik dan metal berulir. Biasa diaplikasikan untuk semua jenis botol plastik, kaca, keramik, botol, botol PET, minuman, alkohol, bahan kimia, obat-obatan, dan peralatan produksi lainnya.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image4.jpg',
  //   name: 'Product 4',
  //   slug: createSlug('Product 4'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Mesin yang digunakan untuk mengisi produk cairan / pasta dengan takaran yang sama pada kemasan plastik, botolm dll. Mesin ini bekerja dengan bantuan kompressor angin (tidak termasuk)',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image5.jpg',
  //   name: 'Product 5',
  //   slug: createSlug('Product 5'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image6.jpg',
  //   name: 'Product 6',
  //   slug: createSlug('Product 1'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image7.jpg',
  //   name: 'Product 7',
  //   slug: createSlug('Product 1'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image8.jpg',
  //   name: 'Product 8',
  //   slug: createSlug('Product 1'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image9.jpg',
  //   name: 'Product 9',
  //   slug: createSlug('Product 1'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
  // {
  //   image: '/images/image10.jpg',
  //   name: 'Product 10',
  //   slug: createSlug('Product 1'),
  //   category: 'Mesin',
  //   stock: 25,
  //   description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
  //   specification: {
  //     type: 'ECT 2430',
  //     voltase: '220V',
  //     dayaListrik: '2240 Watt',
  //     kapasitas: '300 pcs',
  //     berat: '15,5 kg',
  //     dimensi: '37 X 42 X 42 cm',
  //   },
  // },
];
