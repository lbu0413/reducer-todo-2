




export const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }
                
        ]
        case "COMPLETED":
            return {...state, completed: true}

        default:
            return state
    }
}




export const initialState = [
 {
    item: "Play with Leon and Levi",
    completed: false,
    id: Date.now()
}
]