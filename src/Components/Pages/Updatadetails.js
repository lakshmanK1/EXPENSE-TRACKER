import React,{useContext, useRef} from 'react'
import {BsPersonCircle, BsGlobe2} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AuthenticationContext } from '../Store/AuthContext';

// styled cmps
import { DetailsForm, DetailsLabel, DetailsInput, DetailsButton, DetailsContainer, Heading, CloseButton } from './PageStyledComponents'

function Updatadetails() {

    const UserInputName = useRef();
    const UserInputUrl = useRef();

    const AuthCntx = useContext(AuthenticationContext);

    const handleForm = (e) => {
        e.preventDefault();

        var enteredName = UserInputName.current.value;
        var enteredUrl = UserInputUrl.current.value;

    let url='https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI';
        fetch(url,{
            method:"POST",
            body:JSON.stringify({
                idToken:AuthCntx.token,
                displayName:enteredName,
                photoUrl:enteredUrl,
                returnSecureToken:true,
              }),
            headers:{
                'Content-Type':'application/json'
            }}).then((res)=>{
                if(res.ok){
                    return res.json();
                }else{
                    return res.json().then((data)=>{
                        if(data && data.error && data.error.message){
                            let errMessage = "Authentication Failed, " + data.error.message;
                            throw new Error(errMessage);
                        }
                    })
                }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            alert(err.message);
        })

        var enteredName = UserInputName.current.value='';
        var enteredUrl = UserInputUrl.current.value='';


    }

  return (
    <DetailsContainer>
        <Heading>Contact Details</Heading>
        <Link to='/welcomepage'><CloseButton>cancel</CloseButton></Link>
        <DetailsForm onSubmit={handleForm}>
            <div style={{margin:'8px'}}>
            <DetailsLabel><BsPersonCircle style={{width:'25px',height:'18px'}}/>Full Name: </DetailsLabel>
            <DetailsInput type='text' ref={UserInputName} required/>
            </div>
            <div style={{margin:'8px'}}>
            <DetailsLabel><BsGlobe2 style={{width:'25px',height:'18px'}}/>Profile Photo Url: </DetailsLabel>
            <DetailsInput type='text' ref={UserInputUrl} required/>
            </div><br/>
        
            <DetailsButton>update</DetailsButton>
        </DetailsForm>
    </DetailsContainer>
  )
}

export default Updatadetails