// App.js
import React from 'react';
import './App.css';
import NavBar from './Components/Layout/Navbar/NavBar';
import Description from './Components/Description/Description';
import ourStory from './Images/story.jpg'
import Icon from './Images/icon.png'
import Whynow from './Images/whynow.jpeg'
import ImagesContainer from './Components/ImagesContainer/ImagesContainer';
import Congressional from './Images/Congressional.png';
import Forbes from './Images/Forbes.png';
import TheVerge from './Images/The-Verge.png';
import Nestle from './Images/Nestle-Logo-Round.png';
import Sua from './Images/sua.png';
import University from './Images/university.jpg';
import Bayrout from './Images/bayrout.jpg';
import Team from './Components/Team/Team';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Layout/Footer/Footer';
import Slider from './Components/Slider/Slider';
import OurVision from './Components/OurVision/OurVision';

const App = () => {
  const descriptionTextOurStory = ["Our Joumey started when we priched at the Comet Emerging MaretsInsti ich competion in 220 Vi submit 3 ceo of hae vebove the plete should work mad won bn the competition.",
    "Since Qciober 2020 the video we have boctutrapped this venture sndPut ogethc tan which trafomed the vision cloningtrademark protection.",
    "he are a proud women owned and operated business and our drwe is enable brand owners ccs aflordtie hay band protection services which allows them to save money while ensuring"
  ]
  const descriptionTextWhyNow = [
    "Mismatch between GovTech and consumer technology which leaves brand owners vulnerable.",
    "The rapid pace of change in emerging technologies and platforms requires continued monitoring and this problem will keep getting bigger. |",
    "A couple of years ago, when we told consumers about Al it was a foreign concept With the increased accessibility and awareness of Al technologies, consumers are ready for this legal tech.",
    "IP assets are more important than ever, and ensuring protection and optimization regardless of size of company is important for success of any business... |"
  ]
  const iconDescription = ["CORRELL ER EER", "MARKETS INSTITUTE AWARD"]
  const ImagesList = [
    Congressional,
    Forbes,
    TheVerge,
    Nestle,
    Sua,
    University,
  ]
  const ImagesList2 = [
    Nestle,
    Sua,
    University,
    Bayrout,
    Congressional,
    Forbes,
  ]
  return (
    <>
      <NavBar />
      <Slider />
      <Description
        mainImage={ourStory}
        smallText="OUR STORY"
        Title="How it all started..."
        descriptionText={descriptionTextOurStory}
        icon={Icon}
        iconDescription={iconDescription}
      />
      <OurVision />
      <Description
        mainImage={Whynow}
        smallText="WhyNow"
        Title="Rapid advancement in consumer tech and Al generated content..."
        descriptionText={descriptionTextWhyNow}
      />
      <ImagesContainer Imagesrc={ImagesList} FlexReverse={false}/>
      <Team />
      <ImagesContainer Imagesrc={ImagesList2} FlexReverse={true}/>
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
