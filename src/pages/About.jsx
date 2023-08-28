import AboutBanner from "../components/AboutBanner"
import mountainPicture from "../assets/img/mountain_view.png"
import CollapseGallery from "../components/CollapseGallery";

function About() {
    return (
        <main>
            <AboutBanner src={mountainPicture} alt={"A view over a mountain landscape"}/>
            <CollapseGallery/>
        </main>

    )
}

export default About