import { Inter } from 'next/font/google';
import Guide from '@/components/guide';
import Header from '@/components/header';
import LogoContents from '@/components/logo-contents';

const inter = Inter({ subsets: ['latin'] });

function Main() {

  const logoPath = '/next.svg';

  const guides = [
    {
      href:"https://nextjs.org/",
      title: "Next.js",
       
    }
  ]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Header/>
        <LogoContents logoPath={logoPath}/>
        <Guide/>
    </main>
  );
}

export default Main;
