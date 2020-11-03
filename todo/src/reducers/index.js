

export const initialState = [
    {
       item: "Play with Leon and Levi",
       completed: false,
       id: Date.now()
    }
]

   



export const reducer = (state, action) => {
    const newTodo = 
        {
            item: action.payload,
            id: Date.now(),
            completed: false
        }


    switch(action.type){
        case "ADD":
            return [
                ...state, newTodo
            ]
        
        case "COMPLETED":
            return [
                ...state,
                state.map((todo, index) => {
                    if(index === action.index){
                        return [
                            ...state,
                            {
                                todo
                            }
                        ]
                    }
                })
            ]

        default:
            return state
    
}
}


