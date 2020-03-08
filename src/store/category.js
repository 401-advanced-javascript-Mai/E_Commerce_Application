let initialState = {
    categories: [
        { name: "shoes", displayname: "sportShoes", description: "multiTypes" },
        { name: "skirts", displayname: "sportSkirt", description: "multiTypes" },
        { name: "hat", displayname: "sportHat", description: "cool hat" }
    ],
    activeCategories: false
}



export default (state = initialState, action) => {
    let { type , payload } = action ;
    switch (type) {
        case 'show':
            let activeCategories  = state.activeCategories = true;
            let categories = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name, displayname: category.displayname, description: category.description }
                }
                return category
            });
            return { activeCategories, categories }

        case 'hide':
            let activeCategories2 = state.activeCategories = false;
            let categories2 = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name }
                }
                return category
            });

            return { activeCategories2, categories2 }

        default:
            return state
    }
}

export const show = (name) => {
    return {
        type: "show",
        payload: name
    }
}

export const hide = (name) => {
    return {
        type: "hide",
        payload: name
    }
}
