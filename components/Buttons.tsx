import React from 'react';

const CustomButton = (props) => {
 
  return (
    <button {...props} className='btn-intro mx-2'>
    <span className='intro-txt' style={{
      backgroundImage: `linear-gradient(90deg, #ABABAB 0%, #2D2D2D 102.73%),
                        linear-gradient(88.95deg, rgba(255, 255, 255, 0) 80.46%, #FFFFFF 112.56%)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }}>
      {props?.text}
    </span>
  </button>
  
  );
};

export default CustomButton;
