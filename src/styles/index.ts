import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #022;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Clock = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid salmon;
  border-radius: 50%;
  position: relative;
`;
export const HourHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 175px;
    background-color: aliceblue;
  }
`;
export const MinuteHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 175px;
    background-color: cyan;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const SecondHand = styled.div<{ rotation: number }>`
  position: absolute;
  height: 5px;
  width: 5px;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 125px;
    background-color: slategray;
    left: 50%;
    transform: translateX(-50%);
  }
`;
