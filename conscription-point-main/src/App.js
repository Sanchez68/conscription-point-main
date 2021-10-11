import React from 'react';
import s from './App.module.css';
import Demo from './components/Table/table';
import Seach from "./components/Seach/seach";
import Connector from "./components/Connector";
// import ReactTableWithFilters from "./components/Table/TableWithFilter";

function App(props) {
    return (
        // <div className={s.appWrapper}>
        //     <div className={s.naw}>
        //       <Seach/>
        //     </div>
        //     <div className={s.data}>
        //         <Demo/>
        //         {/*<ReactTableWithFilters/>*/}
        //     </div>
        // </div>
        <Connector/>
    );
}

export default App;
