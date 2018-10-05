import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    currentSlide: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_SLIDE:
            const nextItems = [];
            action
                .slideItems
                .forEach(item => {
                    if (item.imageSrc) {
                        nextItems.push(item);
                    }
                });
            if (action.currentSlide + 1 > nextItems.length - 1) {
                return utilities.updateObject(state, {currentSlide: 0})
            }
            return utilities.updateObject(state, {
                currentSlide: state.currentSlide + 1
            })
        case actionTypes.PREVIOUS_SLIDE:
            const previousItems = [];
            action
                .slideItems
                .forEach(item => {
                    if (item.imageSrc) {
                        previousItems.push(item);
                    }
                });
            if (action.currentSlide - 1 < 0) {
                return utilities.updateObject(state, {
                    currentSlide: previousItems.length - 1
                })
            }
            return utilities.updateObject(state, {
                currentSlide: state.currentSlide - 1
            })

    }
    return state
}

export default reducer;