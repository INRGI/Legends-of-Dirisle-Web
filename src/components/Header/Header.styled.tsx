import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 48px);
  height: 64px;
  background: rgba(10, 10, 10, 0.9);
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
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding: 10px 18px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;

  &.active {
    background-color: rgba(255, 60, 60, 0.15);
    color: #ffffff;
  }

  &:hover {
    background-color: rgba(255, 60, 60, 0.1);
    color: #ffffff;
  }
`;


export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  background: rgba(20, 20, 20, 0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 0, 0, 0.1);
  z-index: 9999;
`;
