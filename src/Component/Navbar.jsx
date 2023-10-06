import { AppBar, Box, Grid, Toolbar, Typography,TextField, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerBox from './Drawer';

function Navbar(){
    
    const Navdata=["Products","Contact"];
    const navigate=useNavigate();
    const drawdata=["Product","Contact Us"]
   const theme=useTheme()
    const [value,setValue]=useState();

    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  
   
    return(
        <AppBar xs={{placeitem:"center"}} sx={{backgroundColor:"#141414"}}>
            <Toolbar >
             {isMatch?(<>
               <DrawerBox  data={drawdata} /> 
              
                <Box sx={{marginLeft:"auto",display:"flex"}}>
                    <Button sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                        Login
                    </Button>
                    <Button sx={{marginLeft:2,backgroundColor:"blue"}} variant='contained'>
                       Register
                    </Button>
                    <ShoppingCartCheckoutIcon sx={{marginLeft:3,fontSize:"35px"}}/>
                </Box>
                
                </>
             
             ):    (<Grid sx={{placeItems:"center"}} container>
                    <Grid  item >
                        <Typography sx={{marginRight:1}}>En</Typography>
                    </Grid>
                  
                    <Grid item xs={3} md={1.5} >
                    <TextField  size={'small'}  id="Pass" label="Search" variant="outlined"  fullWidth 
                    sx={{
                    
                       ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root" : {
                        border: "2px solid white", color:"white"
                       }
                        }} />       
                    </Grid>
                    <Grid item xs={0.1}></Grid>
                    <Grid item xs={3} ><SearchIcon></SearchIcon></Grid>
                    <Grid item xs={3}>
                    <Tabs indicatorColor="secondary"
                            textColor="inherit"
                            value={value}
                            onChange={(e, val) => { setValue(val) }}>
                           {Navdata.map((link,index)=>(
                            <Tab color="white" key={index} label={link} />
                            ))}
                        </Tabs>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <Box display="flex">
                        <Button onClick={()=>{navigate("/Login")}} sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                            Login
                        </Button>
                        <Button onClick={()=>{navigate("/Register")}} sx={{marginLeft:2,backgroundColor:"blue"}} variant='contained'>
                           Register
                        </Button>
                        <ShoppingCartCheckoutIcon onClick={()=>{navigate("/Cart")}} sx={{marginLeft:3,fontSize:"35px"}}/>
                    </Box>
                    </Grid>
                   
                </Grid>
                )}
             
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;


// import {styled} from 'styled-components'
// import SearchIcon from '@mui/icons-material/Search'; 
// // import '../Component/web.css';
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {Mobile} from './Responsive';
// import {Tab} from './Responsive';
// import { NavLink, useNavigate } from 'react-router-dom';


// const Container= styled.div`
// height:70px;
// background-color:black;

// `;
// const Wrapper= styled.div`
// display:flex;
// justify-content:space-between;
// height:40px;
// padding:10px 20px;
// background-color: black;
// color: rgb(223, 250, 223);

// ${Mobile({height:"30px",padding:"15px 10px"})};
// /* ${Tab({height:"30px",padding:"15px 10px"})}; */


// `;

// const Left= styled.div`
// display:flex;
// align-items:center;
// flex:1;

// `;
// const Center= styled.div`
// flex:1;
// font-size:30px;
// display:flex;
// align-items:center;
// justify-content:center;
// font-weight:600;
// text-shadow:2px 2px red;
// ${Mobile({display:"none"})};
// ${Tab({fontSize:"20px",textAlign:"center"})};

// `;
// const Right= styled.div`
// flex:1;
// display:flex;
// justify-content:flex-end;
// align-items:center;
// `;
// const Language= styled.div`
// cursor:pointer;
// font-size:25px;
// ${Mobile({display:"none"})};
// ${Tab({display:"none"})};

// `;
// const SrchContainer= styled.div`
// border:1px solid black;
// margin:0px 10px;
// display:flex;


// `;
// const Input=styled.input`
// border:none;
// &:focus{
//     outline:none;
// }
// ${Mobile({width:"50px",borderRadius:"1px"})};
// ${Tab({width:"100px"})};


// `;
// const Item=styled.div`
// cursor:pointer;
// font-size:25px;
// margin:15px;
// ${Mobile({fontSize:"17px",margin:"5px"})};
// ${Mobile({fontSize:"15px",margin:"7px"})};

// `;


// function Navbar(){
//     const navigate=useNavigate();
//     return(
//        <Container>
//         <Wrapper>
//             <Left>
//                 <Language>
//                     En  
//                 </Language>
//                 <SrchContainer>
//                        <Input placeholder='search'></Input>
//                        <SearchIcon></SearchIcon>
//                 </SrchContainer>
//             </Left>
//             <Center>
//                  <h3>ELECTRO HUB</h3>
//             </Center>
//             <Right>
//                  <Item onClick={()=>{navigate("/Register")}}>
//                  Register
//                  {/* <NavLink to="/Register">Register</NavLink>    */}
//                  </Item>
//                  <Item onClick={()=>{navigate("/Login")}}>
//                    Login
//                  </Item>
//                 <Item >
//                 <IconButton aria-label="cart">
//                         <StyledBadge badgeContent={6} >
//                             <ShoppingCartIcon className='cart' onClick={()=>{navigate("/Cart")}} />
//                         </StyledBadge>
//                 </IconButton>
//                 </Item>
                
//             </Right>
//         </Wrapper>
//        </Container>
//     )
// }
// const StyledBadge = styled(Badge)(({ theme }) => ({
    
//     '& .MuiBadge-badge': {
      
//       right: -3,
//       top: 5,
//       border: `2px solid red`,
//       padding: '0 4px',
//       color:"white"
//     },
    
//   }));

// export default Navbar;