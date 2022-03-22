import React from 'react';


interface listProps {
    items: string[],
    renderItem: (item: string, index: number) => React.ReactNode
}

const List = (props: listProps) => {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    );
};

export default List;