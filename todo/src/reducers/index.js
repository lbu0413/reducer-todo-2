

export const initialState = 
    {
       item: "Play with Leon and Levi",
       completed: false,
       id: Date.now()
   }



export const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                item: action.payload,
                id: Date.now(),
                completed: false
                
            } 
        
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


