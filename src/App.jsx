import { useEffect, useState } from "react";

import Intro from "./Intro";

import Cat from "./components/Cat";
import Counter from "./components/Counter";
import Shop from "./components/Shop";

import Layout from "./components/Layout";

import { useMachine } from "@xstate/react";
import catMachine from "./utils/catMachine";

function App() {
  const [introMode, setIntroMode] = useState(true);
  const [state, send] = useMachine(catMachine);

  const {
    count,
    boost,
    granny,
    hyper,
    boost_unlocked,
    granny_unlocked,
    hyper_unlocked,
  } = state.context;

  const credits = Math.floor(count / 10);

  useEffect(() => {
    if (credits < 5) return;

    if (credits >= 5 && !boost_unlocked) {
      send("UNLOCK_BOOST");
    }
    if (credits >= 50 && !granny_unlocked) {
      send("UNLOCK_GRANNY");
    }

    if (credits >= 250 && !hyper_unlocked) {
      send("UNLOCK_HYPER");
    }
  }, [credits]);

  useEffect(() => {
    if (!granny) return;

    const interval = setInterval(() => {
      send("GRANNY_MODE");
    }, 1000);
    return () => clearInterval(interval);
  }, [granny]);

  useEffect(() => {
    if (!hyper) return;

    const interval = setInterval(() => {
      send("HYPER_MODE");
    }, 1000);
    return () => clearInterval(interval);
  }, [hyper]);

  function handleStart() {
    setIntroMode(false);
  }

  function handlePet() {
    send("PET");
  }

  function handleBoost() {
    send("BOOST");
    setTimeout(() => {
      send("BOOST");
    }, 6000);
  }

  function handleGranny() {
    send("GRANNY");
    setTimeout(() => {
      send("GRANNY");
    }, 11000);
  }

  function handleHyper() {
    send("HYPER");
    setTimeout(() => {
      send("HYPER");
    }, 6000);
  }

  return (
    <Layout hyper={hyper}>
      {introMode && <Intro handleStart={handleStart} />}
      {!introMode && (
        <>
          <Shop
            handleBoost={handleBoost}
            handleGranny={handleGranny}
            handleHyper={handleHyper}
            boost={boost}
            granny={granny}
            hyper={hyper}
            boost_unlocked={boost_unlocked}
            granny_unlocked={granny_unlocked}
            hyper_unlocked={hyper_unlocked}
          />
          <Cat onPet={handlePet} boost={boost} hyper={hyper} />
          {count > 0 && <Counter count={count} credits={credits} />}
        </>
      )}
    </Layout>
  );
}

export default App;
