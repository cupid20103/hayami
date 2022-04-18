import styled from "styled-components";

export const LinkButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 2.875rem;
  padding: 0 1.25rem;
  margin: 1.5625rem auto;
  border-radius: 0.125rem;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  color: #fff;
  background: ${(props) => (props.flag ? "#000" : "hsla(0, 0%, 100%, 0.2)")};
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);
  cursor: pointer;
  :hover {
    color: #000;
    border: ${(props) => (props.flag ? "1px solid #000" : "none")};
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
`;
