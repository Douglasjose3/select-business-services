import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import SocialMedia from "../components/socialMedia/SocialMedia";
import Hero from "../components/hero/Hero";
import Opportunities from "../components/opportunities/Opportunities";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <Opportunities />
      <SocialMedia />
    </>
  );
}

export default Home;
