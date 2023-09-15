import React, {useState} from "react";
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Home from "../Components/Home";
import Contactus from "../Components/Contactus";
import Students from "../Components/Students";
import { Store } from "../Store/Store";
import EditStudent from "../Components/EditStudent";
import AddStudent from "../Components/AddStudent";
//import { GoogleFont, TypographyStyle } from 'react-typography';

function RouteCompo (){
    const [stdata,setData] = useState([
        {id: 1,Name : "John", Age : 26, Course : "MERN", Batch : "October"},
        {id: 2,Name : "Doe", Age : 25, Course : "MERN", Batch : "November"},
        {id: 3,Name : "Biden", Age : 26, Course : "MERN", Batch : "September"},
        {id: 4,Name : "Barar", Age : 22, Course : "MERN", Batch : "September"},
        {id: 5,Name : "Christ", Age : 23, Course : "MERN", Batch : "October"},
        {id: 6,Name : "Elent", Age : 24, Course : "MERN", Batch : "November"},
        {id: 7,Name : "Harshita Sharma", Age : 24, Course : "MERN", Batch : "October"},
    ])
    
    return(
        <div>
            <BrowserRouter>
                <div className="navbar">
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/' className="link">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/students' className="link">Students</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/contactus' className="link">Contact Us</NavLink>
                </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={
                    <Store.Provider value={{data : stdata, dataFunc : setData}}>
                        <Students />
                    </Store.Provider>
                } />
                <Route path="/editstudent" element={
                    <Store.Provider value={{data : stdata, dataFunc : setData}}>
                    <EditStudent />
                    </Store.Provider>
                } />
                <Route path="/addstudent" element={
                    <Store.Provider value={{data : stdata, dataFunc : setData}}>
                  <AddStudent />
                    </Store.Provider>
                } />
                <Route path="/contactus" element={<Contactus />} />
            </Routes>


            </BrowserRouter>
        </div>
    )
}

export default RouteCompo;