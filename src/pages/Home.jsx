import Banner from "../components/Banner"
import Header from "../components/Header"

import bgImg from "../assets/img/bg_banner.jpg"

function Home() {
    return (
        <div>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" src={bgImg} alt="Image de falaise" />
        </div>
    )
}

export default Home