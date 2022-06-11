import React from 'react';
import style from './styles/index.css';

const Card = (props) => {
  const {
    title = 'Lorem',
    content = 'Lorem ipsum dolor sit amet.',
    color = 'rgba(43, 173, 224, 0.911)',
    image = 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
    backdropFilter = 'blur(15px)',
    children,
  } = props;

  const styles = {
    ...style,
    backdropFilter,
  }
  

  return (
    <div className='card' style={styles}>
      {children}
      {/* <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
      <span className='title' style={{ color }}>{title}</span>
      <span className='content'>{content}</span> */}
    </div>
  )
}

export default Card;