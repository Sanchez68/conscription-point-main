import React from 'react';
import s from "../../App.module.css";

let Adder = (props) => {

    let addNewPrizovnik = () => {
        props.addNewPrizovnik()
    }

    let onChangeName = (event) => {
        let text = event.target.value
        props.onChangeName(text)
    }
    let onChangeData = (event) => {
        let text = event.target.value
        props.onChangeData(text)
    }
    let onChangeAddress = (event) => {
        let text = event.target.value
        props.onChangeAddress(text)
    }
    let onChangeNumber = (event) => {
        let text = event.target.value
        props.onChangeNumber(text)
    }
    let onChangeGoden = (event) => {
        let text = event.target.value
        props.onChangeGoden(text)
    }
    return (
        <div className={s.addPrizonik}>
            <input  onChange={onChangeName} value={props.typedName} placeholder="Введіть ПІБ" type="text"/>
            <input onChange={onChangeData} value={props.typedData} placeholder="Введіть рік народження" type="text"/>
            <input onChange={onChangeAddress} value={props.typedAddress} placeholder="Введіть Місце прописки" type="text"/>
            <input onChange={onChangeNumber} value={props.typedNumber} placeholder="Введіть номер телефону" type="text"/>
            <input onChange={onChangeGoden} value={props.typedGoden} placeholder="Вкажіть придатність призовника" type="text"/>
            <button onClick={addNewPrizovnik}>ДОБАВИТИ</button>
        </div>
    )


}

export default Adder
