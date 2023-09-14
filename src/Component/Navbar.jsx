import {styled} from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'; 
import '../Component/web.css';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Mobile} from './Responsive';
import {Tab} from './Responsive';


const Container= styled.div`
height:70px;
background-color:black;

`;
const Wrapper= styled.div`
display:flex;
justify-content:space-between;
height:40px;
padding:10px 20px;
background-color: black;
color: rgb(223, 250, 223);

${Mobile({height:"30px",padding:"15px 10px"})};
/* ${Tab({height:"30px",padding:"15px 10px"})}; */


`;

const Left= styled.div`
display:flex;
align-items:center;
flex:1;

`;
const Center= styled.div`
flex:1;
font-size:30px;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
text-shadow:2px 2px red;
${Mobile({display:"none"})};
${Tab({fontSize:"20px",textAlign:"center"})};

`;
const Right= styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
`;
const Language= styled.div`
cursor:pointer;
font-size:25px;
${Mobile({display:"none"})};
${Tab({display:"none"})};

`;
const SrchContainer= styled.div`
border:1px solid black;
margin:0px 10px;
display:flex;


`;
const Input=styled.input`
border:none;
&:focus{
    outline:none;
}
${Mobile({width:"50px",borderRadius:"1px"})};
${Tab({width:"100px"})};


`;
const Item=styled.div`
cursor:pointer;
font-size:25px;
margin:15px;
${Mobile({fontSize:"17px",margin:"5px"})};
${Mobile({fontSize:"15px",margin:"7px"})};

`;


function Navbar(){
    return(
       <Container>
        <Wrapper>
            <Left>
                <Language>
                    En  
                </Language>
                <SrchContainer>
                       <Input placeholder='search'></Input>
                       <SearchIcon></SearchIcon>
                </SrchContainer>
            </Left>
            <Center>
                 <h3>ELECTRO HUB</h3>
            </Center>
            <Right>
                 <Item>
                    Register
                 </Item>
                 <Item>
                   Login
                 </Item>
                <Item >
                <IconButton aria-label="cart">
                        <StyledBadge badgeContent={6} >
                            <ShoppingCartIcon className='cart'/>
                        </StyledBadge>
                </IconButton>
                </Item>
                
            </Right>
        </Wrapper>
       </Container>
    )
}
const StyledBadge = styled(Badge)(({ theme }) => ({
    
    '& .MuiBadge-badge': {
      
      right: -3,
      top: 5,
      border: `2px solid red`,
      padding: '0 4px',
      color:"white"
    },
    
  }));

export default Navbar;