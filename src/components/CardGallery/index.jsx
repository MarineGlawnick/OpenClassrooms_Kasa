import housings from '../../datas/housing.json'
import Card from '../Card'
import "./_gallery.scss"

function CardGallery() {
    return (
        <section className='home_gallery'>
            {housings.map((housing) => (
                <Card image={housing.cover} id={housing.id} title={housing.title} key={housing.id}/>
            ))}
        </section>
    )
}

export default CardGallery