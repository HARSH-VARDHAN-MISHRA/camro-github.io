import React from 'react'
import './Login.css'
import bg from  './bg.png'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({
        Email:"",
        Password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit= async (event) =>{
        setLoading(true)
        event.preventDefault()
        try{
            const response = await axios.post("https://cooker.onrender.com/api/v1/Login",formData)
            console.log(response.data);
            toast.success('Login SuccessFull')
            setLoading(false)
        }
        catch(err){
            console.log(err.response.data.
                message
                
                );
            toast.error(err.response.data.
                message)

            setLoading(false)

        }
    }
  return (
    <>
    {loading ? (
        <Loading/>
    ) : ( <section className='login-account'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-none d-md-block p-0 img-relative">
                        <img src={bg} className=''  alt="" />

                        <div className="img-absolute ">
                            <h2>Welcome to <br /> Camro </h2>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="form">
                            <h3>Sign in Account </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum ratione, aperiam praesentium debitis tenetur?</p>

                            <form >
                                <input required type="email" name="Email" onChange={handleChange} value={formData.Email} placeholder='Email Id' />
                                <input required type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder='Password' />

                                <div className="flex">
                                    <div className="keep">
                                        <i class="fa-solid fa-check"></i> Keep me signed in
                                    </div>
                                    <div className="member">
                                        <Link to="/sign-in">Create Account</Link>
                                    </div>
                                </div>

                                <input onClick={handleSubmit} type="submit" value="SIGN IN " />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>)}
       
    </>
  )
}

export default Login