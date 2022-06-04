import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { State, Task } from "@ts/types"

function getLocalStorageData(key: string): State {
  if (localStorage[key]) {
    return JSON.parse(localStorage.getItem(key) || '')
  }
  return {
    task: {
      tasks: []
    }
  }
}

const initialState: State = getLocalStorageData('pomo-state')

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>): void => {
      state.task.tasks = state.task.tasks.concat(action.payload)
    },
    updateTask: (state, action: PayloadAction<Task>): void => {
      state.task.tasks = state.task.tasks.map(task => {
          if(task.id === action.payload.id) {
            return action.payload
          }

          return task
        })
    },
    removeTask: (state, action: PayloadAction<Task>): void => {
      state.task.tasks = state.task.tasks.filter(task => task.id !== action.payload.id)
    }
  }
});

export const { createTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
