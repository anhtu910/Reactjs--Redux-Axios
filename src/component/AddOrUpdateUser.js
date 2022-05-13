import React, { useRef } from 'react';
import '../css/C-U.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleCheckAddOrUpdate } from '../action/action';
import axios from 'axios';
import { memo } from 'react';



function AddOrUpdateUser({ value = "", ID }) {
    const checkOr = useSelector(data => data.hoby.CheckAddOrUpdate)
    const Student = useSelector(data => data.hoby.ListUser)
    const dispacth = useDispatch();
    const { register, handleSubmit } = useForm();
    const valueCheck = useRef()

    const closeTab = () => {
        document.getElementById('CreateUser').style.display = "none"
        dispacth(handleCheckAddOrUpdate(''))

    }
    const CreateOrUpdateUser = async (data) => {
        if (checkOr !== "") {
            valueCheck.current = await axios.put(`http://localhost:63743/api/student/`, {
                id: checkOr,
                ...data
            })
        }
        else {
            valueCheck.current = await axios.post(`http://localhost:63743/api/student/`, {

                ...data
            })

        }
        dispacth(handleAdd(valueCheck))



    }

    return (
        <div id='CreateUser' style={{
            // overflow: "scroll",
            // // position: "fixed",
            // // top: "0",
            // // bottom: "0",
            // // right: "0",
            // // left: "0",
            // // backgroundColor: "rgba(0, 0, 0, 0.6)",
            // // display: "none",
            // // alignItems: "center",
            // // justifyContent:"center",
            // margin: "0 auto",
            // position: "fixed",
            // top: "0",
            // bottom: "0",
            // right: "0",
            // left: "0",
            // display: "none",
            // width: "100%",

            // // opacity:"0.8",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            // alignItems: "center",
            // justifyContent: "center"

        }}>

            s
            <div className='Wap-form' style={{
                // width: "65%",
                // opacity: "1",
                // // marginTop:"100px",
                // backgroundColor: "#fff",
                // alignItems: "center",
                // margin: "52px auto 1px",
                // transition: " 0 auto",
                // position: "absolute",
                // left: "50%",
                // transform: "translateX(-50%)",
                // justifyContent: "center",
                // display: "flex",
                // flexDirection: "column",
            }}                 >
                <h1>{checkOr===''?"Create":"Update"}</h1>
                <Form style={{ width: "500px" }} onSubmit={handleSubmit(data => CreateOrUpdateUser(data))} id='Formadd'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>StudentCode</Form.Label>
                        <Form.Control {...register('StudentCode', checkOr === '' ? { required: true } : { required: false })} type="text" placeholder="StudentCode" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register('Name', checkOr === '' ? { required: true } : { required: false })} type="text" placeholder="Name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register('Email', checkOr === '' ? { required: true } : { required: false })} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control {...register('Address', checkOr === '' ? { required: true } : { required: false })} type="text" placeholder="Address" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control {...register('Birthday', checkOr === '' ? { required: true } : { required: false })} type="date" placeholder="Enter email" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create By</Form.Label>
                        <Form.Control {...register('CreateBy', checkOr === '' ? { required: true } : { required: false })} type="text" placeholder="Create By" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>CreateDate</Form.Label>
                        <Form.Control {...register('CreateDate', checkOr === '' ? { required: true } : { required: false })} type="date" placeholder="CreateDate" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {checkOr !== '' ? 'Update' : 'Create'}
                    </Button>
                </Form>

                <Button onClick={() => closeTab()} className="Close" variant="dark"
                    style={{ position: "absolute", top: "5px", right: "10px" }}
                >
                    Close
                </Button>


            </div>


        </div>
    )
}
export default memo(AddOrUpdateUser);
