import "./_title.scss"

function HousingTitle(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
        </div>
    )
}

export default HousingTitle