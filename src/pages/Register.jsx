import React, { useState } from "react";
//  import { styled } from "styled-components";
import img from '../Images/back2.avif';
import {Avatar ,Button, Checkbox, Grid, Paper, Stack, TextField, Typography} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Registerapi } from "../Redux/apicall";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   
    const handleSubmit=async(e)=>{
            e.preventDefault();
            const data={
                username,email,password
            }
            console.log(data);
        if(!username || !email || !password)
        {
            alert("Please fill all data");
        }    
        else{

          const registerData =await Registerapi(dispatch,data);
            console.log("data from register",registerData);
          if(registerData)
            {
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/Login")
            }
           
        }
       
    }
           
    const handleCancel=(e)=>{
        e.preventDefault();
  
        setUsername("");
        setEmail("");
        setPassword("");
      
   }
    return(
        <Grid  style={{backgroundImage:`url(${img})`,height:"85vh",margin:"100px auto",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
        <Grid sx={{margin:"0px auto"}} >
               <Paper align="center" elevation={10} style={{borderRadius:"20px",backgroundColor:"rgba(249, 247, 245, 0.15)",backdropFilter:"blur(3px)",color:"white" , padding:"35px",width:500,margin:"10px auto"}}>
                    <Avatar sx={{bgcolor:"Orange",margin:"10px 0"}}>
                      <HowToRegIcon></HowToRegIcon>
                    </Avatar>
                    <Typography variant="h4" sx={{bgcolor:"Orange",margin:"10px 0"}}>
                        Register
                    </Typography>
                    <Typography sx={{margin:"20px 0 40px 0"}}>
                        " Please fill this Form"
                    </Typography>
                        <form onSubmit={handleSubmit} autoComplete="off" >
                        <TextField id="username" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} label="username" variant="outlined"   fullWidth sx={{margin:"20px 0 25px 0","& .MuiInputLabel-root": {color:'white'},"& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "white" }}}}  />
                      
                        <TextField  id="email"  value={email} label="email" onChange={(e)=>setEmail(e.target.value)} variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0","& .MuiInputLabel-root": {color:'white'},"& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "white" }}}}/>

                        <TextField type="password" value={password} id="Pass" onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0","& .MuiInputLabel-root": {color:'white'},"& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "white" }}}} />
                      

                        
                        <Checkbox /> I agree On Terms&Condition
                        <Stack direction="row" spacing={40}>
                            <Button type="Cancel" variant="contained" color="error" onClick={handleCancel} >Cancel</Button>
                            <Button type="submit" variant="contained" color="success">Register</Button>
                        </Stack>

                        </form>

               </Paper>
        </Grid>
        </Grid>
    );
}
// const Container=styled.div`

// width: 100vw;
// display: flex;

// justify-content: center;
// background-repeat: no-repeat;
// background-size: cover;
// color:#efe9e9;
// /* border:2px solid white; */

// /* background-image: url("https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg"); */
// `;
export default Register;




// import { styled } from "styled-components";
// import img from '../Images/back2.avif';

// function Register(){
//     return(
//             <Container style={{backgroundImage:`url(${img})`}} >
//                 <Wrapper>
//                     <Form>
//                         <Header>Register</Header>
//                         <Des>Please fill in this form to Register.</Des>
//                         <label>First Name</label>
//                         <input type="text" placeholder="Enter here "/>
//                         <label>Last Name</label>
//                         <input type="text" placeholder="Enter here "/>
//                         <label>User Name</label>
//                         <input type="text" placeholder="Enter here "/>
//                         <label>Email</label>
//                         <input type="email" placeholder="Enter Email "/>
//                         <label>Password</label>
//                         <input type="password" placeholder="Enter Password" />
                       
//                         <label>Confirm-Password</label>
//                         <input type="password" placeholder="ReEnter Password" />
//                       <Agg>By creating an account you agree to our <a href="#home">Terms & Privacy</a>.</Agg>
//                       <Buttoncontainer>
//                         <Button bg="red">Cancel</Button>
//                         <Button bg="green">Register</Button>
//                       </Buttoncontainer>
//                     </Form>
//                 </Wrapper>
//             </Container>
//     )
// }

// const Container=styled.div`
// height: 100vh;
// width: 100vw;
// display: flex;
// align-items: center;
// justify-content: center;
// background-repeat: no-repeat;
// background-size: cover;
// color:#efe9e9;
// /* border:2px solid white; */

// /* background-image: url("https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg"); */
// `;


// const Wrapper=styled.div`
// border:0.5px solid white; 
// width:40%;
// border-radius: 15px;
// background-color: transparent;
// backdrop-filter: blur(4px);
// `;
// const Form=styled.form`
//     display: flex;
//     flex-direction:column;
//     padding: 30px;
//     label{
//         font-size: 25px;
//         font-weight: 500;
//     }
//     input{
     
//         height: 35px;
//         margin:15px;
//         font-size: 25px;
       
//     }
//     input:focus{
//      outline: none;
//      background-color: #f1eeee;
//      color:black;
     
//  }
// `;
// const Header=styled.h1`
//     /* display: flex; */
//     font-size: 45px;
//     width: 100%;
//     text-align: center;
//     /* margin:15px; */
//     font-weight: 400;

     
   
// `;
// const Des=styled.p`
//     /* display: flex; */
//     width: 100%;
//     font-size: 22px;
//     color:white;
//     text-align: center;
   
// `;
// const Agg=styled.p`
//     /* display: flex; */
//     width: 100%;
//     font-size: 20px;
//     margin-bottom: 20px;
//     margin-top: 20px;
//     text-align: center;
   
// `;
// const Buttoncontainer=styled.div`
//     display: flex;
//     margin-top: 10px;
//     justify-content: space-between;
// `;
// const Button=styled.button`
//     /* flex:1; */
//     height: 45px;
//     width:45%;
//     font-size: 20px;
//     font-weight: 600;
    
//     background-color: ${(props)=>props.bg};
//     color:white;
    
// `;
// export default Register