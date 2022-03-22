import React from 'react';
import {useDispatch} from "react-redux";
import {changeCons} from "../store/action-creators/prosCons";

interface consItemProps {
    item: string,
    index: number
}

const ConsItem = (props: consItemProps) => {
    const dispatch = useDispatch()

    const itemChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCons(e.target.value, props.index))
    }

    return (
        <div>
            {props.index + 1} -
            <input type="text" value={props.item} onChange={itemChanger} />
        </div>
    );
};

export default ConsItem;