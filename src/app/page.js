import { Header } from '@/sections/Header/Header';
import { Hero } from '@/sections/Hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className=" w-full">
        <Hero />
      </main>
    </>
  );
}
