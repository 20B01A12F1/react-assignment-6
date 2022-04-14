import React, { useState } from 'react';
const initialState={
    email: "",
    password: "",
    gender: "",
    country: "",
    password: "",
    retypepassword: "",
    firstname: "",
    lastname: "",
}
const Loginform = () => {
    const[data,setData]=useState(initialState);
    const handleinput=(e)=>{
        console.log(e.target.name)
        const name=e.target.name
        const value=e.target.values
        setData({...data,[name]:value});
    }
    const FormSubmit=(e)=>{
        e.preventDefault();
        console.log('form submitted');
        console.log(data);
        setData(initialState);
    }
    return (
        <div>
            <form onSubmit={FormSubmit}>
               <input type="email" placeholder="email" name="email" value={data.email} onChange={handleinput}/>
                <br/>
                <input type="password" placeholder="password" name="password" value={data.password} onChange={handleinput}/>
                <br/>
                <input type="password" placeholder="re-type password" name="retypepassword" value={data.retypepassword} onChange={handleinput}/>
                <br/>
                <input type="text" placeholder="first name" name="firstname" value={data.firstname} onChange={handleinput}/>
                <input type="text" placeholder="last name" name="lastname" value={data.lastname} onChange={handleinput}/>
                <br/>
                <input type="radio" name="gender" value={data.gender} onChange={handleinput} /><label htmlFor="Male">Male</label>
                <input type="radio" name="gender" value={data.gender} onChange={handleinput} /> <label htmlFor="Female">Female</label>
                <br/>
                <select name="country" id="country" placeholder="select a country" onChange={handleinput}>
                    <option value="">Select a Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                </select>
                <br/>
                <input type="checkbox" onChange={handleinput}/>
                <label htmlFor="">I agree with terms and conditions</label>
                <br/>
                <input type="checkbox" onChange={handleinput}/>
                <label htmlFor="">I want to recieve Letter</label>
                <br/>
                <button type="Submit">Register</button>
            </form> 
        </div>
    );
};

export default Loginform;
