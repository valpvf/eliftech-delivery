import { createSlice } from "@reduxjs/toolkit";
// import { changeUser, getUser } from "./userOperations";

const initialState = {
  user: [
    {
      id: 1,
      product: "Oil - Grapeseed Oil",
      price: 3.89,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 2,
      product: "Onions Granulated",
      price: 12.45,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 3,
      product: "Liners - Baking Cups",
      price: 8.17,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 4,
      product: "Sauce - Soya, Dark",
      price: 12.78,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 5,
      product: "Pork - Loin, Bone - In",
      price: 7.56,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 6,
      product: "Cognac - Courvaisier",
      price: 8.24,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 7,
      product: "Maple Syrup",
      price: 14.48,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 8,
      product: "Pop Shoppe Cream Soda",
      price: 4.44,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 9,
      product: "Pie Pecan",
      price: 4.33,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 10,
      product: "Chilli Paste, Hot Sambal Oelek",
      price: 10.8,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 11,
      product: "Pepper - Roasted Red",
      price: 1.71,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 12,
      product: "Magnotta - Bel Paese White",
      price: 9.98,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 13,
      product: "Grapes - Black",
      price: 4.12,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 14,
      product: "Capon - Whole",
      price: 14.86,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 15,
      product: "Bread - Crusty Italian Poly",
      price: 10.19,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 16,
      product: "Nestea - Iced Tea",
      price: 7.84,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 17,
      product: "Eggs - Extra Large",
      price: 4.58,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 18,
      product: "Marzipan 50/50",
      price: 3.06,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 19,
      product: "Pork - Smoked Kassler",
      price: 9.33,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 20,
      product: "Nut - Cashews, Whole, Raw",
      price: 9.65,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 21,
      product: "Shrimp - Tiger 21/25",
      price: 1.64,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 22,
      product: "Lettuce - Romaine",
      price: 10.62,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 23,
      product: "Longos - Chicken Cordon Bleu",
      price: 11.94,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 24,
      product: "Alize Gold Passion",
      price: 13.13,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 25,
      product: "Cheese - Brick With Onion",
      price: 7.3,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 26,
      product: "Oil - Shortening,liqud, Fry",
      price: 9.21,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 27,
      product: "Cherries - Fresh",
      price: 7.89,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 28,
      product: "Red Currants",
      price: 4.3,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 29,
      product: "Creme De Cacao White",
      price: 6.03,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 30,
      product: "Gloves - Goldtouch Disposable",
      price: 9.97,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 31,
      product: "Sugar - Icing",
      price: 1.24,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 32,
      product: "Wine - Champagne Brut Veuve",
      price: 5.49,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 33,
      product: "Wine - Vineland Estate Semi - Dry",
      price: 9.92,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 34,
      product: "Scallops - In Shell",
      price: 10.37,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 35,
      product: "Beer - Muskoka Cream Ale",
      price: 10.51,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 36,
      product: "Wine - Pinot Grigio Collavini",
      price: 11.5,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 37,
      product: "Lobster - Canned Premium",
      price: 4.35,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 38,
      product: "Fish - Scallops, Cold Smoked",
      price: 9.88,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 39,
      product: "Pickles - Gherkins",
      price: 2.02,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 40,
      product: "Blouse / Shirt / Sweater",
      price: 12.66,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 41,
      product: "Wine - Pinot Noir Mondavi Coastal",
      price: 9.69,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 42,
      product: "Coffee Decaf Colombian",
      price: 1.95,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 43,
      product: "Sugar - Sweet N Low, Individual",
      price: 1.34,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 44,
      product: "Stainless Steel Cleaner Vision",
      price: 12.26,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
    {
      id: 45,
      product: "Pasta - Penne, Lisce, Dry",
      price: 14.17,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 46,
      product: "Paper Towel Touchless",
      price: 13.97,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Bell Taco",
    },
    {
      id: 47,
      product: "Cookie Dough - Oatmeal Rasin",
      price: 5.25,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "CFK",
    },
    {
      id: 48,
      product: "Tuna - Canned, Flaked, Light",
      price: 12.84,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "WaySub",
    },
    {
      id: 49,
      product: "Gin - Gilbeys London, Dry",
      price: 11.77,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "Denwy",
    },
    {
      id: 50,
      product: "Tea - Honey Green Tea",
      price: 2.65,
      picture: "https://loremflickr.com/320/240/food?lock",
      shop: "MC Donny",
    },
  ],
  shop: null,
};

const productSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changeShop: (state, { payload }) => {
      state.shop = payload;
    },
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

export const { changeShop } = productSlice.actions;
export default productSlice.reducer;
