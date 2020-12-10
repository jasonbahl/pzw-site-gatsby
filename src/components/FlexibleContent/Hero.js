import React from 'react';

const Hero = (layout) => {
  
  return (
    <section dangerouslySetInnerHTML={{__html: layout.data.heroText}} />
  )

};

export default Hero;