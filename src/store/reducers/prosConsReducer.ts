import {ProsConsState, ProsConsActions, prosCrosActiontypes} from "../../types/prosCons";

const initialState: ProsConsState = {
    pros: [
        "aaaaaaa",
        ""
    ],
    cons: [
        "1111111",
        ""
    ]
}

export const prosConsReducer = (state = initialState, action: ProsConsActions): ProsConsState => {
    switch (action.type) {
        case prosCrosActiontypes.CHANGE_CONS:
            const newPros = state.cons.map((item, index) => {
                if (index === action.index) {
                    return action.newName
                } else {
                    return item
                }
            })
            if (newPros[newPros.length-1]) {
                newPros.push('')
            }
            return {
                ...state,
                cons: newPros.filter((el, index) => el || index === newPros.length-1)
            }
        case prosCrosActiontypes.CHANGE_PROS:
            const newCons = state.pros.map((item, index) => {
                if (index === action.index) {
                    return action.newName
                } else {
                    return item
                }
            })
            if (newCons[newCons.length-1]) {
                newCons.push('')
            }
            return {
                ...state,
                pros: newCons.filter((el, index) => el || index === newCons.length-1)
            }
        default:
            return state
    }
}

