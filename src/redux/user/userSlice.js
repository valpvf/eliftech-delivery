import { createSlice } from "@reduxjs/toolkit";
// import { changeUser } from "./userOperations";

const initialState = {
  user: [
    {
      id: 1,
      name: "Linnie",
      email: "lczajkowska0@bloglovin.com",
      phone: "7355041944",
      address: "3 Scoville Lane",
      oders: [],
    },
    {
      id: 2,
      name: "Nari",
      email: "nmullins1@theatlantic.com",
      phone: "5945651550",
      address: "38760 Ludington Street",
      oders: [],
    },
    {
      id: 3,
      name: "Stanfield",
      email: "swrack2@imdb.com",
      phone: "7011716458",
      address: "77 Springview Terrace",
      oders: [],
    },
    {
      id: 4,
      name: "Benny",
      email: "bdoley3@kickstarter.com",
      phone: "7531113122",
      address: "95237 Manley Avenue",
      oders: [],
    },
    {
      id: 5,
      name: "Byrann",
      email: "bgiroldi4@foxnews.com",
      phone: "2933510866",
      address: "8135 Barby Avenue",
      oders: [],
    },
  ],
  error: null,
  cart: null
  };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
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
//       .addCase(changeUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(changeUser.fulfilled, (state, { payload, meta }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.part = meta.arg[3];
//         const idx = state.user.findIndex(
//           (el) => el.id === meta.arg[0]
//         );
//         state.user[idx] = { ...payload, isChanged: !meta.arg[2] };
//       })
//       .addCase(changeUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },
});

export const { addCart } = userSlice.actions;
export default userSlice.reducer;
