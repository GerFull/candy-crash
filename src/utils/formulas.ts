export const formulaForColumnOfFour = (boardsize: number) =>
   boardsize * boardsize - (boardsize + boardsize + boardsize) - 1


export const formulaForColumnOfThree = (boardsize: number) =>
   boardsize * boardsize - (boardsize + boardsize) - 1


export const formulaforMoveBelow = (boardsize: number) =>
   boardsize * boardsize - boardsize - 1


export const generateInvalidMoves = (boadSize: number, isFour: boolean = false) => {

   const invalidMoves: number[] = []

   for (let i: number = boadSize; i <= boadSize * boadSize; i += boadSize) {
      if (isFour) invalidMoves.push(i - 3)
      invalidMoves.push(i - 2)
      invalidMoves.push(i - 1)
   }

   return invalidMoves
}