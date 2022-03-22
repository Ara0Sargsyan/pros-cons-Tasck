import {ProsConsActions, prosCrosActiontypes} from "../../types/prosCons";


export const changePros = ( newName: string, index: number ): ProsConsActions => {
    return {
        type: prosCrosActiontypes.CHANGE_PROS,
        index,
        newName
    }
}


export const changeCons = ( newName: string, index: number ): ProsConsActions => {
    return {
        type: prosCrosActiontypes.CHANGE_CONS,
        index,
        newName
    }
}