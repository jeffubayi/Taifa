import React from "react";
import {FaRegMoon,FaMoon} from "react-icons";
import {AppHeader, Wrapper,ThemeSwitchBtn,Title} from "./styles";
import Link from "react-router-dom"


function ThemeSwitcher({lightTheme,toggleTheme}) {
    return (
      <ThemeSwitchBtn onClick={toggleTheme} tabIndex="0">
          {lightTheme ? 
          (<FaRegMoon className= "icon"/>)
          :
          (<FaMoon className= "icon"/>) }
          {lightTheme ? 
          "Dark Mode" 
           : 
           "Light Mode"}
      </ThemeSwitchBtn>
    );
}

function Header({lightTheme,toggleTheme}){
    <AppHeader>
        <Wrapper>
            <Link to ="/">
                <Title >Taifa</Title>
            </Link>
            <ThemeSwitcher lightTheme={lightTheme} toggleTheme={toggleTheme}/>
        </Wrapper>
    </AppHeader>
}