import "./_host.scss";

function HostInfo({ image, host }) {
    return (
        <div className="host">
            <p className="host__name">{host}</p>
            <img src={image} alt='Host profile picture'/>
        </div>
    )
}


export default HostInfo;