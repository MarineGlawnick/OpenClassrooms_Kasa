import "./_carousel.scss"
import arrowRight from "../../assets/img/arrow-right.svg"
import arrowLeft from "../../assets/img/arrow_left.svg"
import { useState } from "react";

const Carousel = ({ Images }) => {

    const [currentPic, setCurrentPic] = useState(0)
    const length = Images.length

    const prev = () => {
        setCurrentPic(currentPic === 0 ? length - 1 : currentPic - 1)
    }

    const next = () => {
        setCurrentPic(currentPic === length - 1 ? 0 : currentPic + 1)
    }
    return (
        <section className="slides">
            {Images.map((image, index) => {
                return (
                    <div className={index === currentPic ? 'slides__container' : 'slides__hidden'} key={index}>
                        < img src={image} />
                    </div>
                )
            })}
            {length > 1 && (
                <div className="slides__controller">
                    <a onClick={prev}><img src={arrowLeft} /></a>
                    <a onClick={next}><img src={arrowRight} /></a>
                </div>
            )}
        </section>
    )
}

export default Carousel