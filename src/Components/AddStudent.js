import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store/Store';

const AddStudent = () => {
    const Navigate = useNavigate();
    const contextData = useContext(Store);

    const newStudent = {
        Name: '',
        Age: '',
        Course: '',
        Batch: ''
    }

    function handleChange(e){
        newStudent[e.target.name] = e.target.value;
    }

    const handleUpdate = () => {
        contextData.data.push(newStudent)
        Navigate('/students')
    }
  return (
    <>
    
  

      <div className='innerparent'>
        <div className='inputBox'>
        <span className='span1'>Name</span> <br/>
        <input className='input1' type='text' placeholder='Name' name='Name'  onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span  className='span1'>Age</span> <br/>
        <input className='input1' type='text' placeholder='Age' name='Age'  onChange={handleChange} required/>
        </div>
        </div>

        <div className='innerparent'>
          <div className='inputBox'>
        <span  className='span2'>Course</span><br/>
        <input className='input2' type='text' name='Course' placeholder='Course' onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span  className='span2'>Batch</span><br/>
        <input className='input2' type='text' name='Batch' placeholder='Batch' onChange={handleChange} required/>
        </div>
        </div>


        
        <div className='buttonmainparent'>
        <div className='buttons'>
        <button onClick={() => Navigate('/students')} className='button1 buttonin'>Cancel</button>
        <button onClick={handleUpdate} className='button2 buttonin'>Submit</button>
      {/* <button onClick={() => Navigate('/students')}>Go Back</button> */}
      </div>
      </div>
      </>
  )
}

export default AddStudent
