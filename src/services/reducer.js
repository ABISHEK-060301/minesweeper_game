export const initState = {
    pathValue: JSON.parse(localStorage.getItem("pathValue")),
    score: JSON.parse(localStorage.getItem("score"))
};

export const reducer = (state = { ...initState }, action) => {

    switch (action.type) {

        case "SETVALUE": {
            return { ...state, pathValue: action.payload }
        }

        case "SETSCORE": {
            return { ...state, score: action.payload }
        }

        case "REMOVE_VALUE": {
            return { ...state }
        }

        default: {
            return { ...state }
        }
    }
}
