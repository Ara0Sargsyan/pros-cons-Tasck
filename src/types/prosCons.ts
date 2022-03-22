

export interface ProsConsState {
    pros: string[];
    cons: string[];
}

export enum prosCrosActiontypes {
    CHANGE_PROS = "CHANGE_PROS",
    CHANGE_CONS = "CHANGE_CONS"
}

interface changeProsAction {
    type: prosCrosActiontypes.CHANGE_PROS,
    newName: string,
    index: number
}

interface changeConsAction {
    type: prosCrosActiontypes.CHANGE_CONS,
    newName: string,
    index: number
}

export type ProsConsActions = changeProsAction | changeConsAction
