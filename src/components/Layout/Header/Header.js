import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImg from "../../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
}

export default Header;
