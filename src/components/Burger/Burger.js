import './burger.css'
import BurgerIngredient from './burger-ingerdients/burger-ingredients'

const Burger = (props) => {


    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default Burger;