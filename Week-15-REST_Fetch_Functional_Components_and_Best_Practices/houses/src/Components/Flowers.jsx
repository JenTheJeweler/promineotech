import React, {useEffect, useState} from 'react'



function Flowers(props) {
 console.log("this is my flowers data", props)
 const flowersName = props.flowersdata.commonName;
 console.log(flowersName)
  // return (
  //   <div>
  //    {flowersName} this is my flowers component

  //   </div>
  // );
}

export default Flowers;