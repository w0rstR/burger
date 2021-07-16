import React from 'react'


const Header=props=>(
    <header className='top'>
            <div className="wrap">
            <div className="header-content">

                <div className="header-raiting">
                    <div className="header-raiting_tag">Рейтинг:</div>
                    <div className="header-raiting_icon">★★★★★</div>
                </div>

                <div className="header-divider"></div>
                <h1 className='font-effect-fire-animation'>{props.title}</h1>
                <h3>
                    <span>
                        Бистрая доставка горячих
                        <span className='sub-header'>
                             Бургеров
                        </span>
                    </span>
                </h3>


            </div>
        </div>
    </header>
)
export default Header


// export default class Header extends Component{
//     render(){
//         return(
//             <header className='top'>
//                 <div className="wrap">
//                 <div className="header-content">

//                     <div className="header-raiting">
//                         <div className="header-raiting_tag">Рейтинг:</div>
//                         <div className="header-raiting_icon">★★★★★</div>
//                     </div>

//                     <div className="header-divider"></div>
//                     <h1 className='font-effect-fire-animation'>{this.props.title}</h1>
//                     <h3>
//                         <span>
//                             Бистрая доставка горячих
//                             <span className='sub-header'>
//                                  Бургеров
//                             </span>
//                         </span>
//                     </h3>


//                 </div>
//             </div>
//             </header>
            
//         )
//     }
// }