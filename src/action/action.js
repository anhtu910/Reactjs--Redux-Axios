import { ADD_USER,UPDATE_USER,DELETE_USER, CHECKLOGIN_USER,CHECKLOGOUT_USER,CHECKADDORUPDATE,GET } from "./constant"


const handleAdd =(payload)=>{
    return{
        data :payload,
        type: ADD_USER

    }
}
const handleCheckLogin =(payload)=>{
    return{
        data :payload,
        type: CHECKLOGIN_USER

    }
}
const handleCheckAddOrUpdate =(payload)=>{
    return{
        data :payload,
        type: CHECKADDORUPDATE

    }
}
const handleCheckLogout =(payload)=>{
    return{
        data :payload,
        type: CHECKLOGOUT_USER

    }
}
const handleUpdate =(payload)=>{
    return{
        data :payload,
        type: UPDATE_USER

    }
}
const handleDelete =(payload)=>{
    return{
        data :payload,
        type: DELETE_USER

    }
}
const handlGet =(payload)=>{
    return{
        data :payload,
        type: GET

    }
}
export {handleAdd,handleUpdate,handleDelete,handleCheckLogin,handleCheckLogout,handleCheckAddOrUpdate,handlGet}
