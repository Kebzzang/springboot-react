//액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = (username) => ({ type: 'DECREMENT' ,payload: username,});

//상태

const initstate = {
  number: 1,
  username: 'keb',
};

//액션의 결과를 걸러내는 친구 !!

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; //return 되면 그걸 호출한 쪽에서 받는 게 아니라 리턴된 순간 UI 변경!!
    case 'DECREMENT':
      return { number: state.number - 1, username: action.payload };
    default:
      return state;
  }
};

export default reducer;
