import styled from "styled-components";

export const LinkButtonContainerExternal = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 2.5rem;
  margin: 50px 0;
  border-radius: 0.125rem;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  color: #fff;
  background: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);
  -webkit-clip-path: polygon(0% 20px, 100% -135px, 100% 20px, 0% 185px);
  clip-path: polygon(0% 20px, 100% -135px, 100% 20px, 0% 185px);
  cursor: pointer;
  :hover {
    color: #000;
    ::before {
      transform: none;
      transform-origin: bottom center;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleY(0);
    background: #fff;
    transform-origin: top center;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }
  span {
    position: relative;
    font: 400 0.75rem/1 GT America Mono Regular;
  }
  @media (max-width: 1024px) {
    width: 150px;
  }
`;

export const LinkButtonContainerInternal = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
  height: 2.5rem;
  margin: 50px 0;
  border-radius: 0.125rem;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  color: #fff;
  background: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);
  -webkit-clip-path: polygon(0% 20px, 100% -100px, 100% 20px, 0% 150px);
  clip-path: polygon(0% 20px, 100% -100px, 100% 20px, 0% 150px);
  cursor: pointer;
  :hover {
    color: #000;
    ::before {
      transform: none;
      transform-origin: bottom center;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleY(0);
    background: #fff;
    transform-origin: top center;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }
  span {
    position: relative;
    font: 400 0.75rem/1 GT America Mono Regular;
  }
  @media (max-width: 1024px) {
    width: 90px;
  }
`;
