function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card-stats">
                <img src="public/images/Star 1.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.rewiewCount} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $ {props.price}</span> / person</p>

        </div>
    )
}

export default Card