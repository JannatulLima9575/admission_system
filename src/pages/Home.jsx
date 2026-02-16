import Hero from "../components/Hero";
import AdmissionInfo from "../components/AdmissionInfo";
import Programs from "../components/Programs";
import AdmissionSteps from "../components/AdmissionSteps";
import Notices from "../components/Notices";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AdmissionInfo />
      <Programs />
      <AdmissionSteps />
      <Notices />
      <CTA />
      <Footer />
    </>
  );
}
