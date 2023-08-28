import Banner from "../components/Banner"

import bgImg from "../assets/img/bg_banner.jpg"
import CardGallery from "../components/CardGallery"

function Home() {
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" src={bgImg} alt="Image de falaise"/>
            <CardGallery/>
        </main>
    )
}

export default Home