import "./_banner.scss"

function AboutBanner(props) {
    return (
        <div className='about_banner'>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default AboutBanner;