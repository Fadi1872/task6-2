import Arrivales from "../../sections/Home/Arrivales/Arrivales"
import Customers from "../../sections/Home/Customers/Customers"
import Features from "../../sections/Home/Features/Features"
import FrontCameras from "../../sections/Home/FrontCamers/FrontCameras"
import FullScreenSection from "../../sections/Home/FullScreenSection/FullScreenSection"
import Hero from "../../sections/Home/Hero/Hero"
import Innovative from "../../sections/Home/Innovative/Innovative"
import NewFeatures from "../../sections/Home/NewFeatures/NewFeatures"
import PowerFeatures from "../../sections/Home/PowerFeatures/PowerFeatures"
import backGroundImg from "./../../assets/applelogo.png"

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <Features />
      <NewFeatures />
      <PowerFeatures />
      <FullScreenSection img={backGroundImg} title='JENNIFER F., CASPER CUSTOMER' subTitle='"Unbeatable price, and it’s super comfortable"' button />
      <FrontCameras />
      <Innovative />
      <Arrivales />
      <Customers />
    </>
  )
}

export default Home