
import Footer from "../Component/Footer";
import { styled } from "styled-components";
import laptop from '../Images/laptop.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShareIcon from '@mui/icons-material/Share';
import {Mobile} from '../Component/Responsive';
// import { Container } from '@mui/material';
import '../Component/web.css';
import { publicrequest } from "../RequestMethod";
import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function SingleProduct(){
    const location=useLocation();
    const pathid=location.pathname.split("/")[2]; 
    const [product,setProduct]=useState([]);
    console.log('product', product);
    const {color} = JSON.parse(localStorage.getItem('productData'))
    console.log("colr", color);
   
    const getProduct=async()=>{
        const res= await axios.get(`http://localhost:5000/api/product/find/${pathid}`);
        setProduct(res.data);
        
        localStorage.setItem('productData', JSON.stringify(res.data))
    };

    useEffect(()=>{
            getProduct();
    },[])
    

    return(<Container>
        <Wrapper>
            <ImageContainer>
                    <Image src={product.img} />
                    <Emi>{product.tag}</Emi>   
            </ImageContainer>
            <InfoContainer>
                <Info>
                   <Title>
                   {product.title}
                   </Title>
                   <Pricetype>
                    <Vsp>{product.vsp}</Vsp> <Mrp>{product.mrp}</Mrp>
                   </Pricetype>
                   <Price>
                    <Vsp style={{fontSize:"25px"}}>₹ {product.vsprice}</Vsp> <Mrp style={{fontSize:"18px",textDecoration:"line-through"}}>₹ {product.mrprice}</Mrp>
                    <Off>8% off</Off>
                    
                   </Price>
                   
                   
                   <Title>Select Color</Title>
                   {
                    console.log("colormap")
                   }
                   <ColorType>

                   {
                    color.map((item)=>(
                        <Color bg={item}></Color>
                    ))
                   }
                   
                    </ColorType>
                    <Title>Add More</Title>
                    <Count>
                        <FirstDiv>
                        <AddIcon /><Num>1</Num><RemoveIcon />
                        </FirstDiv>
                        <SecDiv>
                            <Share>Share<ShareIcon /></Share>
                        </SecDiv>
                    </Count>
                  
                   </Info>
                   <ButtonContainer>
                    <Button className='buybtn'> <ThumbUpAltIcon style={{marginRight:"5px"}} /> Buy Now </Button>
                    <Button className='addcart'> <ShoppingCartIcon style={{marginRight:"5px"}} />Add to Cart </Button>
                    </ButtonContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
        </Container>
    )
}
const Container=styled.div`
    background-color: white;
    user-select: none; 
`;
const Emi=styled.div`
      
      width:90%;
    display: flex;
    justify-content: space-around;
    margin:30px;
    font-weight: bold;
    font-size: 30px;
    box-sizing: border-box;
    ${Mobile({fontSize:"18px",margin:"15px",backgroundColor:"lightgrey"})};
    
    /* background-color: #80808039; */
`;

const Wrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    height:100vh;
    ${Mobile({flexDirection:"column"})};

    
`;
const ImageContainer=styled.div`
    flex:1;
    height:100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   
   ${Mobile({flex:"0",height:"200px",width:"90%"})};

`;
const InfoContainer=styled.div`
    flex:1;
    height:100%;
    box-sizing:border-box;
    ${Mobile({height:"10%"})};
  
`;
const Info=styled.div`
text-align: justify;
box-sizing: border-box;
padding: 50px 100px 20px;
${Mobile({padding:"25px",overflow:"hidden"})};

`;

const Image=styled.img`
    margin-top: 30px;
    height:65%;
    width:90%;
    ${Mobile({  height:"82%",width:"90%"})};

    
`;
const Title=styled.p`
    font-size: 20px;
    font-weight: 550;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 10px;
    letter-spacing: 0.7px;
    ${Mobile({fontSize:"15px"})};
   
    
`;
const ButtonContainer=styled.div`
   
    width:90%;
    display: flex;
    justify-content: space-around;
    margin:60px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #80808039;

 
  ${Mobile({width:"90%",margin:"10px",padding:"5px"})};

`;
const Button=styled.button`
padding: 12px 25px;
cursor: pointer;

box-sizing: border-box;
/* height: 40px;
width: 150px; */
font-size: 18px;
font-weight: bold;
justify-content: center;
display: flex;
align-items: center;
border-radius: 7px;
`;
const Pricetype=styled.div`
  display: flex;
  width: 28%;
  justify-content: space-between;
  margin-top: 50px;
  font-weight: 500;
  font-size: 20px;
  ${Mobile({width:"55%"})};
 
`;
const Price=styled.div`
   display: flex;
  width: 45%;
  margin-bottom: 30px;
  justify-content: space-between;
  ${Mobile({width:"90%",marginTop:"10px"})};

`;
const Off=styled.div`
  font-size: 20px;
  color:green;
  font-weight: bold;
  
`;
const Vsp=styled.div`
  
  
`;
const Mrp=styled.div`
  color: grey;
  margin-left: 15px;
`;

const ColorType=styled.div`
display: flex;
margin-top:5px;

`;
const Color=styled.div`
height: 35px;
cursor: pointer;

margin:5px;
width:35px;
border-radius: 50%;
background-color: ${(props)=>props.bg};
border:1px solid black;
`;
const Count=styled.div`
display: flex;
font-size: 25px;
margin:20px 0;
/* background-color: red; */
justify-content: space-between;
text-align: center;
`;
const Num=styled.div`
display: flex;
text-align: center;
justify-content: center;
border-radius: 10px;
height: 35px;
width: 35px;
background-color: #706e6e58;

`;
const FirstDiv=styled.div`
display: flex;
font-size: 25px;
margin:20px 0;
justify-content: space-between;
width: 100px;
align-items: center;
`;
const SecDiv=styled.div`
display: flex;
font-size: 25px;
margin:20px 0;
justify-content: center;
align-items: center;
padding:10px;
border-radius: 10px;
border:2px solid green;
background-color: skyblue;
cursor: pointer;


`;
const Share=styled.div`

`;
export default SingleProduct;