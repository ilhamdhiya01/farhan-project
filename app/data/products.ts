import { useCreateSlug } from '../hooks/useCreateSlug';
export type Product = {
  image: string;
  name: string;
  slug: string;
  category: string;
  stock: number;
  description: string;
  specification: {
    type: string;
    voltase: string;
    dayaListrik: string;
    kapasitas: string;
    berat: string;
    dimensi: string;
  };
};

export type Specification = {
  type: string;
  voltase: string;
  dayaListrik: string;
  kapasitas: string;
  berat: string;
  dimensi: string;
};
export const products: Product[] = [
  {
    image: '/images/image1.jpg',
    name: 'Product 1',
    slug: useCreateSlug('Product 1'),
    category: 'Mesin',
    stock: 25,
    description: 'Alat yang digunakan untuk mengikat beberapa jenis kantong plastik dengan isolatif. Biasa digunakan untuk kebutuhan di supermarket, rumah tangga dan untuk kemasan permen, cookies, kelapa dan sebagainya.',
    specification: {
      type: 'ECT 2430',
      voltase: '220V',
      dayaListrik: '2240 Watt',
      kapasitas: '300 pcs',
      berat: '15,5 kg',
      dimensi: '37 X 42 X 42 cm',
    },
  },
  {
    image: '/images/image2.jpg',
    name: 'Product 2',
    slug: useCreateSlug('Product 2'),
    category: 'Mesin',
    stock: 25,
    description: 'Printer yang digunakan untuk mencetak label tanggal produksi / kode produksi pada bahan plastik dan bahan kertas. Mesin ini menghasilkan cetakan yang tajam dan berdaya tahan tinggi. Biasa digunakan pada industri makanan dan farmasi.',
    specification: {
      type: 'ECT 2430',
      voltase: '220V',
      dayaListrik: '2240 Watt',
      kapasitas: '300 pcs',
      berat: '15,5 kg',
      dimensi: '37 X 42 X 42 cm',
    },
  },
  {
    image: '/images/image3.jpg',
    name: 'Product 3',
    slug: useCreateSlug('Product 3'),
    category: 'Mesin',
    stock: 25,
    description: 'Mesin yang digunakan untuk memasang tutup botol plastik dan metal berulir. Biasa diaplikasikan untuk semua jenis botol plastik, kaca, keramik, botol, botol PET, minuman, alkohol, bahan kimia, obat-obatan, dan peralatan produksi lainnya.',
    specification: {
      type: 'ECT 2430',
      voltase: '220V',
      dayaListrik: '2240 Watt',
      kapasitas: '300 pcs',
      berat: '15,5 kg',
      dimensi: '37 X 42 X 42 cm',
    },
  },
  {
    image: '/images/image4.jpg',
    name: 'Product 4',
    slug: useCreateSlug('Product 4'),
    category: 'Mesin',
    stock: 25,
    description: 'Mesin yang digunakan untuk mengisi produk cairan / pasta dengan takaran yang sama pada kemasan plastik, botolm dll. Mesin ini bekerja dengan bantuan kompressor angin (tidak termasuk)',
    specification: {
      type: 'ECT 2430',
      voltase: '220V',
      dayaListrik: '2240 Watt',
      kapasitas: '300 pcs',
      berat: '15,5 kg',
      dimensi: '37 X 42 X 42 cm',
    },
  },
  {
    image: '/images/image5.jpg',
    name: 'Product 5',
    slug: useCreateSlug('Product 5'),
    category: 'Mesin',
    stock: 25,
    description: 'Alat untuk memanggang roti tawar dengan elemen pemanas dengan sistem mekanik konveyor. Dilengkapi dengan timer dan switch selector, alat ini memiliki kapasitas produksi 150~450 lembar roti / jam.',
    specification: {
      type: 'ECT 2430',
      voltase: '220V',
      dayaListrik: '2240 Watt',
      kapasitas: '300 pcs',
      berat: '15,5 kg',
      dimensi: '37 X 42 X 42 cm',
    },
  },
  // {
  //   image: '/images/image6.jpg',
  //   name: 'Product 6',
  //   slug: useCreateSlug('Product 1'),
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
  //   slug: useCreateSlug('Product 1'),
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
  //   slug: useCreateSlug('Product 1'),
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
  //   slug: useCreateSlug('Product 1'),
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
  //   slug: useCreateSlug('Product 1'),
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
