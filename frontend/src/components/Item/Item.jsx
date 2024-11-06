import react from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ksh{props.new.price}
                </div>
                <div className='item-price-old'>
                    ksh{props.old.price}

                </div>

            </div>

        </div>
    )
}

export default Item