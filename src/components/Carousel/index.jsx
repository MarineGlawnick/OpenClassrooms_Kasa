import "./_carousel.scss"
import arrowRight from "../../assets/img/arrow-right.svg"
import arrowLeft from "../../assets/img/arrow_left.svg"
import {useState} from "react";

const Carousel = ({Images}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const length = Images.length

    const prev = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    const next = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
    return (
        <section className="slides">
            {Images.map((image, index) => {
                return (
                    <div className={index === currentIndex ? 'slides__container' : 'slides__hidden'} key={index}>
                        < img src={image}/>
                    </div>
                )
            })}

            {length > 1 && <>
                <div className="slides__controller">
                    <a onClick={prev}><img src={arrowLeft} alt="Arrow to the left"/></a>
                    <a onClick={next}><img src={arrowRight} alt="Arrow to the right"/></a>
                </div>
                <div className="slides__counter">{currentIndex + 1}/{length}</div>
            </>}

        </section>
    )
}

export default Carousel