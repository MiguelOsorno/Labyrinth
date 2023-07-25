import { useCallback } from "react"
import { FigureType } from "../../interfaces"

interface Props  {
  type: FigureType
  changeFigure: () => void
}

export const Space = ({ type, changeFigure }: Props) => {

  const icon = useCallback(() => {
    let text = <></>
    switch (type) {
      case 'SHOE':
        text = <i className="fas fa-shoe-prints figure figure--color-yellow figure--small"></i>
        break;
      case 'ROAD':
        text =  <i className="fas fa-circle figure figure--small"></i>
        break;
      case 'TREE':
        text = <i className="fas fa-tree figure figure--color-green"></i>
        break;
      case 'X':
        text = <i className="fas fa-times figure"></i>
        break
      case 'PERSON':
        text = <i className="fas fa-walking figure figure--color-yellow figure--middle"></i>
        break
      default:
        break;
    }

    return text
  }, [type])

  return (
    <div className='space' onClick={changeFigure}>
      {icon()}
    </div>
  )
}
