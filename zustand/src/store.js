import { create } from 'zustand'


const useStore = create((set) => ({
todos:[],
addTodo:(todo)=>{
    set((state)=>({todos:[...state.todos,todo]}))
}
}))

export default useStore