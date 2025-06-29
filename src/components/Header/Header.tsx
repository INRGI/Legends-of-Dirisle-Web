import { FaDiscord } from "react-icons/fa";
import {
  HeaderContainer,
  Logo,
  Nav,
  StyledLink,
  MobileMenuButton,
  MobileNav,
  LogoGroup,
  MobileNavOverlay,
  DiscordButton,
} from "./Header.styled";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { IoHome } from "react-icons/io5";
import {
  MdInfoOutline,
  MdOutlineBlock,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <LogoGroup>
          <Logo>Legends of Deerisle</Logo>
        </LogoGroup>

        <Nav>
          <StyledLink to="/">
            <IoHome /> <p>ГОЛОВНА</p>
          </StyledLink>
          <StyledLink to="/shop">
            <MdOutlineShoppingCart />
            <p>МАГАЗИН</p>
          </StyledLink>
          <StyledLink to="/about">
            <MdInfoOutline />
            <p>ПРО НАС</p>
          </StyledLink>
          <StyledLink to="/rules">
            <MdOutlineBlock />
            <p>ПРАВИЛА</p>
          </StyledLink>
          <DiscordButton
            href="https://discord.gg/cNvta6cXNb"
            target="_blank"
            rel="noopener noreferrer"
            className="desktop"
          >
            <FaDiscord />
          </DiscordButton>
        </Nav>

        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </HeaderContainer>

      <MobileNavOverlay className={menuOpen ? "open" : ""}>
        <MobileNav>
          <StyledLink to="/" onClick={() => setMenuOpen(false)}>
            <IoHome /> <p>ГОЛОВНА</p>
          </StyledLink>
          <StyledLink to="/shop" onClick={() => setMenuOpen(false)}>
            <MdOutlineShoppingCart />
            <p>МАГАЗИН</p>
          </StyledLink>
          <StyledLink to="/about" onClick={() => setMenuOpen(false)}>
            <MdInfoOutline />
            <p>ПРО НАС</p>
          </StyledLink>
          <StyledLink to="/rules" onClick={() => setMenuOpen(false)}>
            <MdOutlineBlock />
            <p>ПРАВИЛА</p>
          </StyledLink>

          <DiscordButton
            href="https://discord.gg/cNvta6cXNb"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile"
          >
            <FaDiscord />
            <span>Наш Discord</span>
          </DiscordButton>
        </MobileNav>
      </MobileNavOverlay>
    </>
  );
};

export default Header;
