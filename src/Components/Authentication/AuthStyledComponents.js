import styled from 'styled-components'


export const FormContainer = styled.div` margin: 3rem auto;
 max-width: 25rem; border-radius: 6px; 
background-color: #2192FF; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 2rem; text-align: center; height:500px;`;

export const Wrapper = styled.div`width:100%; 
background: #005AA7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #FFFDE4, #005AA7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #FFFDE4, #005AA7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Form = styled.form`margin: 3rem auto;
border-radius: 6px;
background-color: white;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 1rem;
text-align: center;
`;
export const Label = styled.label`display: block;
color: #2192FF; font-size:22px;
font-weight: 500;
margin-bottom: 0.5rem;  margin:10px;`;
export const Input = styled.input`font: inherit;
background-color: white;
color: black;
border-radius: 4px;
border: 2px solid #2192FF;
width: 100%;
text-align: left;
padding: 0.25rem;`;
export const Button = styled.button`cursor: pointer; font: inherit; color: white;
background-color: #2192FF; border: 1px solid white; margin:10px;
border-radius: 4px; padding: 1rem 3rem;`;
export const ToggleButton = styled.button` margin-top: 1rem;
background-color: transparent; color: white; align-items:center; justify-content:center;
border: 1px solid white;padding: 0.5rem 2.5rem; margin-top:0px;`;