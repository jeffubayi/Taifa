import styled from "styled-components";

export const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  
  .cube1,
  .cube2 {
      background-color:#333;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      left:0;

      animation: sk-cubemove 1.8s infinite ease-in-out;
  }
  .cube2 {
      animation-delay: -0.9s;
  }
  @keyframes sk-cubemove {
      25% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
      }
      50% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
      }
      50.1% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
       }
       75% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
       }
       100% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
       }
    }
`;