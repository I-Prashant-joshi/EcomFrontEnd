
import { AllData } from "./ProductData";
import { styled } from "styled-components";
import Product from "./MixProductfetch";
import ClearIcon from '@mui/icons-material/Clear';
import {Mobile} from './Responsive';
import '../Component/web.css'

function MixProduct(){

    return(
        <Wrapper>
            <Titlecontainer> 
                <Title>ALL Categories
                        <FilterProduct>
                            <Select>
                                <Option disabled selected>
                                        Color
                                </Option>
                                <Option>
                                        white
                                </Option>
                                <Option>
                                       black
                                </Option>
                                <Option>
                                        grey
                                </Option>
                                <Option>
                                       red
                                </Option>
                            </Select>
                            <Select>
                            <Option disabled selected>
                                      Price
                                </Option>
                                <Option>
                                      Below 10,000 
                                </Option>
                                <Option>
                                Below 30,000 
                                </Option>
                                <Option>
                                Below 60,000 
                                </Option>
                                <Option>
                                Below 1,00,000 
                                </Option>
                                <Option>
                                Below 1,50,000 
                                </Option>
                            </Select>
                        </FilterProduct>
                        </Title>
                        <SortProduct>

                        </SortProduct>
                  
                <ClearIcon className="clearicon" style={{color:"white",marginRight:"50px"}}></ClearIcon>
            </Titlecontainer>
            
        <Container>
                {
                    AllData.map((item)=>(
                         <Product value={item} />
                        )
                             
                    )
                }
        </Container>
        </Wrapper>
    )

}

const Container=styled.div`
display: flex;
flex-wrap:wrap;


`;
const Wrapper=styled.div`
margin:2% 0;
display:flex;
/* justify-content: center; */
 flex-wrap: wrap;
 border-radius: 20px;
 
 


`;
const Title=styled.h1`
color:white;
display: flex;
align-items: center;
margin-left: 50px;
${Mobile({fontSize:"15px"})};


`;
const Titlecontainer=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    ${Mobile({fontSize:"15px",backgroundColor:"red"})};

`;
const FilterProduct=styled.div`

`;
const SortProduct=styled.div`

`;
const Select=styled.select`
padding: 5px 15px;
text-align: center;
margin-left:15px;
border-radius: 10px;
font-size: 20px;
${Mobile({padding:"0px",fontSize:"13px",width:"auto"})};

`;
const Option=styled.option`
padding: 5px 15px;
text-align: left;
${Mobile({padding:"0px"})};

`;

export default MixProduct;