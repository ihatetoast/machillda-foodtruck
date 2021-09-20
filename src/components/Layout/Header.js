import React, { Fragment } from "react";
import bannerImg from "../../assets/ice-cream-6395523.jpeg";
import classes from "./Header.module.css";
import CartButton from "../UI/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Machillda's Cold Spells</h1>
        <p>Brrrrrilliantly wicked frozen delights</p>
        <CartButton />
      </header>
      <div>
        <img src={bannerImg} alt="food truck with a person holding ice cream" />
      </div>
    </Fragment>
  );
};
export default Header;
