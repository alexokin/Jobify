import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import Logo from '../components/Logo'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby master cleanse kogi shaman, activated charcoal banh mi
            meditation four loko heirloom paleo cliche. Bitters vape echo park
            wolf 3 wolf moon gentrify paleo flannel farm-to-table next level
            vegan ethical mixtape cardigan DIY.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
