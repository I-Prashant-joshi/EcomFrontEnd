import { styled } from "styled-components";
// import SendIcon from '@mui/icons-material/Send';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Mobile} from './Responsive';

function News(){
    return(
        <Container>
            <Title>
                    UPDATE ME
            </Title>
            <DES>Get timely update about your favouite product </DES>
            <InputContainer>
                 <Input placeholder="Your Email ?" type="Email" />
               
                 <ArrowCircleRightIcon style={{fontSize:"50px",marginLeft:"10px",color:"green"}}></ArrowCircleRightIcon>

            </InputContainer>
         
            
            
        </Container>
    )
}
const Container=styled.div`

background-color: #afabac;
color:black;
width: 85vw;
height: 50vh;
margin: 20px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${Mobile({margin:"10px auto",width: "90vw",height:"30vh"})};
`;
const Title=styled.div`
font-size: 4rem;
font-weight: 300;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
${Mobile({fontSize:"2rem"})};

`;
const DES=styled.div`
font-size: 1.5rem;
/* margin: 15px; */
padding:30px;
${Mobile({fontSize:"1rem"})};


`;
const Input=styled.input`
padding: 10px;
flex:8;

`;
const InputContainer=styled.div`
width: 30%;
display: flex;
${Mobile({width:"80%"})};


`;
export default News;