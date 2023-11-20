export const isColumnOfFour = (newBoard: string[], boardSize: number, formulaForColumnOfFour: number) => {
   for (let i: number = 0; i < formulaForColumnOfFour; i++) {
      const columnOfFour: number[] = [
         i,
         i + boardSize,
         i + boardSize * 2,
         i + boardSize * 3
      ]

      const decidetColor: string = newBoard[i]

      const isBlank: boolean = newBoard[i] === ''


      if (columnOfFour.every((candy: number) => newBoard[candy] === decidetColor && !isBlank)) {

         columnOfFour.forEach((candy: number) => (newBoard[candy] = ''))
         return true
      }
   }
}

export const isColumnOfThree = (newBoard: string[], boardSize: number, formulaForColumnOfThree: number) => {
   for (let i: number = 0; i < formulaForColumnOfThree; i++) {
      const columnOfThree: number[] = [
         i,
         i + boardSize,
         i + boardSize * 2
      ]

      const decidetColor: string = newBoard[i]

      const isBlank: boolean = newBoard[i] === ''


      if (columnOfThree.every((candy: number) => newBoard[candy] === decidetColor && !isBlank)) {

         columnOfThree.forEach((candy: number) => (newBoard[candy] = ''))
         return true
      }
   }
}

export const checkForRowOfFour = (newBoard: string[], boadSize: number, invalidMoves: number[]) => {
   for (let i: number = 0; i < boadSize * boadSize; i++) {

      const rowofFour = [i, i + 1, i + 2, i + 3]

      const decidetColor: string = newBoard[i]

      const isBlank: boolean = newBoard[i] === ''

      if(invalidMoves.includes(i)) continue

      if (rowofFour.every((candy: number) => newBoard[candy] === decidetColor && !isBlank)) {

         rowofFour.forEach((candy: number) => (newBoard[candy] = ''))
         return true
      }
   }
}


export const checkForRowOfThree = (newBoard: string[], boadSize: number, invalidMoves: number[]) => {
   for (let i: number = 0; i < boadSize * boadSize; i++) {

      const rowofThree = [i, i + 1, i + 2, ]

      const decidetColor: string = newBoard[i]

      const isBlank: boolean = newBoard[i] === ''

      if(invalidMoves.includes(i)) continue

      if (rowofThree.every((candy: number) => newBoard[candy] === decidetColor && !isBlank)) {

         rowofThree.forEach((candy: number) => (newBoard[candy] = ''))
         return true
      }
   }
}