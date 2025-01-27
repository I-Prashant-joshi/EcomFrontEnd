import { 
    AppBar, Box, Grid, Toolbar, Typography, Tabs, Tab, Button, useMediaQuery, useTheme, Badge 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerBox from './Drawer';
import logo from '../Images/logo-no-background.png';
import { useSelector } from 'react-redux';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Navbar() {
    const quantity = useSelector((state) => state.cart.quantity);
    const checkLogin = localStorage.getItem("login");
    const tokenId = localStorage.getItem("isSeller");

    const Navdata = ["Home", "Products"];
    const drawdata = ["Home", "Products"];
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState();

    function handleTab(value) {
        if (value === "Home") {
            navigate("/");
        } else if (value === "Products") {
            navigate("/products");
        }
    }

    function handleSignout() {
        localStorage.setItem("login", "false");
        navigate("/Login");
    }

    return (
        <AppBar sx={{ backgroundColor: "#141414" }}>
            <Toolbar>
                {isMatch ? (
                    <>
                        <DrawerBox data={drawdata} />
                        {
                            checkLogin === "true" ?
                            
                            <Grid item  sx={{width:"100%"}}>
                            <Box display="flex" justifyContent="flex-end">
                                <Tabs 
                                    indicatorColor="secondary" 
                                    textColor="white" 
                                    onChange={(e, value) => handleTab(value)}
                                >
                                    {Navdata.map((link, index) => (
                                        <Tab value={link} key={index} label={link} />
                                    ))}
                                </Tabs>
                                <Button 
                                    onClick={handleSignout} 
                                    sx={{ marginLeft: 2, color: "red" }} 
                                    variant="text"
                                >
                                    <ExitToAppIcon />
                                </Button>
                                <Badge badgeContent={quantity} color="success">
                                    <ShoppingCartCheckoutIcon 
                                        onClick={() => navigate("/Cart")} 
                                        sx={{ marginLeft: 3, fontSize: "35px" }} 
                                    />
                                </Badge>
                            </Box>
                        </Grid>
                            :
                            <Box sx={{ marginLeft: "auto", display: "flex" }}>
                            <Button 
                                onClick={() => navigate("/Login")} 
                                sx={{ backgroundColor: "green" }} 
                                variant="contained"
                            >
                                Login
                            </Button>
                            <Button 
                                onClick={() => navigate("/Register")} 
                                sx={{ marginLeft: 2, backgroundColor: "blue" }} 
                                variant="contained"
                            >
                                Register
                            </Button>
                        </Box>
                        }
                        

                      
                    </>
                ) : (
                    <Box sx={{width:"100%",display:"flex",alignItems:"center"}}>
                        <div style={{width:"100%",display:"flex",alignItems:"center"}}>
                        <Box item>
                            <Toolbar>
                                <img src={logo} style={{ height: "50px", width: "50px" }} alt="Logo" />
                            </Toolbar>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>𝐄𝐥𝐞𝐜𝐭𝐫𝐨𝐌𝐚𝐫𝐭</Typography>
                        </Box>
                        </div>
                        {checkLogin === "true" ? (
                            <>
                                {tokenId === "true" && (
                                    <Grid item lg={4} md={3.5}>
                                        <Button 
                                            onClick={() => navigate("/AddProducts")} 
                                            sx={{ backgroundColor: "green" }} 
                                            variant="contained"
                                        >
                                            Add Product
                                        </Button>
                                    </Grid>
                                )}

                                {/* <Grid item lg={11} md={3.5}> */}
                                    <Box display="flex" justifyContent="flex-end" >
                                        <Tabs 
                                            indicatorColor="secondary" 
                                            textColor="white" 
                                            onChange={(e, value) => handleTab(value)}
                                        >
                                            {Navdata.map((link, index) => (
                                                <Tab value={link} key={index} label={link} />
                                            ))}
                                        </Tabs>
                                        <Button 
                                            onClick={handleSignout} 
                                            sx={{ marginLeft: 2, color: "red" }} 
                                            variant="text"
                                        >
                                            SignOut
                                        </Button>
                                        <Badge badgeContent={quantity} color="success">
                                            <ShoppingCartCheckoutIcon 
                                                onClick={() => navigate("/Cart")} 
                                                sx={{ marginLeft: 3, fontSize: "35px" }} 
                                            />
                                        </Badge>
                                    </Box>
                                {/* </Grid> */}
                            </>
                        ) : (
                            <Grid item sm={3} lg={8.95} md={6}>
                                <Box display="flex">
                                    <Button 
                                        onClick={() => navigate("/Login")} 
                                        sx={{ marginLeft: "auto", backgroundColor: "green" }} 
                                        variant="contained"
                                    >
                                        Login
                                    </Button>
                                    <Button 
                                        onClick={() => navigate("/Register")} 
                                        sx={{ marginLeft: 2, backgroundColor: "blue" }} 
                                        variant="contained"
                                    >
                                        Register
                                    </Button>
                                </Box>
                            </Grid>
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
