import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import List from "./components/List";
import ProsItem from "./components/ProsItem";
import ConsItem from "./components/ConsItem";

function App() {
    const {cons, pros} = useTypedSelector(state => state.prosCons)

    return (
        <div style={{display: "flex", justifyContent: "space-around"}} >
            <List
                items={pros}
                renderItem={(item, index) => <ProsItem key={index} index={index} item={item} /> }
            />
            <List
                items={cons}
                renderItem={(item, index) => <ConsItem key={index} index={index} item={item} /> }
            />
        </div>
    );
}

export default App;
