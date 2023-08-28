import "./_rating.scss";
import redStar from "../../assets/img/red_star.svg"
import greyStar from "../../assets/img/grey_star.svg"

function Rating({ stars }) {

    const displayRedStar = () => {
        const rate = []
        for (let i = 0; i < stars; i++) {
            rate.push(<img src={redStar} alt="Etoile rouge" key={i} />)
        }
        return rate
    }

    const displayGreyStar = () => {
        const numberGreyStar = 5 - stars
        const rate = []

        for (let i = 0; i < numberGreyStar; i++) {
            rate.push(<img src={greyStar} alt="Etoile grise" key={i} />)
        }
        return rate
    }

    return (
        <div className="rating">
            {displayRedStar()}
            {displayGreyStar()}
        </div>
    )
}
export default Rating