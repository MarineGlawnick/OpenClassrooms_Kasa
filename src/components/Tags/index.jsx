import "./_tags.scss"

function Tags({ tags }) {
    return (
        <div className="tag">

            {tags.map((tag, i) => {
                return (
                    <div className="tag__container" key={i}>
                        <p className="tag__name" >{tag}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Tags