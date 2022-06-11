import React from 'react';
import style from './styles/index.scss';

const Button = (props) => {
  const {
    className = '',
    styles: customStyles = {},
    handleClick = () => {},
    children
  } = props;

  const styles = {
    ...style,
    ...customStyles,
  }
  
  return (
    <button className={`button ${className}`} style={styles} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;