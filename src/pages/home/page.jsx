import React from "react";
import Header from "../../assets/components/header/index";
import SignUpSection from "../../assets/components/signup_section/index";
import BuySupplySection from "../../assets/components/buy_supply_section/index";
import VerifiedSection from "../../assets/components/verified_section/index";
import HowItWorks from "../../assets/components/how_it_works/index";
function Home() {
  return (
    <>
      <Header />
      <SignUpSection />
      <BuySupplySection />
      <VerifiedSection />
      <HowItWorks />
    </>
  );
}

export default Home;
