import React from 'react';
import Navbar from '../Components/Navbar/Navbar.Component';


// This 'DefaultLayoutHoc'/Layout is made for HomePage & PlayPage both
const DefaultLayoutHoc = (Component) =>
  (...props) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    )
  };


export default DefaultLayoutHoc;