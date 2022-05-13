import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import { Button, Table } from "react-bootstrap";
import AddOrUpdateUser from "../component/AddOrUpdateUser";
import { handleCheckAddOrUpdate } from '../action/action';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleDelete } from "../action/action";
import axios from "axios"
import { handlGet } from "../action/action";
import { useNavigate } from "react-router-dom";




function UserList() {
  const navigate=useNavigate()
  const checkload =useSelector(state=>state.hoby.User)
  const Student = useSelector(data => data.hoby.ListUser)
  const checklogin=localStorage.getItem('token')

  
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    axios.delete(`http://localhost:63743/api/student/${id}`)
      .then(res => {
        dispatch(handleDelete(id))
      })
  }

  const openTab = (ID) => {
    document.getElementById('CreateUser').style.display = "block"
    if(ID) dispatch(handleCheckAddOrUpdate(ID))
  }

  useLayoutEffect(() => {
    if(checklogin===''||checkload==='')navigate('/login')
    axios.get('http://localhost:63743/api/student')
      .then(res => res.data)
      .then(res => {
        console.log(res)
        dispatch(handlGet(res))
      })
  }, [JSON.stringify(Student)])
  return (
    checklogin!==''&&
    <div className="Wrap-2" style={{}}>
      <h4>List User</h4>
      <Table className="anhtu123" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>StudentCode</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>CreateBy</th>
            <th>CreateDate</th>
            <th>IsDelete</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Student.map((x, index) => (
            <tr key={index}>
              <th>{x.ID}</th>
              <th>{x.StudentCode}</th>
              <th>{x.Name}</th>
              <th>{x.Email}</th>
              <th>{x.Address}</th>
              <th>{x.Birthday}</th>
              <th>{x.CreateBy}</th>
              <th>{x.CreateDate}</th>
              <th>{x.IsDelete}</th>
              <th><Button variant="outline-secondary" onClick={() => { deleteUser(x.ID) }} >Delete</Button></th>
              <th><Button variant="outline-secondary" onClick={() => {openTab(x.ID) }} >Update</Button></th>

            </tr>))}


        </tbody>
      </Table>
      <Button style={{ marginBottom: "20px" }} onClick={() => openTab()} variant="dark">Create</Button>
      <AddOrUpdateUser />
    </div>
  )
}

export default UserList