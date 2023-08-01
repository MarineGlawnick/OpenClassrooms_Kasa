import AboutBanner from "../components/AboutBanner"
import mountainPicture from "../assets/img/mountain_view.png"
function About() {
   return(
       <AboutBanner src={mountainPicture} alt={"A view over a mountain landscape"} />
   )
}

export default About