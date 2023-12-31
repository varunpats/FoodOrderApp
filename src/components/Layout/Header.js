import { Fragment } from "react";
import HeaderCartButton from './HeaderCatButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.showCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious meal!" />
        </div>
    </Fragment>
}

export default Header;