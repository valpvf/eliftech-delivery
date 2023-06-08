import { createSlice } from "@reduxjs/toolkit";
// import { changeUser, getUser } from "./userOperations";

const initialState = {
  user: [
    {
      id: 1,
      product: "Nacho Chips",
      price: "$7.99",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "Pizza",
    },
    {
      id: 2,
      product: "Glycerine",
      price: "$7.26",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "FCK",
    },
    {
      id: 3,
      product: "Venison - Ground",
      price: "$5.64",
      picture: "http://dummyimage.com/100x100.png/cc0000/ffffff",
      shop: "FCK",
    },
    {
      id: 4,
      product: "Glycerine",
      price: "$5.26",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "Pizza",
    },
    {
      id: 5,
      product: "Wine - Jackson Triggs Okonagan",
      price: "$6.58",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "FCK",
    },
    {
      id: 6,
      product: "Nut - Peanut, Roasted",
      price: "$1.09",
      picture: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      shop: "FCK",
    },
    {
      id: 7,
      product: "Straws - Cocktale",
      price: "$1.35",
      picture: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      shop: "Pizza",
    },
    {
      id: 8,
      product: "Lemonade - Mandarin, 591 Ml",
      price: "$3.82",
      picture: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      shop: "Pizza",
    },
    {
      id: 9,
      product: "Cup - 6oz, Foam",
      price: "$2.78",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "FCK",
    },
    {
      id: 10,
      product: "Grouper - Fresh",
      price: "$6.81",
      picture: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      shop: "FCK",
    },
    {
      id: 11,
      product: "Beef - Shank",
      price: "$8.85",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "FCK",
    },
    {
      id: 12,
      product: "Sprouts - Peppercress",
      price: "$8.02",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "FCK",
    },
    {
      id: 13,
      product: "Butter - Salted",
      price: "$0.94",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "Pizza",
    },
    {
      id: 14,
      product: "Beef - Bresaola",
      price: "$1.44",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "Pizza",
    },
    {
      id: 15,
      product: "Blueberries",
      price: "$5.37",
      picture: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      shop: "Pizza",
    },
    {
      id: 16,
      product: "Beef - Ox Tail, Frozen",
      price: "$6.19",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "MCDony",
    },
    {
      id: 17,
      product: "Syrup - Pancake",
      price: "$1.29",
      picture: "http://dummyimage.com/100x100.png/cc0000/ffffff",
      shop: "MCDony",
    },
    {
      id: 18,
      product: "Pickle - Dill",
      price: "$3.88",
      picture: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      shop: "Pizza",
    },
    {
      id: 19,
      product: "Sauce - Soy Low Sodium - 3.87l",
      price: "$1.37",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "FCK",
    },
    {
      id: 20,
      product: "Pasta - Angel Hair",
      price: "$5.30",
      picture: "http://dummyimage.com/100x100.png/dddddd/000000",
      shop: "Pizza",
    },
  ],
};

const productSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    // changePart: (state, { payload }) => {
    //   state.part += payload;
    // },
  },
//   extraReducers: (builder) => {
    // builder
      //   .addCase(getUser.pending, (state) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(getUser.fulfilled, (state, { payload, meta }) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     const pushUser = payload.map((el) => ({
      //       ...el,
      //       isChanged: false,
      //     }));
      //     meta.arg === 1
      //       ? (state.user = pushUser)
      //       : state.user.push(...pushUser);
      //   })
      //   .addCase(getUser.rejected, (state, { payload }) => {
      //     state.isLoading = false;
      //     state.error = payload;
      //   })
    //   .addCase(changeUser.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(changeUser.fulfilled, (state, { payload, meta }) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.part = meta.arg[3];
    //     const idx = state.user.findIndex(
    //       (el) => el.id === meta.arg[0]
    //     );
    //     state.user[idx] = { ...payload, isChanged: !meta.arg[2] };
    //   })
    //   .addCase(changeUser.rejected, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.error = payload;
    //   });
//   },
});

// export const { changePart } = productSlice.actions;
export default productSlice.reducer;
