import styles from '../Button/Button.module.css';
const Button =(props) =>(
        <button  className= {styles.Addlist}
            onClick={props.onButtonClick}>
            {props.buttonText}
        </button>
    );

export default Button;