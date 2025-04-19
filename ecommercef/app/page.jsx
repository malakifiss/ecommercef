// app/page.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Highlights";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Hero />

        <SignedOut>
          <div className="container mx-auto px-4 py-12 text-center text-white">
        
          </div>
        </SignedOut>

        <Footer />
      </main>
    </>
  );
}
