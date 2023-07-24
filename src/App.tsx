import { useCallback, useState } from "react";

import { Space } from "./components/space/Space";
import { Figure, FigureType } from "./interfaces";


function App() {

  const [figures, setFigura] = useState<Figure[][]>([
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
    [{ type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }, { type: 'TREE' }],
  ])

  const [start, setStart] = useState<{file: number; column: number} | undefined>()
  const [finish, setFinish] = useState<{file: number; column: number} | undefined>()

  const pointIsLimits = useCallback((file: number, column: number) => {
    return  (file === 0 || file === figures.length - 1) || (column === 0 || column === figures[0].length - 1)
  }, [figures])

  const changeFigure = useCallback(({ fileFigure, columnFigure, newFigure }: { fileFigure: number; columnFigure: number; newFigure: FigureType }) => {

    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === 'ROAD' )&&
      // arriba derecha
      (figures[fileFigure -1] && figures[fileFigure - 1][columnFigure + 1] && figures[fileFigure - 1][columnFigure + 1].type === 'ROAD') &&
      // arriba
      (figures[fileFigure -1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === 'ROAD')
    ) return

    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === 'ROAD') &&
      // abajo derecha
     ( figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure + 1] && figures[fileFigure + 1][columnFigure + 1].type === 'ROAD') &&
      // abajo 
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === 'ROAD')
    ) return 

    if (
      // arriba
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === 'ROAD') &&
      // arriba izquierda
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure - 1] && figures[fileFigure - 1][columnFigure - 1].type === 'ROAD') &&
      // izquierda
     ( figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === 'ROAD')
    ) return

    if (
      // izquierda
      (figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === 'ROAD') &&
      // abajo izquierda
     (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure - 1] && figures[fileFigure + 1][columnFigure - 1].type === 'ROAD') &&
      // abajo
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === 'ROAD')
    ) return

    if(pointIsLimits(fileFigure, columnFigure)){
      if(!start){
        setStart({file: fileFigure,column: columnFigure})
      }else if(!(start.file === fileFigure && start.column === columnFigure)){
        if(!finish){
          if(
            (start.file + 1 === fileFigure && columnFigure === start.column) ||
            (start.file - 1 === fileFigure && columnFigure === start.column) ||
            (start.file === fileFigure && start.column + 1 === columnFigure) || 
            (start.file === fileFigure && start.column - 1 === columnFigure) 
            ){
            return
          }

          setFinish({file: fileFigure, column: columnFigure})
        }else if(finish.file === fileFigure && finish.column === columnFigure){
          setFinish(undefined)
        }else {
          return
        }
      }else {
        setStart(undefined)
      }
    }
   
    setFigura(prev => prev.map((file, fileIndex) => file.map((col, colIndex) => fileIndex === fileFigure && colIndex === columnFigure ? { ...col, type: newFigure } : col)))
  }, [figures, pointIsLimits, start, finish])

  return (
    <div className="labyrinth">
      {
        figures.map((file, fileIndex) => {
          return (
            <div className="line" key={fileIndex} >
              {file.map((figure, index) => (
                <Space
                  key={`${fileIndex}-${index}`}
                  changeFigure={() => changeFigure({
                    columnFigure: index,
                    fileFigure: fileIndex,
                    newFigure: figure.type === 'TREE' ? 'ROAD' : 'TREE'
                  })}
                  type={figure.type} />
              ))}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
