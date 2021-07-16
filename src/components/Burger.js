import React,{Component} from 'react'

export default class Burger extends Component{
    handleClick=()=>{
        this.props.addToOrder(this.props.index)
    }
    
    render(){
        
        const {image,name,price,desc,status}=this.props.details
        const isAvailable=status==='available'

        return(
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name}/>
                </div>

                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₴</span>
                    </h3>
                    <p>{desc}</p>
                    <button className="buttonOrder" disabled={!isAvailable} onClick={this.handleClick}>
                        {isAvailable ? 'Заказать': 'Временно нет'}
                    </button>
                </div>

            </li>
        )
    }
}