import "./_tags.scss"

function Tags({ tags }) {
    return (
        <div className="tag">

            {tags.map((tag) => {
                return (
                    <div className="tag__container">
                        <p className="tag__name" key={tag}>{tag}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Tags