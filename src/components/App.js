import React,{Component} from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import sampleBurgers from '../sample-burgers'
import Burger from './Burger'
export default class App extends Component{
    
    state={
        burgers:{},
        order:{}
    }

    addBurger=(burger)=>{
        console.log('addBurger',burger)
        // Створюємо копію обєкту statu. Принцп імутабельності
        const burgers = {...this.state.burgers}
        // Додаємо новий бургер в burgers
        burgers[`burger${Date.now()}`]=burger
        // записуємо наш новий обєкт burgers в state
        this.setState({burgers:burgers})

    }

    loadSampleBurger=()=>{
        this.setState({burgers:sampleBurgers})
    }

    addToOrder=(key)=>{
        // 1. Копию ебєкту state
        const order={...this.state.order}
        // 2. Добавляєм ключ до замовлення зі значенням 1, або обновити його значення
        order[key] = order[key] + 1 || 1
        // 3. Записуємо наш новий обєкт order в state
        this.setState({order:order})
    }

    render(){
        return(
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very hot burger" amaunt={10} hot={true}/>
                    {/* <Header tittle="Hot " amaunt={20} hot={true}/>
                    <Header tittle="Burger" amaunt={0}/> */}
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key=>{
                            return <Burger 
                            key={key}
                            index={key}
                            details={this.state.burgers[key]} addToOrder={this.addToOrder}
                            />
                        })}
                    </ul>
                </div>
                <Order/>
                <MenuAdmin addBurger={this.addBurger} loadSampleBurger={this.loadSampleBurger}/>
            </div>
        )
    }
}
