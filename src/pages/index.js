import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ResumeSection from '../components/ResumeSection';
// eslint-disable-next-line import/no-named-as-default
import Sidebar from '../components/Sidebar';

import { homeObjOne } from '../components/InfoSection/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <ResumeSection />
      <Projects />
    </>
  );
}

export default Home;
