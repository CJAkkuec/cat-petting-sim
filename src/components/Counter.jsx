import styled from "styled-components";

const StatBox = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
`;

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HappinessCounter = styled.img``;

const CreditsCounter = styled.img``;

const StyledNumber = styled.span`
  display: block;
  font-size: 4rem;
  font-family: "vt323";
  color: var(--light);
`;

function Counter({ count, credits }) {
  return (
    <StatBox>
      <CounterBox>
        <HappinessCounter src="/assets/heart.png" />
        <StyledNumber>{count}</StyledNumber>
      </CounterBox>

      {credits > 0 && (
        <>
          <CounterBox>
            <CreditsCounter src="/assets/coin.png" />
            <StyledNumber>{credits}</StyledNumber>
          </CounterBox>
        </>
      )}
    </StatBox>
  );
}

export default Counter;
