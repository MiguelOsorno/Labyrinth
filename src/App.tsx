import { useCallback, useState } from "react";

import { Space } from "./components/space/Space";
import { Figure, FigureType, Position } from "./interfaces";
import { Delay } from "./utils/delay";

const initialState: Figure[][] = [
  [{ type: 'ALERT', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'ALERT', position: 'RIGHT' }],
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
  [{ type: 'ALERT', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'TREE', position: 'RIGHT' }, { type: 'ALERT', position: 'RIGHT'}],
]

function App() {

  const [maze, setMaze] = useState<Figure[][]>(initialState)

  const [start, setStart] = useState<{ y: number; x: number } | undefined>()
  const [finish, setFinish] = useState<{ y: number; x: number } | undefined>()
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameUsed, setGameUsed] = useState(false)

  const pointIsInCorner = useCallback(({y, x }: {y: number, x: number}) => {
    return ((y === 0 && x === 0) || (y === 0 && x === maze[0].length - 1) || (y === maze.length - 1 && x ===0) || (y === maze.length - 1 && x === maze[0].length - 1))
  }, [maze])

  const pointIsLimits = useCallback((file: number, column: number) => {
    return (file === 0 || file === maze.length - 1) || (column === 0 || column === maze[0].length - 1)
  }, [maze])

  const changeFigure = useCallback(({ y,  x, newFigure }: { y: number; x: number; newFigure: FigureType }) => {

    if(pointIsInCorner({x, y})) return;

    if (
      // derecha
      (maze[y] && maze[y][x + 1] && maze[y][x + 1].type === 'ROAD') &&
      // arriba derecha
      (maze[y - 1] && maze[y - 1][x + 1] && maze[y - 1][x + 1].type === 'ROAD') &&
      // arriba
      (maze[y - 1] && maze[y - 1][x] && maze[y - 1][x].type === 'ROAD')
    ) return

    if (
      // derecha
      (maze[y] && maze[y][x + 1] && maze[y][x + 1].type === 'ROAD') &&
      // abajo derecha
      (maze[y + 1] && maze[y + 1][x + 1] && maze[y + 1][x + 1].type === 'ROAD') &&
      // abajo 
      (maze[y + 1] && maze[y + 1][x] && maze[y + 1][x].type === 'ROAD')
    ) return

    if (
      // arriba
      (maze[y - 1] && maze[y - 1][x] && maze[y - 1][x].type === 'ROAD') &&
      // arriba izquierda
      (maze[y - 1] && maze[y - 1][x - 1] && maze[y - 1][x - 1].type === 'ROAD') &&
      // izquierda
      (maze[y] && maze[y][x - 1] && maze[y][x - 1].type === 'ROAD')
    ) return

    if (
      // izquierda
      (maze[y] && maze[y][x - 1] && maze[y][x - 1].type === 'ROAD') &&
      // abajo izquierda
      (maze[y + 1] && maze[y + 1][x - 1] && maze[y + 1][x - 1].type === 'ROAD') &&
      // abajo
      (maze[y + 1] && maze[y + 1][x] && maze[y + 1][x].type === 'ROAD')
    ) return

    if (pointIsLimits(y, x)) {
      if (!start) {
        setStart({ y: y, x: x })
      } else if (!(start.y === y && start.x === x)) {
        if (!finish) {
          if (
            (start.y + 1 === y && x === start.x) ||
            (start.y - 1 === y && x === start.x) ||
            (start.y === y && start.x + 1 === x) ||
            (start.y === y && start.x - 1 === x)
          ) {
            return
          }

          setFinish({ y: y, x: x })
        } else if (finish.y === y && finish.x === x) {
          setFinish(undefined)
        } else {
          return
        }
      } else {
        setStart(undefined)
      }
    }

    setMaze(prev => prev.map((row, rowIndex ) => row.map((col, colIndex) => rowIndex === y && colIndex === x ? { ...col, type: newFigure } : col)))
  }, [maze, pointIsLimits, start, finish, pointIsInCorner])

  const walkMaze = useCallback(async (maze: Figure[][], posicionActual: { y: number; x: number }, position: Position): Promise<'SHOE' | 'X'> => {
    const { x, y } = posicionActual;

    if (maze[y] && maze[y][x]) {
      maze[y][x].type = 'PERSON'
      maze[y][x].position = position
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
    }

    await Delay()

    if (maze[y + 1] && maze[y + 1][x] && maze[y + 1][x].type === 'ROAD') {
      // se puede avanzar hacia abajo
      maze[y][x].type = 'SHOE'

      if (maze[y][x].position.includes('RIGHT')) {
        maze[y][x].position = 'RIGHT-BOTTOM'
      } else {
        maze[y][x].position = 'LEFT-BOTTOM'
      }

      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      let marca = await walkMaze(maze, { x: x, y: y + 1 }, 'BOTTOM')

      if (marca === 'X') {
        maze[y][x].type = 'PERSON'

        if(maze[y][x].position.includes('RIGHT')){
          maze[y][x].position = 'LEFT-TOP'
        }else {
          maze[y][x].position = 'RIGHT-TOP'
        }

        setMaze(maze.map(row => row.map(col => ({ ...col }))))
        await Delay()
      }

      maze[y][x].type = marca
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (maze[y] && maze[y][x + 1] && maze[y][x + 1].type === 'ROAD') {
      // se puede avanzar hacia la derecha
      maze[y][x].type = 'SHOE'

      maze[y][x].position = 'RIGHT'

      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      let marca = await walkMaze(maze, { x: x + 1, y: y }, 'RIGHT')

      if (marca === 'X') {
        maze[y][x].type = 'PERSON'

        maze[y][x].position = 'LEFT'
 
        setMaze(maze.map(row => row.map(col => ({ ...col }))))
        await Delay()
      }

      maze[y][x].type = marca
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (maze[y] && maze[y][x - 1] && maze[y][x - 1].type === 'ROAD') {
      // se puede avanzar hacia la izquierda
      maze[y][x].type = 'SHOE'

      maze[y][x].position = 'LEFT'

      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      let marca = await walkMaze(maze, { x: x - 1, y: y }, 'LEFT')
      if (marca === 'X') {
        maze[y][x].type = 'PERSON'
        maze[y][x].position = 'RIGHT'

        setMaze(maze.map(row => row.map(col => ({ ...col }))))
        await Delay()
      }
      maze[y][x].type = marca
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if (maze[y - 1] && maze[y - 1][x] && maze[y - 1][x].type === 'ROAD') {
      // se puede avanzar hacia arriba
      maze[y][x].type = 'SHOE'

      if (maze[y][x].position.includes('RIGHT')) {
        maze[y][x].position = 'LEFT-TOP'
      } else {
        maze[y][x].position = 'RIGHT-TOP'
      }

      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      let marca = await walkMaze(maze, { x: x, y: y - 1 }, 'TOP')
      if (marca === 'X') {

        maze[y][x].type = 'PERSON'

        if (maze[y][x].position.includes('RIGHT')) {
          maze[y][x].position = 'RIGHT-BOTTOM'
        } else {
          maze[y][x].position = 'LEFT-BOTTOM'
        }

        setMaze(maze.map(row => row.map(col => ({ ...col }))))
        await Delay()
      }
      maze[y][x].type = marca
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
      if (marca === 'SHOE') return marca
    }

    if ((y === 0 || y === maze.length - 1) || (x === 0 || x === maze[0].length - 1)) {
      if (maze[y][x]) {
        maze[y][x].type = 'SHOE'
        setMaze(maze.map(row => row.map(col => ({ ...col }))))
      }

      return 'SHOE'
    }

    if (maze[y] && maze[y][x]) {
      maze[y][x].type = 'X'
      setMaze(maze.map(row => row.map(col => ({ ...col }))))
    }

    return 'X'
  }, [])

  return (
    <div className="container">
      <div>
        <button disabled={!start || isPlaying || gameUsed} onClick={async() => {
          if (!start) return
          setGameUsed(true)
          setIsPlaying(true)
          await walkMaze(maze.map(row => row.map(col => ({ ...col }))), { y: start.y, x: start.x },
            start.y === 0
              ? 'RIGHT-BOTTOM'
              : start.y === maze.length - 1
                ? 'RIGHT-TOP'
                : start.x === maze[0].length - 1
                  ? 'LEFT'
                  : 'RIGHT'
          )
          setIsPlaying(false)
        }} className={`button ${!start || isPlaying || gameUsed ? 'cursor-disable ' : ''}`}>
          Start
        </button>
        <button disabled={isPlaying} className={`button ${isPlaying ? 'cursor-disable': ''}` } onClick={() => {
          setMaze(initialState)
          setFinish(undefined)
          setStart(undefined)
          setGameUsed(false)

        }} >Reset</button>
      </div>
      <div className="labyrinth">
        {
          maze.map((row, rowIndex) => {
            return (
              <div className="line" key={rowIndex} >
                {row.map((figure, columIndex) => (
                  <Space
                    position={figure.position}
                    key={`${rowIndex}-${columIndex}}`}
                    changeFigure={() => !isPlaying ? changeFigure({
                      x: columIndex,
                      y: rowIndex,
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
