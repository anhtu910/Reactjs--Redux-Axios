import React from "react";
import { Navbar,Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Outlet, useNavigate} from 'react-router-dom';
import { handleCheckLogout } from "../action/action";
import { useSelector,useDispatch } from "react-redux"
function Header(){
 const navigate= useNavigate()
  const loginstate=useSelector(state=>state.hoby.User)
  const dispath=useDispatch()
    const handleLogout=()=>
    {
        dispath(handleCheckLogout(''))
        localStorage.setItem('token','')
        navigate('/')


   
    }
  
  
   
    return(
        <div className="Wrap-one" style={{position: "relative"}}>

        <Navbar bg="dark" variant="dark">
  <Container>
    
    <Navbar.Brand as={Link} to={"/"} >Home</Navbar.Brand>
  
     
    <Navbar.Brand as={Link} to={"User"} >Users</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {/* localStorage.getItem('key')===''? */}
      {localStorage.getItem('token')===''?<Button variant="outline-secondary" as={Link} to={"Login"}>Login</Button>:<Button variant="outline-secondary" 
      onClick={()=>handleLogout()} 
      >
          Logout
      </Button>} 
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Outlet></Outlet>
        </div>
    )
}
export default Header