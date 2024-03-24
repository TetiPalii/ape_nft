import { About } from '@/sections/About/About';
import { Faq } from '@/sections/Faq/Faq';
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
      </main>
    </>
  );
}
