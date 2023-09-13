import { css } from "styled-components";

export function Mobile(props){
return css`
@media screen and (max-width: 390px) {
    ${props}
}

`;
}
