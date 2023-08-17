import "./_host.scss";

function HostInfo({ image, host }) {
    return (
        <div className="host">
            <p className="host__name">{host}</p>
            <img src={image} />
        </div>
    )
}


export default HostInfo;