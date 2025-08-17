import Navbar from '../careerpath-ai/src/components/Navbar';
import HeroSection from '../careerpath-ai/src/components/HeroSection';
import FeaturesSection from '../careerpath-ai/src/components/FeaturesSection';
import AgeGroupsSection from '../careerpath-ai/src/components/AgeGroupsSection';
import Footer from '../careerpath-ai/src/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AgeGroupsSection />
      <Footer />
    </>
  );
}
