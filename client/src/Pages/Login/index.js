import React, { useEffect, useState } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {  Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, useNavigate}  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/login';

const Login = (props)=>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {loginData,isSession,loader}=useSelector(state=>state.loginData);
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(userLogin(email,password));
    }
    
    useEffect(()=>{
        if(isSession){
            navigate('/homepage') 
        }
    },[isSession])

    return(
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <Card className="mt-4">
                        <CardTitle style={{textAlign:"center",fontSize:"30px"}}>Log In</CardTitle>
                        <Form className="px-4" onSubmit={submitHandler}>
                            <FormGroup >
                                <Label>Email Id</Label>
                                <Input type="text" name="email" id="Email" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            </FormGroup>
                            <Button className="btn btn-sm" color="primary" block>Log In</Button>
                            {/* {error?<div style={{textAlign:"center",marginTop:"10px",color:"red"}}>{error.data.error}</div>:<div></div>} */}
                        </Form>
                        <CardText style={{textAlign:"center",marginTop:"15px",marginBottom:"10px"}}>Don't have an account? <Link to="/signup">Sign Up</Link></CardText>
                    </Card>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Login