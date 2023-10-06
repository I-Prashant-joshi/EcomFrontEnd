
import { AllData } from "./ProductData";
import { styled } from "styled-components";
import Product from "./MixProductfetch";
import ClearIcon from '@mui/icons-material/Clear';
import { Mobile } from './Responsive';
import '../Component/web.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function MixProduct({ cat, filters }) {
    const [product,setProduct] = useState([]);
    const [filterproduct, setFilterProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product");

               setProduct(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [cat])
    useEffect(()=>{
        cat && setFilterProduct(
            product.filter((item)=>
            Object.entries(filters).every(([key,val])=>
            item[key].includes(val)
            )
            )
        )
    },[product,cat,filters])


    return (
        <Wrapper>


            <Container>
                {
                    AllData.map((item) => (
                        <Product value={item} />
                    )

                    )
                }
            </Container>
        </Wrapper>
    )

}

const Container = styled.div`
display: flex;
flex-wrap:wrap;


`;
const Wrapper = styled.div`
margin:2% 0;
display:flex;
/* justify-content: center; */
 flex-wrap: wrap;
 border-radius: 20px;
 
 


`;


export default MixProduct;