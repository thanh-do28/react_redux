const initialState = 0;
const coust = (state=initialState, action) => {
    //xử lý nhận vào action và state cũ ==> cập nhật state ==> trả ra state mới
    //trả ra state mới
    switch (action.type) {
        case "COUNT_UP" :
            state += action.payload
            return state
        case "COUNT_DOWN" :
            state -= action.payload
            return state
        default:
            return state
    }
}

export default coust;