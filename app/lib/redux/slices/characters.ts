import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types/character";
import { gql } from "@apollo/client";
import { client } from "../../providers/apollo-provider";

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
  async (page?: number) => {
    const apolloClient = client();
    const { data } = await apolloClient.query({
      query: gql`
        query {
          characters(page: ${page}) {
            results {
              id
              name
              image
              status
              gender
              species
              type
              location {
                name
              }
            }
          }
        }
      `,
    });
    return data.characters.results;
  }
);

export const charSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    addCharacters: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
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
          state.characters = [...state.characters, ...action.payload];
          state.isCharsLoading = false;
        }
      )
      .addCase(loadCharacters.rejected, (state) => {
        state.isCharsLoading = false;
        state.errorOnCharsLoading = "Error loading characters";
      });
  },
});

export const { setCharacters, addCharacters } = charSlice.actions;
