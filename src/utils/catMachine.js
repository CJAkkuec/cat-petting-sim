import { createMachine, assign } from "xstate";

const catMachine = createMachine({
  predictableActionArguments: true,
  id: "cat",
  initial: "active",
  context: {
    count: 0,
    boost: false,
    granny: false,
    hyper: false,
    boost_unlocked: false,
    granny_unlocked: false,
    hyper_unlocked: false,
  },
  states: {
    active: {
      on: {
        PET: {
          actions: assign({
            count: (context) => {
              if (context.boost) {
                return context.count + 10;
              }
              return context.count + 1;
            },
          }),
        },

        BOOST: {
          actions: assign({
            boost: (context) => !context.boost,
          }),
        },

        GRANNY: {
          actions: assign({
            granny: (context) => !context.granny,
          }),
        },

        HYPER: {
          actions: assign({
            hyper: (context) => !context.hyper,
          }),
        },

        GRANNY_MODE: {
          actions: assign({ count: (context) => context.count + 100 }),
        },

        HYPER_MODE: {
          actions: assign({ count: (context) => context.count + 1000 }),
        },

        UNLOCK_BOOST: {
          actions: assign({
            boost_unlocked: (context) => !context.boost_unlocked,
          }),
        },

        UNLOCK_GRANNY: {
          actions: assign({
            granny_unlocked: (context) => !context.granny_unlocked,
          }),
        },

        UNLOCK_HYPER: {
          actions: assign({
            hyper_unlocked: (context) => !context.hyper_unlocked,
          }),
        },
      },
    },
  },
});

export default catMachine;
