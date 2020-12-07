import './burger-ingredients'
import PropTypes from 'prop-types'
import { Component } from 'react';

class BurgerIngredient extends Component{
    render() {

        let ingerdient = null;
    
        switch(props.type){
            case ('bread-bottom'):
                ingerdient = <div className="BreadBottom"></div>
                break;
            case ('bread-top'):
                ingerdient=(<div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>);
                break;
            case ('meat'):
                ingerdient = <div className="Meat"></div> 
                break;
            case ('cheese'):
                ingerdient = <div className="Cheese"></div> 
                break;
            case ('bacon'):
                ingerdient = <div className="Bacon"></div> 
                break;
            case ('salad'):
                ingerdient = <div className="Salad"></div> 
                break;
            default:
               ingerdient = null;
        };
        return ingerdient
    
        BurgerIngredient.PropTypes = {
            type: PropTypes.string.isRequired
        }
    }
}

export default BurgerIngredient