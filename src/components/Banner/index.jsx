import "./_banner.scss"

function Banner(props) {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Banner