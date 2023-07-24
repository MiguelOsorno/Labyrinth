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
      case 'PERSON':
        text = <i className="fas fa-walking figure figure--person"></i>
        break;
      case 'ROAD':
        text =  <i className="fas fa-circle figure figure--middle"></i>
        break;
      case 'TREE':
        text = <i className="fas fa-tree figure figure--tree"></i>
        break;
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
