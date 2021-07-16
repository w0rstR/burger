import React,{Component} from 'react'
import restaurants from '../sample-restaurants'
export default class Lending extends Component{

    state={
        display:false,
        title: "",
        url:""
    }

    displayList=()=>{
        const display=this.state.display
        this.setState({display:!display})
    }

    getTittle=(restaurant)=>{
        const {title,url} = restaurant
        this.setState({title:title,url:url,display:false})
    }

    goToRestaurant=()=>{
        const {url}=this.state
        this.props.history.push(`/restaurant/${url}`)
    }
    render(){
      return(
        <React.Fragment>
            <div className="restaurant_select">
                <div className="restaurant_select_top">
                    <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                        {this.state.title ? this.state.title :"Вибери ресторан"}
                        </div>
                    <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                     </div>
                </div>
                
                {this.state.display ? (<div className="restaurant_select_bottom">
                    <ul>
                        {restaurants.map(restaurant => {
                            return <li onClick={()=>this.getTittle(restaurant)} key={restaurant.id}>{restaurant.title}</li> 
                        })}
                    </ul>
                </div>):null}
                {this.state.title && !this.state.display ? (<button onClick={this.goToRestaurant} >Перейти в ресторан</button>):null} 
            </div>

        </React.Fragment>

        
      )
    }

}