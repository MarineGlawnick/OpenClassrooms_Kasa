import { useParams, Navigate } from "react-router-dom";
import housing from "../datas/housing.json";
import '../assets/sass/pages/_housing.scss';
import Carousel from "../components/Carousel";
import HousingTitle from "../components/HousingTitle";
import Tags from "../components/Tags";

function Housing() {
    const { id } = useParams()
    const logement = housing.find((logement) => logement.id === id)
    if (!logement) {
        return <Navigate to="/Error404" />
    }

    return (
        <main className="housing">
            <Carousel Images={logement.pictures} />
            <div className="housing__info">
                <div className="housing__presentation">
                    <HousingTitle title={logement.title} location={logement.location} />
                    < Tags tags={logement.tags} />
                </div>
            </div>
        </main>
    )

}
export default Housing;