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

export interface Task {
  id: string;
  title: string;
  pomodoros: {
    estimated: number;
    completed: number;
  }
  status: {
    menu: boolean;
    information: boolean;
    editing: boolean;
  }
  finished: boolean;
}

export interface State {
  task: {
    tasks: Task[];
  }
}

export interface TaskContextValue {
  task: {
    tasks: Task[];
  };
  createTask: (task: Task) => void
  updateTask: (task: Task) => void
  removeTask: (task: Task) => void
}

export interface RenderList {
  children: React.ReactNode;
  props: {
    ref: React.RefObject<any>
  }
}

export interface RenderItem {
  value: Task;
  props: ItemProps;
  isDragged: boolean;
}
