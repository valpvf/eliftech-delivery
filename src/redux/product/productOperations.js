import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductApi } from "../../services/api";

export const getProduct = createAsyncThunk(
  "product/get",
  async (page, { rejectWithValue }) => {
    try {
      const data = await getProductApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
