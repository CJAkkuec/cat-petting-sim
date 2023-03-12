import styled, { keyframes, css } from "styled-components";

const colors = [
  "var(--dark)",
  "var(--primary)",
  "var(--secondary)",
  "var(--tertiary)",
];
const duration = 4;

const colorCycle = keyframes`
  0% { background-color: ${colors[0]}; }
  25% { background-color: ${colors[1]}; }
  50% { background-color: ${colors[2]}; }
  75% { background-color: ${colors[3]}; }
  100% { background-color: ${colors[0]}; }
`;

const Grid = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 2rem;

  background-color: ${({ hyper }) =>
    hyper ? css`var(--primary)` : "var(--dark)"};
  ${({ hyper }) =>
    hyper
      ? css`
          animation: ${colorCycle} ${duration}s infinite;
        `
      : ""};
`;

function Layout({ children, hyper }) {
  return <Grid hyper={hyper}>{children}</Grid>;
}

export default Layout;
