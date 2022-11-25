import styled from "styled-components";

export const Container = styled.div``;
export const HeaderText = styled.h1`text-align:center;
font-size: 42px; background: -webkit-linear-gradient(#eee, #2192ff);
-webkit-background-clip: text; -webkit-text-fill-color: transparent;`;

export const MessageDiv = styled.div`background-color:#D6E4E5; width:350px;
border-radius:5px; padding:5px; float:right; text-align:center; margin-right:15px;`;
export const Span = styled.span`color:blue; font-style:italic; cursor:pointer;`;
export const Text = styled.p``;
export const EmailVerifyBTN = styled.button`float:right; font-size:22px;color:#2192ff; border:2px solid #2192ff; 
background-color:white; padding:10px; font-weight:600; margin-right:15px; width:180px; `;
export const MainHead = styled.div`margin-top:50px;`;


//expense related
export const AddExpenseButton = styled.button`         
   background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
   margin: 10px; padding: 15px 45px; text-align: center;
   text-transform: uppercase; transition: 0.5s; background-size: 200% auto;
   color: white;box-shadow: 0 0 20px #eee; border-radius: 10px;
   display: block; height:70px; cursor:pointer;
 :hover {
   background-position: right center; /* change the direction of the change here */
   color: #fff;
   text-decoration: none;
 }
`;
export const ExpenseBTNdiv = styled.div`margin-left:600px;`;

//UpdatedDetails page
export const DetailsContainer = styled.div`margin: 3rem auto;
border-radius: 6px; background-color: white;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 1rem; text-align: center; width:70%`; 
export const DetailsForm = styled.form`margin: 3rem auto;
border-radius: 6px; background-color: white; width:70%;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 1rem; text-align: center; display:flex;`;
export const DetailsLabel = styled.label``;
export const DetailsInput = styled.input`border:1px solid grey`;
export const DetailsButton = styled.button`width:90px; border-radius:6px; background-color:#7F8487; color:white;
font-size:17px; border:none;cursor:pointer;`;
export const Heading = styled.h1`float:left;`;
export const CloseButton = styled.button`float:right; width:90px; background-color:white; color:red;
font-size:17px; border:none;cursor:pointer; padding:5px; border:1px solid red; border-radius:6px; `;


