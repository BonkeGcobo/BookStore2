const CHECK_CATEGORY = 'bookStore/categoris/CHECK_CATEGORY';
const intialState = [];

export const checkStatus = () => ({
  type: CHECK_CATEGORY,
  text: 'under construction',
});

const categoryReducer = (state = intialState, action) => {
  switch (action.payload) {
    case CHECK_CATEGORY:
      return (action.text);
    default:
      return state;
  }
};

export default categoryReducer;
