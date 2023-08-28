import "./_collapse.scss"
import {useState} from "react";
import arrowDown from "../../assets/img/arrow_down.svg"
import arrowUp from "../../assets/img/arrow_up.svg"

function Collapse({content, title}) {
    const [isOpen, setOpen] = useState(false)
    const setOpenCollapse = () => {
        setOpen(!isOpen)
    }
    return (
        <div className="collapse_container" onClick={setOpenCollapse}>
            <div className="collapse_container__title">
                <h1>{title}</h1>
                {isOpen ? <img src={arrowUp} alt="An arrow pointing up"/> :
                    <img src={arrowDown} alt="An arrow pointing down"/>}
            </div>
            {isOpen &&
                <div className="collapse_container__content">
                    {Array.isArray(content) ?
                        (<ul className="collapse_container__content--list">
                            {content.map((equipment, i) => (
                                <li key={i}>{equipment}</li>))}
                        < /ul>)
                        : (<p>{content}</p>)
                    }
                </div>
            }
        </div>
    )
}

export default Collapse