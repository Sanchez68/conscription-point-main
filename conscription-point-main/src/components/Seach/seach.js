import React from 'react';

let Search = (props) => {

    let searchingСhange = (event) => {
        let text = event.target.value
        props.updateNewSearchText(text)
    }
    return (
        <div>
            <form action="" method="get">
                <input
                    onChange={searchingСhange}
                    type="text"
                    className="form-control"
                    placeholder="Пошук за іменем"
                />
            </form>

            <div>

            </div>
        </div>)


}

export default Search
