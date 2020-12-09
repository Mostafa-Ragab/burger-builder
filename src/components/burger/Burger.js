import Classes from './burger.module.css'
const Burger = (props) => {
    const tranformedIngredients = Object.keys(props.ingredients).map(igkey => {...Array(props.ingredients[igkey]).map((-,i) => {
        return <BurgerIngredients key={igkey + i } type={igkey} /> 
    })})

}

export default Burger