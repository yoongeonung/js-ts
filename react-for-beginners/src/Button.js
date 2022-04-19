import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({text}) => {
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button;