
export type FigureType = 'TREE' | 'ROAD' | 'SHOE' | 'X' | 'PERSON'

export type Position = 'RIGHT-TOP' | 'LEFT-TOP' | 'RIGHT-BOTTOM' | 'LEFT-BOTTOM' | 'LEFT' | 'RIGHT' | 'BOTTOM' | 'TOP'

export interface Figure {
    type: FigureType;
    position: Position
}
