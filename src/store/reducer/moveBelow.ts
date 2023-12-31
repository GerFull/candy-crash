import { WritableDraft } from "immer/dist/types/types-external";
import { formulaforMoveBelow } from "../../utils/formulas";
import { candies } from "../../utils/candyData";

export const moveBelowReducer = (
   state: WritableDraft<{
      board: string[]
      boardSize: number
      //squareBeingReplaced: Element | undefined
      //squareBeingDragged: Element | undefined
   }>

) => {
   const newBoard: string[] = [...state.board]
   const { boardSize } = state

   let boardChanges: boolean = false

   const formulaforMove: number=formulaforMoveBelow(boardSize)

   for (let i:number=0; i<=formulaforMove; i++){
      const firstRow= Array(boardSize).fill(0).map((value:number,index:number)=>index)
      const isFirstRow=firstRow.includes(i)

      if (isFirstRow && newBoard[i] === "") {
         let randomNumber = Math.floor(Math.random() * candies.length);
         newBoard[i] = candies[randomNumber];
         boardChanges = true;
       }
   
       if (newBoard[i + boardSize] === "") {
         newBoard[i + boardSize] = newBoard[i];
         newBoard[i] = "";
         boardChanges = true;
       }
       if (boardChanges) state.board = newBoard;

   }
   
   
   
}