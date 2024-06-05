import About from "@/components/About";
import Academics from "@/components/Academics";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Academics />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
