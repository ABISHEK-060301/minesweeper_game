import { REMOVE_VALUE, SETVALUE, SETSCORE } from './actionType';

export const setValue = (pathValue) => {
    localStorage.setItem("pathValue", pathValue);
    return {
        type: SETVALUE,
        payload: pathValue
    }
}

export const setScore = (score) => {
    localStorage.setItem("score", score);
    return {
        type: SETSCORE,
        payload: score
    }
}

export const removeValue = () => {
    localStorage.removeItem("pathValue");
    localStorage.removeItem("score");
    return {
        type: REMOVE_VALUE
    }
}