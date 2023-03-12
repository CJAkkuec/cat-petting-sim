import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuItem = styled.li`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: "vt323";
  color: ${({ boost, granny, hyper }) =>
    boost || granny || hyper ? "var(--light)" : "var(--secondary)"};
  opacity: ${({ boost_unlocked, granny_unlocked, hyper_unlocked }) =>
    boost_unlocked || granny_unlocked || hyper_unlocked ? "1" : "0.2"};
  margin: 0;
  padding: 0;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }

  & button {
    cursor: url("/assets/point_sm.png"), auto;
    appearance: none;
    border: none;
    background: none;
    font-size: 3rem;
  }
`;

function Shop({
  handleBoost,
  handleGranny,
  handleHyper,
  boost,
  granny,
  hyper,
  granny_unlocked,
  boost_unlocked,
  hyper_unlocked,
}) {
  return (
    <StyledMenu>
      <StyledMenuItem boost={boost} boost_unlocked={boost_unlocked}>
        <button onClick={handleBoost} disabled={!boost_unlocked || boost}>
          <img src="/assets/coffee_m.png" alt="A coffee mug" />
        </button>
        <p>{boost_unlocked ? "+ 10" : "Locked"}</p>
      </StyledMenuItem>

      <StyledMenuItem granny={granny} granny_unlocked={granny_unlocked}>
        <button onClick={handleGranny} disabled={!granny_unlocked || granny}>
          <img src="/assets/granny_m.png" alt="A nice granny" />
        </button>
        <p>{granny_unlocked ? "+ 100" : "Locked"}</p>
      </StyledMenuItem>

      <StyledMenuItem hyper={hyper} hyper_unlocked={hyper_unlocked}>
        <button onClick={handleHyper} disabled={!hyper_unlocked || hyper}>
          <img src="/assets/star.png" alt="A bright star" />
        </button>
        <p>{hyper_unlocked ? "+ 1000" : "Locked"}</p>
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default Shop;
