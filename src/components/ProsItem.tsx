import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {changePros} from "../store/action-creators/prosCons";

interface prosItemProps {
    item: string,
    index: number
}

const ProsItem = (props: prosItemProps) => {
    const dispatch = useDispatch()

    const itemChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePros(e.target.value, props.index))
    }

    return (
        <div>
            {props.index + 1} -
            <input type="text" value={props.item} onChange={itemChanger} />
        </div>
    );
};

export default ProsItem;