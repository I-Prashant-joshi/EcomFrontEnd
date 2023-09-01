import {styled} from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'; 
import '../Component/web.css';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Container= styled.div`
height:70px;
background-color:black;
`;
const Wrapper= styled.div`
display:flex;
justify-content:space-between;
height:40px;
padding:10px 20px;
background-color: #ede9e9;
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


`;
const Item=styled.div`
cursor:pointer;
font-size:25px;
margin:15px;
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
                       <Input></Input>
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
      color:"GREEN"
    },
    
  }));

export default Navbar;