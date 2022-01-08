import React, { useState } from 'react'
import './style.css';
import Menucard from './Menucard'
import Menu from './menuApi.js'

const Restaurant = () => {
    const [Menudata, setMenudata] = useState(Menu);

const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) =>{
       return curElem.category === category;
    });
    setMenudata(updatedList);
};


    return (
        <>

     <center> <h1><b><i>APNA DHABA </i></b></h1></center>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick = { () => filterItem("breakfast")} >
                    Breakfast
                    </button>
                    <button className="btn-group__item" onClick = { () => filterItem("lunch")} >
                    Lunch
                    </button>
                    <button className="btn-group__item" onClick = { () => filterItem("evening")} >
                    Evening
                    </button>
                    <button className="btn-group__item" onClick = { () => filterItem("dinner")} >
                    Dinner
                    </button>
                    <button className="btn-group__item" onClick = {() => setMenudata(Menu)} >
                    All
                    </button>
                 

                
              
            </div>
        </nav>




            <Menucard MenuData={Menudata} />
        </>
    )
}
export default Restaurant;