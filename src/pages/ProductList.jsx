import React from "react"
// import { ReactDOM } from "react"

import Footer from "../Component/Footer";
import { styled } from "styled-components";
import MixProduct from '../Component/MixProduct';
// import {Mobile} from '../Component/Responsive';

function ProductList(){
    return(
        <Container>
      
       <MixProduct />
       <Footer />

       </Container>
    )
}

const Container=styled.div`


`;




export default ProductList;