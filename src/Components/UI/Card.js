import classses from './Card.module.css'

const Card = (props) => {

    return (
        <div className={`${classses.card} ${props.className}`}>{props.children}</div>
    )

}
export default Card;