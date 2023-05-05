export const act_count_up = (value) => {
    return {
        type: "COUNT_UP",
        payload: value
    }
};
export const act_count_down = (value) => {
    return {
        type: "COUNT_DOWN",
        payload: value
    }
}
export const  act_list_random = () => {
    return {
        type: "RANDOM",
    }
}