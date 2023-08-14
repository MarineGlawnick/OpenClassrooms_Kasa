import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import housing from "../datas/housing.json"

function Housing() {
    const { id } = useParams()
    const logement = housing.find((logement) => logement.id === id)

    return (
        <main>
            <Carousel Images={logement.pictures} />
        </main>
    )

}
export default Housing;