import { AppBar, Box, Grid, Toolbar, Typography,TextField, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useNavigation } from 'react-router-dom';
import {Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerBox from './Drawer';
import logo from '../Images/logo-no-background.png'
import { useSelector } from 'react-redux';

function Navbar(){
    const quantity=useSelector((state)=>state.cart.quantity);
    const checkLogin=localStorage.getItem("login");
    
    const Navdata=["Home","Products"];
    const navigate=useNavigate();
    const drawdata=["Home","Products"]
   const theme=useTheme()
    const [value,setValue]=useState();

    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  
    function handleTab(value){
        if(value==="Home"){
            navigate("/")
        }
        else if(value==="Products"){
            navigate("/products")
           
        }
    }
    function handleSignout(){
        localStorage.setItem("login",false);
        navigate("/Login");
    }
   
    var tokenId=localStorage.getItem("isSeller");
   
    return(
        <AppBar xs={{placeitem:"center"}} sx={{backgroundColor:"#141414"}}>
            <Toolbar >
             {isMatch?(<>
               <DrawerBox  data={drawdata} /> 
               <Grid item lg={4.95} md={3.5}  >
                      
                      <Box display="flex" justifyContent="flex-end">
                      <Tabs indicatorColor="secondary" 
                             textColor="white"
                             onChange={(e,value)=>handleTab(value)}
                          >
                            {Navdata.map((link,index)=>(
                             <Tab value={link} color="white"  key={index} label={link} />
                             ))}
                         </Tabs>
                         <Button onClick={handleSignout} sx={{marginLeft:2,color:"red"}} variant='Standard'>
                             SignOut
                          </Button>
                          <Badge badgeContent={quantity} color="success">
                          <ShoppingCartCheckoutIcon onClick={()=>{navigate("/Cart")}} sx={{marginLeft:3,fontSize:"35px"}}/>
                          </Badge>
                      </Box>
                      </Grid>
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
                    <Toolbar> <img src={logo} style={{height:"50px",width:"50px"}} /> </Toolbar>
               
                    </Grid>
                    
                  
                    <Grid item lg={2}  sm={3} md={4}  >
                    <Typography sx={{fontSize:"30px"}} >𝐄𝐥𝐞𝐜𝐭𝐫𝐨𝐌𝐚𝐫𝐭</Typography>
                        
                    </Grid>
                    
                   

                    { checkLogin==="true"? 
                    <>
                    {
                        tokenId === "true" ?
                        
                          <Grid item lg={4} md={3.5}   >
                          <Button onClick={()=>{navigate("/AddProducts")}} sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                                 Add Product
                              </Button>
                          </Grid>
                          :   <Grid item lg={4} md={3.5}   >
                        
                          </Grid>

                    }
                   

                     <Grid item lg={4.95} md={3.5}  >
                      
                     <Box display="flex" justifyContent="flex-end">
                     <Tabs indicatorColor="secondary" 
                            textColor="white"
                            onChange={(e,value)=>handleTab(value)}
                         >
                           {Navdata.map((link,index)=>(
                            <Tab value={link} color="white"  key={index} label={link} />
                            ))}
                        </Tabs>
                        <Button onClick={handleSignout} sx={{marginLeft:2,color:"red"}} variant='Standard'>
                            SignOut
                         </Button>
                         <Badge badgeContent={quantity} color="success">
                         <ShoppingCartCheckoutIcon onClick={()=>{navigate("/Cart")}} sx={{marginLeft:3,fontSize:"35px"}}/>
                         </Badge>
                     </Box>
                     </Grid>
                     </>
                     :
                     <Grid item sm={3} lg={8.95}  md={6} >
                     <Box display="flex">
                         <Button onClick={()=>{navigate("/Login")}} sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                             Login
                         </Button>
                         <Button onClick={()=>{navigate("/Register")}} sx={{marginLeft:2,backgroundColor:"blue"}} variant='contained'>
                            Register
                         </Button>
                        
                     </Box>
                     </Grid>

                    }
                   
                   
                </Grid>
                )}
             
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;

