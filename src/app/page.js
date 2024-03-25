import { About } from '@/sections/About/About';
import { Collection } from '@/sections/Collection/Collection';
import { Contact } from '@/sections/Contact/Contact';
import { Faq } from '@/sections/Faq/Faq';
import { Footer } from '@/sections/Footer/Footer';
import { Header } from '@/sections/Header/Header';
import { Hero } from '@/sections/Hero/Hero';
import { MindMap } from '@/sections/MindMap/MindMap';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full ">
        <Hero />
        <About />
        <MindMap />
        <Faq />
        <Collection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
