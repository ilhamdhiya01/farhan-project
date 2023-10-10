import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import FixedButton from './components/FixedButton';
import QuickViewModal from './components/modal/QuickViewModal';
import GaleryOverviewModal from './components/modal/GaleryOverviewModal';

const font = Nunito({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: {
    default: 'My Title',
    template: '%s',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${font.className} className='w-full min-h-screen box-border'`}>
        <ClientOnly>
          <Navbar />
          <Sidebar />
          <FixedButton />
          <QuickViewModal />
          <GaleryOverviewModal />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
