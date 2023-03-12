import styled from "styled-components";

import { motion } from "framer-motion";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "vt323";
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paw = styled.img`
  width: 50%;
`;

const TitleFragment = styled.span`
  display: block;

  color: ${(props) =>
    props.cat
      ? "var(--secondary)"
      : props.pet
      ? "var(--tertiary)"
      : props.sim
      ? "var(--tertiary)"
      : ""};
  font-size: ${({ cat }) => (cat ? "20rem" : "6rem")};
  text-shadow: var(--text-shadow-l);
  letter-spacing: 0.3rem;
  line-height: ${({ cat }) => (cat ? "20rem" : "6rem")};
`;

const StartButton = styled.button`
  cursor: url("/assets/point_sm.png"), auto;
  font-family: "vt323";
  appearance: none;
  border: 4px solid #2b363b;
  background: var(--light);
  color: var(--dark);
  font-size: 2rem;
  line-height: 1.4rem;
  width: 7rem;
  height: 4rem;
  padding-block-end: 0.5rem;
`;

function Intro({ handleStart }) {
  return (
    <>
      <Header>
        <Title>
          <motion.div
            style={{ perspective: 600 }}
            initial={{ scale: 10, opacity: 0, x: 200, y: 160, rotate: 20 }}
            animate={{ scale: 1, opacity: 1, x: 200, y: 160 }}
            transition={{
              duration: 0.2,
              type: "spring",
              delay: 2,
            }}
          >
            <TitleFragment>
              <Paw src="/assets/paw.png" />
            </TitleFragment>
          </motion.div>
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <motion.div
              style={{ originY: "bottom", originX: "left" }}
              animate={{ rotate: [-30, 0, -5, 0, -2, 0] }}
              transition={{
                type: "Inertia",
                delay: 0.2,
                duration: 0.7,
              }}
            >
              <TitleFragment cat>CAT</TitleFragment>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            <TitleFragment pet>PETTING</TitleFragment>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
          >
            <TitleFragment sim>SIMULATOR</TitleFragment>
          </motion.div>
        </Title>
      </Header>
      <StartButton onClick={handleStart}>Start</StartButton>
      <p>
        Version 0.1 - Best played in a desktop browser. Is poorly optimized.
      </p>
    </>
  );
}
export default Intro;
