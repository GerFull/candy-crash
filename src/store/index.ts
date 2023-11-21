import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"
import { moveBelowReducer } from "./reducer/moveBelow"
import { dragEndReducer } from "./reducer/dragEnd"

const initialState: {
   board: string[]
   boardSize: number
   squareBeingReplaced: Element | undefined
   squareBeingDragged: Element | undefined
} = {
   board: [],
   boardSize: 8,
   squareBeingDragged: undefined,
   squareBeingReplaced: undefined
}

const candySlice = createSlice({
   name: 'candycrash',
   initialState,
   reducers: {
      updateBoard: (state, action: PayloadAction<string[]>) => {
         state.board = action.payload
      },
      dragStart: (state, action: PayloadAction<any>) => {
         state.squareBeingDragged = action.payload
      },
      dragDrop: (state, action: PayloadAction<any>) => {
         state.squareBeingReplaced = action.payload
      },
      dragEnd: dragEndReducer,
      moveBelow: moveBelowReducer,

   }
})



export const store = configureStore({
   reducer: {
      candyCrash: candySlice.reducer
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
         serializableCheck: false
      })
   }
})


export const { updateBoard, moveBelow ,dragStart,dragDrop,dragEnd} = candySlice.actions;

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch