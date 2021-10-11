const UPDATE_NEW_SEARCH_TEXT = 'UPDATE_NEW_SEARCH_TEXT'
const DELETE_ARRAY = 'DELETE_ARRAY'
const CHANGE_DELETE_ARRAY = 'CHANGE_DELETE_ARRAY'
const ADD_NEW_PRIZOVNIK = 'ADD_NEW_PRIZOVNIK'
const TYPED_NAME = 'TYPED_NAME'
const TYPED_DATA = 'TYPED_DATA'
const TYPED_ADDRESS = 'TYPED_ADDRESS'
const TYPED_NUMBER = 'TYPED_NUMBER'
const TYPED_GODEN = 'TYPED_GODEN'

function createData(id, name, data, address, number, goden) {
    return {id, name, data, address, number, goden};
}

let initialState = {

    rows: [
        createData(1, 'Гудзило Анатолій Праймович', 2000, 'м.Львів , вул.Сахарова 13', 9687, 'ТАК'),
        createData(2, 'Петрович Віктор Іванович', 2001, 'м.Львів , вул.Сахарова 23', 2817, 'НІЯК НІ'),
        createData(3, 'Сухарик Флінт Хрустович', 1999, 'м.Львів , вул.Чільчупеля 22', 1121, 'ТАК'),
        createData(4, 'Анатолій Анатолій Анатолієвич', 2000, 'м.Львів , вул.Великих Коркулів 1', 5321, 'ТАК'),
        createData(5, 'Головач Олексій Арабович', 1997, 'м.Львів , вул.Ще не вмерли 33', 6490, 'ТАК'),
        createData(6, 'Ніхто Ніхто Ніхтович', 1997, 'м.Львів , вул.Обережного Прямоходіння 3', 1816, 'ТАК'),
        createData(7, 'Коваль Іван Іванович', 2002, 'м.Львів , вул.Ще не вмерли 33', 7038, 'ТАК'),
        createData(8, 'Дьячек Дмитро Миколайович', 1927, 'м.Львів , вул.Солоденьких Кабачків 4', 8722, 'НІ'),
        createData(9, 'Касьян Ріта Вадимівна', 2002, 'м.Львів , вул.Де я 11', 4762, 'НІ'),
        createData(10, 'Рихлюк Анастас Володимирович', 1999, 'м.Львів , вул.Карабаса Барабаса 8', 8417, 'ТАК'),
        createData(11, 'Антошка Рижа Картошка', 1999, 'м.Львів , вул.Святої Лабки 3', 5861, 'НІ'),
    ],
    newSearchText: '',
    toDeleteArray: [],

    typedName: '',
    typedData: '',
    typedAddress: '',
    typedNumber: '',
    typedGoden: '',


}
const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_SEARCH_TEXT: {
            return {
                ...state,
                newSearchText: action.text
            }
        }

        case DELETE_ARRAY: {
            let newRows = state.rows.filter(row => {
                return state.toDeleteArray.indexOf(row.name) === -1
            })
            return {
                ...state,
                rows: newRows
            }
        }
        case CHANGE_DELETE_ARRAY: {
            return {
                ...state,
                toDeleteArray: action.arr
            }
        }

        case ADD_NEW_PRIZOVNIK: {
            let pushArray = (createData(
                state.rows.length,
                state.typedName,
                state.typedData,
                state.typedAddress,
                state.typedNumber,
                state.typedGoden,
            ))
                state.typedName= ''
                state.typedData=''
                state.typedAddress= ''
                state.typedNumber= ''
                state.typedGoden= ''
            return {
                ...state,
                rows: [...state.rows, pushArray]
            }
        }
        case TYPED_NAME: {
            return {
                ...state,
                typedName: action.text
            }
        }
        case TYPED_DATA: {
            return {
                ...state,
                typedData: action.text
            }
        }
        case TYPED_NUMBER: {
            return {
                ...state,
                typedNumber: action.text
            }
        }
        case TYPED_ADDRESS: {
            return {
                ...state,
                typedAddress: action.text
            }
        }
        case TYPED_GODEN: {
            return {
                ...state,
                typedGoden: action.text
            }
        }
        default:
            return state
    }
}

export const updateNewSearchText = (text) => ({type: UPDATE_NEW_SEARCH_TEXT, text})

export const deleteArray = () => ({type: DELETE_ARRAY})

export const changeDeleteArray = (arr) => ({type: CHANGE_DELETE_ARRAY, arr})

export const addNewPrizovnik = () => ({type: ADD_NEW_PRIZOVNIK})

export const onChangeName = (text) => ({type: TYPED_NAME, text})
export const onChangeData = (text) => ({type: TYPED_DATA, text})
export const onChangeAddress = (text) => ({type: TYPED_ADDRESS, text})
export const onChangeNumber = (text) => ({type: TYPED_NUMBER, text})
export const onChangeGoden = (text) => ({type: TYPED_GODEN, text})

export default mainReducer

