
import { AllData } from "./ProductData";
import { styled } from "styled-components";
import Product from "./MixProductfetch";
import ClearIcon from '@mui/icons-material/Clear';
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
                  
                <ClearIcon style={{color:"white",fontSize:"50px",marginRight:"50px"}}></ClearIcon>
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
/* padding: 20px; */
/* text-align: center; */

`;
const Titlecontainer=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
`;
const Option=styled.option`
padding: 5px 15px;
text-align: left;

`;

export default MixProduct;