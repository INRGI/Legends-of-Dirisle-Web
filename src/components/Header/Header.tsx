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
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()

  return (
    <>
      <HeaderContainer>
        <LogoGroup>
          <Logo>Legends of Deerisle</Logo>
        </LogoGroup>

        <Nav>
          <StyledLink href="/" className={pathname === "/" ? "active" : ""}>
            <IoHome /> <p>ГОЛОВНА</p>
          </StyledLink>
          <StyledLink href="/shop" className={pathname === "/shop" ? "active" : ""}>
            <MdOutlineShoppingCart />
            <p>МАГАЗИН</p>
          </StyledLink>
          <StyledLink href="/about" className={pathname === "/about" ? "active" : ""}>
            <MdInfoOutline />
            <p>ПРО НАС</p>
          </StyledLink>
          <StyledLink href="/rules" className={pathname === "/rules" ? "active" : ""}>
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
          <StyledLink href="/" onClick={() => setMenuOpen(false)} className={pathname === "/" ? "active" : ""}>
            <IoHome /> <p>ГОЛОВНА</p>
          </StyledLink>
          <StyledLink href="/shop" onClick={() => setMenuOpen(false)} className={pathname === "/shop" ? "active" : ""}>
            <MdOutlineShoppingCart />
            <p>МАГАЗИН</p>
          </StyledLink>
          <StyledLink href="/about" onClick={() => setMenuOpen(false)} className={pathname === "/about" ? "active" : ""}>
            <MdInfoOutline />
            <p>ПРО НАС</p>
          </StyledLink>
          <StyledLink href="/rules" onClick={() => setMenuOpen(false)} className={pathname === "/rules" ? "active" : ""}>
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
