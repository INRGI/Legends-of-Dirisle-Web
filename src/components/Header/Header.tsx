import {
    HeaderContainer,
    Logo,
    Nav,
    StyledLink,
    MobileMenuButton,
    MobileNav,
    LogoGroup
  } from "./Header.styled";
  import { useState } from "react";
  import { FiMenu, FiX } from "react-icons/fi";
import ServerStatus from "../ServerStatus";
  
  const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <HeaderContainer>
          <LogoGroup>
            <Logo>Legends of Dirisle</Logo>
          </LogoGroup>
  
          <Nav>
            <StyledLink to="/">ГОЛОВНА</StyledLink>
            <StyledLink to="/s">ПРО НАС</StyledLink>
            <StyledLink to="/s">ПРАВИЛА</StyledLink>
          </Nav>
  
          <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>
        </HeaderContainer>
  
        {menuOpen && (
          <MobileNav>
            <StyledLink to="/" onClick={() => setMenuOpen(false)}>ГОЛОВНА</StyledLink>
            <StyledLink to="/s" onClick={() => setMenuOpen(false)}>ПРО НАС</StyledLink>
            <StyledLink to="/s" onClick={() => setMenuOpen(false)}>ПРАВИЛА</StyledLink>
            <ServerStatus />
          </MobileNav>
        )}
      </>
    );
  };
  
  export default Header;
  