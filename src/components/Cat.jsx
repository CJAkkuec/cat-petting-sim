import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";

const CatImg = styled(motion.img)`
  cursor: url("/assets/pet_sm.png"), auto;
`;

function Cat({ onPet, hyper }) {
  const imgSrc = hyper
    ? "/assets/brown_cat_happy.png"
    : "/assets/brown_cat.png";

  return (
    <>
      <CatImg
        src={imgSrc}
        onClick={onPet}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: hyper ? [-10, 0, 10, 0, -10] : 0,
          transition: hyper
            ? { ease: easeInOut, duration: 1, repeat: Infinity }
            : {},
        }}
      />
    </>
  );
}

export default Cat;
