export const state = () => ({ 
    tasks: ['one', 'two', 'three']
})
  
export const mutations = {
  addTask(state, task) {
    state.push(task)
  }
}