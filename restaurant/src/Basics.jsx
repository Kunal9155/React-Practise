import React from 'react'

const Basics =  () => {
  return(
    <React.Fragment>
       <h1>WELCOME TO REACT { 60 + 9 } </h1>
       {/* nested component */}
       <MyName/>
       <MyName/>
       <MyName/>
       <MyName/>
       <MyName/>

    </React.Fragment>

  );
}

const MyName = () => { 
  return(
    <h2>kunal arora</h2>
  );
}

export default Basics;