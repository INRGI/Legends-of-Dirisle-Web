import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 48px);
  height: 64px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 10000;
  border-bottom: 1px solid rgba(255, 0, 0, 0.15);
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ff4444;
  text-shadow: 0 0 6px rgba(255, 0, 0, 0.4);
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: #141414;
  color: #ccc;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &.active {
    background-color: #ff2e2e33;
    color: #fff;
  }

  &:hover {
    background-color: #ff2e2e22;
    color: #fff;
  }

  p{
    padding: 0;
    margin: 0;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  display: none;
  cursor: pointer;
  z-index: 10001;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const MobileNavOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(2px);
  transform: translateX(100%);
  transition: transform 0.4s ease;
  z-index: 9999;

  &.open {
    transform: translateX(0%);
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 24px;
  gap: 24px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.6);

  a {
    font-size: 1rem;
    width: 100%;
  }
`;

export const DiscordButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #141414;
  color: #ff4444;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 0 6px rgba(255, 0, 0, 0.1);

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
    color: #ff4444;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
    border-color: #ff2e2e;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);

    svg {
      color: #ffffff;
    }
  }

  &.desktop {
    max-width: none;
    width: auto;
    padding: 8px 14px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile {
    width: 100%;
    justify-content: flex-start;
    background-color: #1a1a1a;
    color: #ff4444;

    &:hover {
      background-color: #2a2a2a;
      color: #fff;
    }

    span {
      font-size: 0.95rem;
    }
  }
`;
