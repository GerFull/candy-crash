import { useEffect } from "react";
import { useAppDispath, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";


function App() {

  const dispath = useAppDispath()


  // const board = useAppSelector(state => state.candyCrash.board)
  const board = useAppSelector(({ candyCrash: { board } }) => board)
  const boardSize = useAppSelector(({ candyCrash: { boardSize } }) => boardSize)

  useEffect(() => {

    dispath(updateBoard(createBoard(boardSize)))

  }, [dispath, boardSize])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newBoard = [...board]
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize))
      checkForRowOfFour(newBoard,boardSize,generateInvalidMoves(boardSize,true))
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize))
      checkForRowOfThree(newBoard,boardSize,generateInvalidMoves(boardSize,true))
      dispath(updateBoard(newBoard))
    }, 150);
    return ()=> clearInterval(timer)

  }, [board,boardSize,dispath])


  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
