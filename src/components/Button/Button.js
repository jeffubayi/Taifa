import React from "react";
import {StyledButton} from "./styles.js";

export default function ({onClick,children}){
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}