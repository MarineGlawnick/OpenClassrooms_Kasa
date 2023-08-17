import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import housing from "../datas/housing.json"

function Housing() {
    const { id } = useParams()
    const logement = housing.find((logement) => logement.id === id)
    if (!logement) {
        return <Navigate to="/Error404" />
    }

    return (
        <main>
            <Carousel Images={logement.pictures} />
        </main>
    )

}
export default Housing;