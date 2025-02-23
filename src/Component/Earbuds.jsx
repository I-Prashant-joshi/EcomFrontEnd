import { styled } from "styled-components";
import {Mobile} from './Responsive';
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";


function Earbuds({value}){
  const navigate=useNavigate();   
 const theme = useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'));
    return(
        

           <Container>
            <NavLink to={`products/earbuds/product/${value.id}`}>
            {isMobile
            ?
            <Wrapper>
          <Image src={value.img} />
           <Info>
                {value.title}
          </Info>
            <Price></Price>
            </Wrapper>
            :
            <Wrapper >
            <Image src={value.img} />
           <Info>
                {value.title}

            <Price>
            {value.vsp}
            {value.price}
           </Price>
           <Mrp>
            <Item>{value.MRP}</Item>
            <Item>{value.mrp}</Item>
            <Item>{value.off}</Item>
           </Mrp>
           
           </Info>
           <Tag>
            {value.tag}
           </Tag>
         </Wrapper>
            
            }
             </NavLink>
           </Container> 
    )

}
const Wrapper=styled.div`
 height: 350px;
 width: 310px;
 margin: auto;
background-color: white;
 position: relative;  
 z-index: 0;
 display: block;
 transition : all 0.7s ease; 
 font-size: 14px;
 text-align: justify;
 &:hover{
 height: 340px;
 width: 285px;
 /* font-size: 13px; */
 ${Mobile({height:"245px",width:"175px",})}
 }

 ${Mobile({height:"250px",width:"180px",})};

`;
const Container=styled.div`
 flex:1;
 overflow: hidden;
 margin: auto;
 background-color: #929592;
 ${Mobile({display:"flex",margin:"1px",overflow:"visible",height:"",width:"150px", backgroundColor:"black"})};


`;
const Image=styled.img`
height: 200px;
width: 100%;
object-fit: contain;
margin: 0 auto;
${Mobile({height:"150px"})};
`;
const Info=styled.div`
width: 80%;
margin: auto;
font-weight: bold;
${Mobile({width:"90%"})};
`;
const Price=styled.div`
color:red;
font-size: 13px;
margin: 8px 0;
`;
const Mrp=styled.div`
display: flex;
font-size: 13px;
color:#6c6a6a;
`;
const Item=styled.div`
margin-right:10px;
&:nth-child(even){
text-decoration: line-through;
}
`;
const Tag=styled.div`
position: absolute;
font-size: 13px;
width: 90%;
margin: auto;
color:#403d3d;
font-weight: bold;
padding: 10px;
text-align: center;
bottom: 0;

`;


export default Earbuds;