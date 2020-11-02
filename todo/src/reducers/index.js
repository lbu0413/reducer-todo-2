import { ADD, COMPLETED } from '../actions/index'


export const reducer = (state, action) => {
    switch(action.type){
        case ADD:
            return (
                {...state, 
                    item: action.payload, 
                    completed: false, 
                    id: Date.now()  
                })
        case COMPLETED:
            return {...state, completed: true}
        default:
            return(state)
    }
}


export const initialState = [
{
    item: "Play with Leon and Levi",
    completed: false,
    id: Date.now()
},
{
    item: "Feed Leon and Levi",
    completed: false,
    id: Date.now()
},
{
    item: "Work out",
    completed: false,
    id: Date.now()
}
]