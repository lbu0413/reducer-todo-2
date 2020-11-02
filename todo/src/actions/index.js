export const ADD = "ADD"
export const COMPLETED = "COMPLETE"
export const CLEAR = "CLEAR"


const addTodo = (value) => {
    return ({type: ADD, payload: value})
}





export default{
    addTodo: addTodo,
}