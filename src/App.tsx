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

  const changeFigure = useCallback(({ fileFigure, columnFigure, newFigure }: { fileFigure: number; columnFigure: number; newFigure: FigureType }) => {
    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === newFigure )&&
      // arriba derecha
      (figures[fileFigure -1] && figures[fileFigure - 1][columnFigure + 1] && figures[fileFigure - 1][columnFigure + 1].type === newFigure) &&
      // arriba
      (figures[fileFigure -1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === newFigure)
    ) return

    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === newFigure) &&
      // abajo derecha
     ( figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure + 1] && figures[fileFigure + 1][columnFigure + 1].type === newFigure) &&
      // abajo 
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === newFigure)
    ) return 

    if (
      // arriba
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === newFigure) &&
      // arriba izquierda
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure - 1] && figures[fileFigure - 1][columnFigure - 1].type === newFigure) &&
      // izquierda
     ( figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === newFigure)
    ) return

    if (
      // izquierda
      (figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === newFigure) &&
      // abajo izquierda
     (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure - 1] && figures[fileFigure + 1][columnFigure - 1].type === newFigure) &&
      // abajo
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === newFigure)
    ) return

    setFigura(prev => prev.map((file, fileIndex) => file.map((col, colIndex) => fileIndex === fileFigure && colIndex === columnFigure ? { ...col, type: newFigure } : col)))
  }, [figures])

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
