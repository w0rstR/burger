import React,{Component} from 'react'
import Shipment from './Shipment'

export default class Order extends Component{

    renderOrder=(key)=>{
        const burger = this.props.burgers[key]
        const count = this.props.order[key]
        const isAvailable=burger&& burger.status==='available'
        if(!isAvailable){
            return <li className="unavailable">
                Извините, {burger ? burger.name:'бургер'} временно недоступен
            </li>
        }
        return(
            <li>
                <span>
                    <span>{count}</span>
                    шт. {burger.name}
                    <span> { count * burger.price } ₴</span>
                    <button className='cancellItem'>&times;</button>
                </span>
            </li>
        )
    }

    render(){

        const ordersIds=Object.keys(this.props.order)
        const total = ordersIds.reduce((prevTotal,key)=>{
            const burger = this.props.burgers[key]
            const count = this.props.order[key]
            const isAvailable = burger && burger.status==='available'
            if(isAvailable){
                return prevTotal+burger.price*count
            }
            return prevTotal
        },0)
        return(
           <div className="order-wrap">
               <h2>Ваш заказ</h2>
               <ul className="order">
                    {ordersIds.map(this.renderOrder)}
               </ul>
               {total > 0 ? (<Shipment total={total}/>): (<div className='nothingSelected'>Вибирете блюда и добавте к заказу</div>)}
           </div> 
        )
    }
}