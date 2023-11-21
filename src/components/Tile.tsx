import React from 'react'
import { useAppDispath } from '../store/hooks'
import { dragStart ,dragDrop,dragEnd} from '../store'

interface Props {
   candy: string
   candyId: number
}

function Tile(props: Props) {
   const { candy, candyId } = props

   const dispath = useAppDispath()

   return (
      <div className='h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none' style={{
         boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb"
      }}>{
            candy && <img 
               draggable={true}
               onDragStart={(e)=>dispath(dragStart(e.target))}
               onDragOver={(e)=>e.preventDefault()}
               onDragEnter={(e)=>e.preventDefault()}
               onDragLeave={(e)=>e.preventDefault()}
               onDrop={(e)=>dispath(dragDrop(e.target))}
               onDragEnd={(e)=>dispath(dragEnd())}
            
            
            
            src={candy} alt='candy' className='h-20 w-20' candy-id={candyId} />
         }</div>
   )
}

export default Tile
