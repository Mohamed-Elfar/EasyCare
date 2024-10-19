import React from 'react'
import style from './Register.module.css'
import {useFormik} from 'formik'
export default function Register() {



let formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  onSubmit:(values)=>{
    console.log("hello Mada",values)
  }
});


  return (
    <>
    <div className="container">
      <h2 className='mb-3'>Register Now</h2>
      <form className=' w-75 mx-auto' onSubmit={formik.handleSubmit}>
          <div className="form-group mb-2">
              <label htmlFor="name">Name</label>
              <input type="text" className='form-control' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
          </div>
          <div className="form-group mb-2">
              <label htmlFor="uEmail">Email</label>
              <input type="email" className='form-control' id='uEmail' name='email' value={formik.values.email} onChange={formik.handleChange} />
          </div>
          <div className="form-group mb-2">
              <label htmlFor="password">Password</label>
              <input type="password" className='form-control' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
          </div>
          <div className="form-group mb-2">
              <label htmlFor="RePassword">RePassword</label>
              <input type="password" className='form-control' id='RePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} />
          </div>
          <div className="form-group mb-2">
              <label htmlFor="Phone">Phone</label>
              <input type="tel" className='form-control' id='Phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
          </div>
          <button className='btn register px-4 py-2 mt-4 ms-auto d-block' type="submit">Register</button> 
      </form>
    </div>
    </>
  )
}
