import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

const initialState: {
   board: string[]
   boardSize: number
} = {
   board: [],
   boardSize: 4
}

const candySlice = createSlice({
   name: 'candycrash',
   initialState,
   reducers: {
      updateBoard: (state, action: PayloadAction<string[]>)=>{
         state.board=action.payload
      }
   }
})

export const store = configureStore({
   reducer: {
      candyCrash: candySlice.reducer
   }
})


export const {updateBoard}=candySlice.actions;

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch