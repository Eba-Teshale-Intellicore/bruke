import GodHelping from "@/components/Godhelping";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return <main className="min-h-screen">
      <div>
        {/* <Navbar/> */}
        <Hero/>
        <Message/>
        <GodHelping/>
      </div>
  </main>
}