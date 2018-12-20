import {CHANGE_INPUT_INPUTVALUE,ADD_TODO_ITEM,DEL_DATA} from './actionType'

const defaultState = {
    inputValue: '默认输入内容',
    dataObj: ["默认内容"]
}

//reducer 可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_INPUTVALUE) {   
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataObj.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DEL_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataObj.splice(action.index,1);
        return newState;
    }
    console.log(state,action);
    return state;
}