import "./_collapse.scss"
import { useState } from "react";
import arrowDown from "../../assets/img/arrow_down.svg"
import arrowUp from "../../assets/img/arrow_up.svg"

function Collapse(props) {
    const [isOpen, setOpen] = useState(false)
    const setOpenCollapse = () => {
        setOpen(!isOpen)
    }
    return (
        <div className="collapse_container">
            <div className="collapse_container__title" onClick={setOpenCollapse}>
                <h1>{props.title}</h1>
                {isOpen ? <img src={arrowUp} alt="An arrow pointing up" /> : <img src={arrowDown} alt="An arrow pointing down" />}
            </div>
            {isOpen &&
                <div className="collapse_container__content">
                    <p>{props.content}</p>
                </div>
            }
        </div>
    )
}

export default Collapse