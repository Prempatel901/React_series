

import React, { useState } from 'react'

function AdvancedForm() {

    const[formData,setFormData]=useState({
        gender: "",
        agree: false,
        country: "India"
    })

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e)=>{
        //const [name, type, value, checked] = e.target;
        const { name, type, value, checked } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Form with Checkbox, Radio & Select</h2>

            <label >
                <input 
                
                type="radio" 
                name='gender' 
                value='Male' 
                onChange={handleChange} 
                checked={formData.gender === 'Male'}/>
                Male
            </label>

            <label >
                <input 
                type="radio" 
                name='gender' 
                value='Female' 
                onChange={handleChange} 
                checked={formData.gender === 'Female'}/>
                Female
            </label>
            <br />

            <label >
                Country:
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                </select>
            </label>
            <br />

            <label >
                <input 
                type="checkbox" 
                name='agree' 
                onChange={handleChange} 
                checked={formData.agree}/>
                I agree to terms and conditions
            </label>

            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AdvancedForm