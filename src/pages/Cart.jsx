import { styled } from "styled-components";
import Navbar from "../Component/Navbar";
import Footer from '../Component/Footer';
import applemac13 from '../Images/applemac13.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>
                    Your Bag
                </Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>

                    <Toptexts>
                        <TopText>
                            Shopping Bag(2)
                        </TopText>
                        <TopText>
                            Shopping Whishlist(0)
                        </TopText>
                    </Toptexts>

                    <TopButton type="right">Checkout</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={applemac13} />
                                <Details>
                                    <Pname><b> Product :</b> Applemac 13 </Pname>
                                    <Pid><b>ID:</b>989838383</Pid>
                                    <ProductColor color="grey"/>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductPriceContainer>
                                <RemoveIcon />
                                   <ProductAmount>2</ProductAmount>
                                   <AddIcon />
                                </ProductPriceContainer>
                                <ProductPrice>
                                        $30
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={applemac13} />
                                <Details>
                                    <Pname><b> Product :</b> Applemac 13 </Pname>
                                    <Pid><b>ID:</b>989838383</Pid>
                                    <ProductColor color="grey"/>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductPriceContainer>
                                <RemoveIcon />
                                   <ProductAmount>2</ProductAmount>
                                   <AddIcon />
                                </ProductPriceContainer>
                                <ProductPrice>
                                        $30
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText tpe="total"> Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <BtnContainer>
                        <Button>Buy Now</Button>
                        </BtnContainer>
                    </Summary>
                    
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
color:#0d0d0d; 
background-color: white;
`;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`
padding:10px;
border-radius:10px;
font-size: 15px;
font-weight: bold;
cursor: pointer;  
color:${(props) => props.type === "right" ? "black" : "white"};
background-color:${(props) => props.type === "right" ? "red" : "green"};
border:${(props) => props.type === "right" && "2px solid white"};
`;
const Toptexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex:3;
`;
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgrey;
/* height: 307px; */
box-sizing: border-box;
padding:30px;
position: relative;
`;
const Product = styled.div`
display: flex ;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex:2;
display: flex;

`;
const Details = styled.div`
display:flex;
margin-left:20px;
flex-direction: column;
padding:20px;
font-weight: 400;
font-size: 23px;
font-family: Georgia, 'Times New Roman', Times, serif;
justify-content:space-around;
`;
const Pname = styled.span`

`;
const Pid = styled.span`

`;
const PriceDetail = styled.div`
flex:1;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: 25px;
`;
const Image = styled.img`
width:300px;
`;
const ProductColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50px;
background-color: ${(props)=>props.color};
`;

const ProductPriceContainer = styled.div`
display: flex;
align-items: center;
padding:20px;


`;
const ProductAmount = styled.div`
margin:10px;
`;

const ProductPrice  = styled.div`
font-weight:bold;
font-size: 30px;
`;

const Hr=styled.hr`
    border: 1px dotted #e5e1e1;
    background-color: #e5e1e1;
`;
const SummaryItem=styled.div`
 display: flex;
 justify-content: space-between;
`;
const SummaryItemText=styled.span`
 margin: 30px 0;
 font-size: 25px;
`;
const SummaryItemPrice=styled.span`
 font-size: 25px;
 margin: 30px 0;
`;
const SummaryTitle=styled.h1`
 font-weight:400;
 text-align: center;

`;
const Button=styled.button`
 background-color: green;
 color:white;
 font-size: 20px;
 padding: 10px 15px;
 border-radius: 3px;
 margin:0px auto;
`;
const BtnContainer=styled.div`
  text-align: center;
  position: absolute;
  bottom:0;

  width: 100%;
  
`;


export default Cart;