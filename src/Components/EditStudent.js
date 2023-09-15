import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Store } from '../Store/Store';
import "../App.css"
const EditStudent = () => {
    const Navigate = useNavigate();
    const indexData = useLocation().state.index;
    const contextData = useContext(Store);

    const updateData = {
        Name: contextData.data[indexData].Name,
        Age: contextData.data[indexData].Age,
        Course: contextData.data[indexData].Course,
        Batch: contextData.data[indexData].Batch
    }

    function handleChange(e){
        updateData[e.target.name] = e.target.value;
    }

    const handleUpdate = () => {
        contextData.data[indexData] = updateData;
        Navigate('/students')
    }

  return (
    <>
    
    <div className='innerparent'>
        <div className='inputBox'>
        <span  className='span1'>Name</span> <br/>
        <input className='input1' type='text' name='Name' placeholder={contextData.data[indexData].Name} onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span className='span1'>Age</span> <br/>
        <input className='input1' type='text' name='Age' placeholder={contextData.data[indexData].Age} onChange={handleChange} required/>
        </div>
        </div>

        <div className='innerparent'>
          <div className='inputBox'>
        <span  className='span2'>Course</span><br/>
        <input className='input2' type='text' name='Course' placeholder={contextData.data[indexData].Course} onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span  className='span2'>Batch</span><br/>
        <input className='input2' type='text' name='Batch' placeholder={contextData.data[indexData].Batch} onChange={handleChange} required/>
        </div>
        </div>

        
        <div className='buttons'>
        <button onClick={() => Navigate('/students')} className='button1 buttonin'>Cancel</button>
        <button onClick={handleUpdate} className='button2 buttonin'>Update</button>
      {/* <button onClick={() => Navigate('/students')}>Go Back</button> */}
      </div>
      </>
  )
}

export default EditStudent
