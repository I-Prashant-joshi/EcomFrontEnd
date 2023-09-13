import React from "react"
// import { ReactDOM } from "react"
import Navbar from '../Component/Navbar'
import Footer from "../Component/Footer";
import { styled } from "styled-components";
import MixProduct from '../Component/MixProduct';
function ProductList(){
    return(
        <Container>
       <Navbar />
                 

       <MixProduct />
       <Footer />

       </Container>
    )
}

const Container=styled.div`

`;




export default ProductList;