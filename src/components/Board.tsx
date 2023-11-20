import React from 'react'
import { useAppDispath, useAppSelector } from ".././store/hooks";
import Tile from './Tile';


interface Props { }

function Board(props: Props) {
   const { } = props
   const board = useAppSelector(({ candyCrash: { board } }) => board)
   const boardSize = useAppSelector(({ candyCrash: { boardSize } }) => boardSize)

   return (
      <div className='flex flex-wrap rounded-lg' style={
         {width:`${6.25*boardSize}rem`}
      } >{
         board.map((candy: string, index: number) => (

            <Tile candy={candy} key={index} candyId={index} />
         ))

      }
      </div>
   )
}

export default Board
