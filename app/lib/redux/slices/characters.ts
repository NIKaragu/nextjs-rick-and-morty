import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types/character";
import { getCharacters } from "../../api/api";

interface CharState {
  characters: Character[];
  isCharsLoading: boolean;
  errorOnCharsLoading: string;
}

const initialState: CharState = {
  characters: [],
  isCharsLoading: false,
  errorOnCharsLoading: "",
};

export const loadCharacters = createAsyncThunk(
  "characters/loadCharacters",
  async () => (await getCharacters("")).results
);

export const charSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.isCharsLoading = true;
        state.errorOnCharsLoading = "";
      })
      .addCase(
        loadCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.characters = action.payload;
          state.isCharsLoading = false;
        }
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(loadCharacters.rejected, (state, _) => {
        state.isCharsLoading = false;
        state.errorOnCharsLoading = "Error loading characters";
      });
  },
});

export const { setCharacters } = charSlice.actions;
