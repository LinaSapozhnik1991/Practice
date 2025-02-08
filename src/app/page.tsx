import React from 'react';
import NavBar from '@/components/NavBar';
import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import AboutSection from '@/components/sections/About/AboutSection';
import ProvideSection from '@/components/sections/Provide/ProvideSection';
import FeaturedSection from '@/components/sections/Feature/FeaturedSection';
import ClientSaySection from '@/components/sections/Say/ClientSaySection';
import CreateSection from '@/components/sections/Create/CreateSection';



const Home: React.FC = () => {
  return (
 
    <div className={styles.container}>
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <ProvideSection/>
      <FeaturedSection/>
      <ClientSaySection/>
      <CreateSection/>
    </div>
  
  );
};
export default Home;
