import React, { useEffect, useLayoutEffect } from "react"
import { handleCheckLogin } from "../action/action"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispath = useDispatch();
  const checklogin =useSelector(state=>state.hoby.User)
  const log= localStorage.getItem('token');
 


 useEffect(()=>{
  if(log!=='') navigate('/')
  
},[checklogin])


  const handlelogin = async (data) => {
    const response = await axios.post('https://reqres.in/api/login',
      {
        "email": data.email,
        "password": data.password
      }
    )
   
      if (response.status === 200) {
        console.log(response.data.token)
        dispath(handleCheckLogin(response.data.token))
        localStorage.setItem(Object.keys(response.data)[0],response.data.token)
        navigate('/')
      
      }


  }
  return (
    
    (<Form onSubmit={handleSubmit((data) => handlelogin(data))} style={{ width: "25%", margin: "50px auto 1px" }}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control {...register('email', { required: true })} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control {...register('password', { required: true })} type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>)
  )

}
export default Login