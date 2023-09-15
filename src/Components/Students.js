import React, { useContext } from 'react'
import "../App.css";
import {  NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../Store/Store';

function Students() {
const displayData = useContext(Store)
const Navi = useNavigate();
  
  return (
    <div>
      <div className='studentbutton'>
      <h1>Students Details</h1>
      <button className='button' onClick={() => Navi('/addstudent')}>Add new student</button>
      </div>

      <table className='table'>
        <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
              
            </tr>
        </thead>

        
           
            <tbody>
            {displayData.data.map((item,index) => {
               return(
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>
                  <NavLink to='/editstudent' state={{index}}>Edit</NavLink>
                </td>
              </tr>
            
              )
        })}
        </tbody>

      </table>
    </div>

    
  )
}

export default Students

