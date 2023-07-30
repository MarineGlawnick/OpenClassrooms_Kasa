import "./_card.scss"

function Card({ id, title, image }) {
    return (
        <article key={id} className="card">
            <a href={'/housing/' + id}>
                <img src={image} alt={title} />
                <h1 className="card_title">{title}</h1>
            </a>
        </article>
    )
}

export default Card;