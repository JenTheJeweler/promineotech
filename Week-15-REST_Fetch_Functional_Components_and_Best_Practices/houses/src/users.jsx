import React, {useEffect, useState} from 'react';

function Users(props) {
 console.log("this is my user data", props)
 const userName = props.userdata.name 
 console.log(userName)
  return (
    <div>
     {userName} this is my user component

    </div>
  );
}

export default Users;