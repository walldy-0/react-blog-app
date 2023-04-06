// selectors
export const getAllCategories = ({ categories }) => categories;
export const getCategoryById = ({ categories }, categoryId ) => categories.find(cat => cat.id === categoryId);

// actions

// action creators

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;