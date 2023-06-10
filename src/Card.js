import './Card.css'
const Card = (props) => {
    return (
        <div className='card'>
            <img className='card__img' src={props.img} alt="img"/>
            <h1 className="card__title">{props.title}</h1>
            <p className="card__sub-title">{props.subTitle}</p>
            <button className='card__button'>{props.nameBtn}</button>
        </div>
    )
}
export default Card