import React from "react";
import Image from "next/image";


const ImageComp = () => {
  return (

    <div>
        <img
        src="/assets/image.png"
        alt="hamburger"
        style={{ width: '612px', height: '100%' }}
        />
    </div>
    
      
    // <div className="relative" style={{ width: '100%', height: '100vh' }}> {/* Adjust height as needed */}
    //     {/* First image (bottom layer) */}
    //     <img
    //     src="/assets/image.png"
    //     alt="hamburger"
    //     style={{ width: '612px', height: '612px', position: 'absolute', top: '0', left: '0' }}
    //     />

    //     {/* Second image (top layer) */}
    //     <img
    //     src="/assets/rectangle.png"
    //     alt="red"
    //     style={{ width: '649.33px', height: '1143.68px', position: 'absolute', top: '0', left: '0' }}
    //     />
    // </div>

    
  );
};

export default ImageComp;
