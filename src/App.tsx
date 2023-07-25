import { useCallback, useState } from "react";

import { Space } from "./components/space/Space";
import { Figure, FigureType, Position } from "./interfaces";
import { Delay } from "./utils/delay";


function App() {

  const [figures, setFigura] = useState<Figure[][]>([
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }],
    [{ type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT'}],
  ])

  const [start, setStart] = useState<{ file: number; column: number } | undefined>()
  const [finish, setFinish] = useState<{ file: number; column: number } | undefined>()
  const [isPlaying, setIsPlaying] = useState(false);

  const pointIsLimits = useCallback((file: number, column: number) => {
    return (file === 0 || file === figures.length - 1) || (column === 0 || column === figures[0].length - 1)
  }, [figures])

  const changeFigure = useCallback(({ fileFigure, columnFigure, newFigure }: { fileFigure: number; columnFigure: number; newFigure: FigureType }) => {

    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === 'ROAD') &&
      // arriba derecha
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure + 1] && figures[fileFigure - 1][columnFigure + 1].type === 'ROAD') &&
      // arriba
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === 'ROAD')
    ) return

    if (
      // derecha
      (figures[fileFigure] && figures[fileFigure][columnFigure + 1] && figures[fileFigure][columnFigure + 1].type === 'ROAD') &&
      // abajo derecha
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure + 1] && figures[fileFigure + 1][columnFigure + 1].type === 'ROAD') &&
      // abajo 
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === 'ROAD')
    ) return

    if (
      // arriba
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure] && figures[fileFigure - 1][columnFigure].type === 'ROAD') &&
      // arriba izquierda
      (figures[fileFigure - 1] && figures[fileFigure - 1][columnFigure - 1] && figures[fileFigure - 1][columnFigure - 1].type === 'ROAD') &&
      // izquierda
      (figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === 'ROAD')
    ) return

    if (
      // izquierda
      (figures[fileFigure] && figures[fileFigure][columnFigure - 1] && figures[fileFigure][columnFigure - 1].type === 'ROAD') &&
      // abajo izquierda
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure - 1] && figures[fileFigure + 1][columnFigure - 1].type === 'ROAD') &&
      // abajo
      (figures[fileFigure + 1] && figures[fileFigure + 1][columnFigure] && figures[fileFigure + 1][columnFigure].type === 'ROAD')
    ) return

    if (pointIsLimits(fileFigure, columnFigure)) {
      if (!start) {
        setStart({ file: fileFigure, column: columnFigure })
      } else if (!(start.file === fileFigure && start.column === columnFigure)) {
        if (!finish) {
          if (
            (start.file + 1 === fileFigure && columnFigure === start.column) ||
            (start.file - 1 === fileFigure && columnFigure === start.column) ||
            (start.file === fileFigure && start.column + 1 === columnFigure) ||
            (start.file === fileFigure && start.column - 1 === columnFigure)
          ) {
            return
          }

          setFinish({ file: fileFigure, column: columnFigure })
        } else if (finish.file === fileFigure && finish.column === columnFigure) {
          setFinish(undefined)
        } else {
          return
        }
      } else {
        setStart(undefined)
      }
    }

    setFigura(prev => prev.map((file, fileIndex) => file.map((col, colIndex) => fileIndex === fileFigure && colIndex === columnFigure ? { ...col, type: newFigure } : col)))
  }, [figures, pointIsLimits, start, finish])

  const recorridoLaberinto = useCallback(async (laberinto: Figure[][], posicionActual: { y: number; x: number }, position: Position): Promise<'SHOE' | 'X'> => {
    const { x, y } = posicionActual;

    if (laberinto[y] && laberinto[y][x]) {
      laberinto[y][x].type = 'PERSON'
      laberinto[y][x].position = position
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
    }

    await Delay()

    if (laberinto[y + 1] && laberinto[y + 1][x] && laberinto[y + 1][x].type === 'ROAD') {
      // se puede avanzar hacia abajo
      laberinto[y][x].type = 'SHOE'

      if (laberinto[y][x].position.includes('RIGHT')) {
        laberinto[y][x].position = 'RIGHT-BOTTOM'
      } else {
        laberinto[y][x].position = 'LEFT-BOTTOM'
      }

      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      let marca = await recorridoLaberinto(laberinto, { x: x, y: y + 1 }, 'BOTTOM')

      if (marca === 'X') {
        laberinto[y][x].type = 'PERSON'

        if(laberinto[y][x].position.includes('RIGHT')){
          laberinto[y][x].position = 'LEFT-TOP'
        }else {
          laberinto[y][x].position = 'RIGHT-TOP'
        }

        setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
        await Delay()
      }

      laberinto[y][x].type = marca
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (laberinto[y] && laberinto[y][x + 1] && laberinto[y][x + 1].type === 'ROAD') {
      // se puede avanzar hacia la derecha
      laberinto[y][x].type = 'SHOE'

      laberinto[y][x].position = 'RIGHT'

      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      let marca = await recorridoLaberinto(laberinto, { x: x + 1, y: y }, 'RIGHT')

      if (marca === 'X') {
        laberinto[y][x].type = 'PERSON'

        laberinto[y][x].position = 'LEFT'
 
        setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
        await Delay()
      }

      laberinto[y][x].type = marca
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (laberinto[y] && laberinto[y][x - 1] && laberinto[y][x - 1].type === 'ROAD') {
      // se puede avanzar hacia la izquierda
      laberinto[y][x].type = 'SHOE'

      laberinto[y][x].position = 'LEFT'

      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      let marca = await recorridoLaberinto(laberinto, { x: x - 1, y: y }, 'LEFT')
      if (marca === 'X') {
        laberinto[y][x].type = 'PERSON'
        laberinto[y][x].position = 'RIGHT'

        setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
        await Delay()
      }
      laberinto[y][x].type = marca
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (laberinto[y - 1] && laberinto[y - 1][x] && laberinto[y - 1][x].type === 'ROAD') {
      // se puede avanzar hacia arriba
      laberinto[y][x].type = 'SHOE'

      if (laberinto[y][x].position.includes('RIGHT')) {
        laberinto[y][x].position = 'LEFT-TOP'
      } else {
        laberinto[y][x].position = 'RIGHT-TOP'
      }

      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      let marca = await recorridoLaberinto(laberinto, { x: x, y: y - 1 }, 'TOP')
      if (marca === 'X') {

        laberinto[y][x].type = 'PERSON'

        if (laberinto[y][x].position.includes('RIGHT')) {
          laberinto[y][x].position = 'RIGHT-BOTTOM'
        } else {
          laberinto[y][x].position = 'LEFT-BOTTOM'
        }

        setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
        await Delay()
      }
      laberinto[y][x].type = marca
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if ((y === 0 || y === laberinto.length - 1) || (x === 0 || x === laberinto[0].length - 1)) {
      if (laberinto[y][x]) {
        laberinto[y][x].type = 'SHOE'
        setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
      }

      return 'SHOE'
    }

    if (laberinto[y] && laberinto[y][x]) {
      laberinto[y][x].type = 'X'
      setFigura(laberinto.map(file => file.map(col => ({ ...col }))))
    }

    return 'X'
  }, [])

  return (
    <div className="container">
      <div>
        <button disabled={!start || isPlaying} onClick={() => {
          if (!start) return
          setIsPlaying(true)
          recorridoLaberinto(figures.map(file => file.map(col => ({ ...col }))), { y: start.file, x: start.column },
            start.file === 0
              ? 'RIGHT-BOTTOM'
              : start.file === figures.length - 1
                ? 'RIGHT-TOP'
                : start.column === figures[0].length - 1
                  ? 'LEFT'
                  : 'RIGHT'
          )
        }} className={`button ${!start ? 'cursor-disable ' : ''}`}>
          Empezar
        </button>
      </div>
      <div className="labyrinth">
        {
          figures.map((file, fileIndex) => {
            return (
              <div className="line" key={fileIndex} >
                {file.map((figure, index) => (
                  <Space
                    position={figure.position}
                    key={`${fileIndex}-${index}`}
                    changeFigure={() => !isPlaying ? changeFigure({
                      columnFigure: index,
                      fileFigure: fileIndex,
                      newFigure: figure.type === 'TREE' ? 'ROAD' : 'TREE'
                    }) : () => { return }}
                    type={figure.type} />
                ))}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
