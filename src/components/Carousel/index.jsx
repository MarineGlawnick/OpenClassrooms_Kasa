import "./_carousel.scss"
import arrowRight from "../../assets/img/arrow-right.svg"
import arrowLeft from "../../assets/img/arrow_left.svg"
import housing from "../../datas/housing.json"

function Carousel() {

    const prev = () => { }
    const next = () => { }
    return (
        <section>
            <div className="slides_container">
                {housing.map((picture, index) => (
                    <img src={picture} key={index} />
                ))}
            </div>
            <div>
                <a onClick={prev}><img src={arrowLeft} /></a>
                <a onClick={next}><img src={arrowRight} /></a>
            </div>
        </section>
    )
}

export default Carousel