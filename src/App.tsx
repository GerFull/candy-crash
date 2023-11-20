import { useEffect } from "react";
import { useAppDispath, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";


function App() {

  const dispath = useAppDispath()


  // const board = useAppSelector(state => state.candyCrash.board)
  const board = useAppSelector(({ candyCrash: { board } }) => board)
  const boardSize = useAppSelector(({ candyCrash: { boardSize } }) => boardSize)

  useEffect(() => {

    dispath(updateBoard(createBoard(boardSize)))

  }, [dispath, boardSize])

  return (
    <div className="flex items-center justify-center h-screen">
      <Board/>
    </div>
  );
}

export default App;
