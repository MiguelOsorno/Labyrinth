import { useCallback } from "react"
import { FigureType, Position } from "../../interfaces"

interface Props  {
  type: FigureType
  changeFigure: () => void
  position: Position
}

export const Space = ({ type, changeFigure, position}: Props) => {

  const icon = useCallback(() => {
    let text = <></>
    switch (type) {
      case 'SHOE':
        text = <i className={`fas fa-shoe-prints figure figure--color-yellow figure--small 
        ${
          position === 'LEFT' 
            ? 'fa-rotate-180'
            : position === 'RIGHT' 
              ? ''
              : position === 'RIGHT-BOTTOM' || position === 'LEFT-BOTTOM' || position === 'BOTTOM'
               ? 'fa-rotate-90'
               : 'fa-rotate-270'
        }`}></i>
        break;
      case 'ROAD':
        text =  <i className="fas fa-circle figure figure--small"></i>
        break;
      case 'TREE':
        text = <i className="fas fa-tree figure figure--color-green"></i>
        break;
      case 'X':
        text = <i className="fas fa-times figure figure-color-red"></i>
        break
      case 'PERSON':
        text = <i className={`fas fa-walking figure figure--color-yellow figure--middle ${
          position === 'RIGHT'
          ? ''
          : position === 'LEFT'
           ? 'fa-flip-horizontal'
           : position === 'RIGHT-BOTTOM'
            ? 'fa-rotate-90'
            : position === 'LEFT-BOTTOM'
             ? 'fa-flip-horizontal fa-rotate-90'
             : position === 'RIGHT-TOP' 
              ? 'fa-rotate-270'
              : position === 'LEFT-TOP'
               ? 'fa-flip-horizontal fa-rotate-270'
               : position === 'TOP'
                ? 'fa-rotate-270'
                : 'fa-rotate-90'
        }`}></i>
        break
      default:
        break;
    }

    return text
  }, [type, position])

  return (
    <div className='space' onClick={changeFigure}>
      {icon()}
    </div>
  )
}
