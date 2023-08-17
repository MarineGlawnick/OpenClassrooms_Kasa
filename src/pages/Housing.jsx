import { useParams, Navigate } from "react-router-dom";
import housing from "../datas/housing.json";
import '../assets/sass/pages/_housing.scss';
import Carousel from "../components/Carousel";
import HousingTitle from "../components/HousingTitle";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse"
import HostInfo from "../components/HostInfo";

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
                <div>
                    <HostInfo image={logement.host.picture} host={logement.host.name} />
                </div>
            </div>
            <div className="housing__collapses">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipement" content={logement.equipments.map((equipement) => {
                    return (
                        <ul className="housing__list" >
                            <li>{equipement}</li>
                        </ul>
                    )
                })} />
            </div>
        </main>
    )

}
export default Housing;