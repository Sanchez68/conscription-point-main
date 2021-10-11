import React from 'react';
import {connect} from "react-redux";
import {
    addNewPrizovnik,
    changeDeleteArray,
    deleteArray, onChangeAddress, onChangeData, onChangeGoden,
    onChangeName, onChangeNumber,
    updateNewSearchText
} from "../redux/main-reducer";
import s from "../App.module.css";
import Search from "./Seach/seach";
import Table from "./Table/table";
import Adder from "./Adder/adder";

let Connector = (props) => {

    return (
        <div className={s.appWrapper}>
            {/*<button*/}
            {/*    onClick={() => props.addNewPrizovnik(12, 'Антошка Рижа Картошка', 1999, 'м.Львів , вул.Святої Лабки 3', 5861, 'НІ')}> lol*/}
            {/*</button>*/}
            <div className={s.naw}>
                <Search
                    newSearchText={props.newSearchText}
                    updateNewSearchText={props.updateNewSearchText}
                />
            </div>
            <div className={s.data}>
                <Table
                    newSearchText={props.newSearchText}

                    rows={props.rows.filter(r => {
                        return r.name.toLowerCase().indexOf(props.newSearchText.toLowerCase()) !== -1
                    })
                    }

                    deleteArray={props.deleteArray}
                    changeDeleteArray={props.changeDeleteArray}
                />
                <Adder
                    addNewPrizovnik={props.addNewPrizovnik}

                    onChangeName={props.onChangeName}
                    onChangeData={props.onChangeData}
                    onChangeAddress={props.onChangeAddress}
                    onChangeNumber={props.onChangeNumber}
                    onChangeGoden={props.onChangeGoden}

                    typedName={props.typedName}
                    typedData={props.typedData}
                    typedAddress={props.typedAddress}
                    typedNumber={props.typedNumber}
                    typedGoden={props.typedGoden}
                />
                {/*<div className={s.addPrizonik}>*/}
                {/*    <input placeholder="Введіть ПІБ" type="text"/>*/}
                {/*    <input placeholder="Введіть рік народження" type="text"/>*/}
                {/*    <input placeholder="Введіть Місце прописки" type="text"/>*/}
                {/*    <input placeholder="Введіть номер телефону" type="text"/>*/}
                {/*    <input placeholder="Вкажіть придатність призовника" type="text"/>*/}
                {/*    <button onClick={addNewPrizovnik}>ДОБАВИТИ</button>*/}
                {/*</div>*/}

            </div>

        </div>
    )
        ;


}


let mapStateToProps = (state) => {

    return {
        newSearchText: state.main.newSearchText,
        rows: state.main.rows,
        typedName: state.main.typedName,
        typedData: state.main.typedData,
        typedAddress: state.main.typedAddress,
        typedNumber: state.main.typedNumber,
        typedGoden: state.main.typedGoden,
    }
}
export default connect(mapStateToProps, {
        updateNewSearchText,
        deleteArray,
        changeDeleteArray,
        addNewPrizovnik,
        onChangeName,
        onChangeData,
        onChangeAddress,
        onChangeNumber,
        onChangeGoden,
    }
)(Connector)