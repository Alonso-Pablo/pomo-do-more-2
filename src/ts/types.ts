export interface ItemProps {
  key?: number
  tabIndex?: number
  'aria-roledescription'?: string
  onKeyDown?: (e: React.KeyboardEvent) => void
  onWheel?: (e: React.WheelEvent) => void
  style?: React.CSSProperties
  ref?: React.RefObject<any>
}

interface BeforeDragParams {
  elements: Element[]
  index: number
}

interface RenderItemParams<Value> {
  value: Value
  props: ItemProps
  index?: number
  isDragged: boolean
  isSelected: boolean
  isOutOfBounds: boolean
}

interface OnChangeMeta {
  oldIndex: number
  newIndex: number
  targetRect: ClientRect
}

interface RenderListParams {
  children: React.ReactNode
  isDragged: boolean
  props: {
    ref: React.RefObject<any>
  }
}

interface IVoiceover {
  item: (position: number) => string
  lifted: (position: number) => string
  dropped: (from: number, to: number) => string
  moved: (position: number, up: boolean) => string
  canceled: (position: number) => string
}

export interface ListProps<Value> {
  beforeDrag?: (params: BeforeDragParams) => void
  renderItem: (params: RenderItemParams<Value>) => React.ReactNode
  renderList: (props: RenderListParams) => React.ReactNode
  values: Value[]
  onChange: (meta: OnChangeMeta) => void
  transitionDuration: number
  removableByMove: boolean
  lockVertically: boolean
  voiceover: IVoiceover
  container?: Element | null
}



export type TEvent = React.MouseEvent | React.TouchEvent | React.KeyboardEvent