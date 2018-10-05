import * as actions from './actionTypes';

export const nextSlide = (currentSlide, slideItems) => {
    return {type: actions.NEXT_SLIDE, currentSlide: currentSlide, slideItems: slideItems}
}
export const previousSlide = (currentSlide, slideItems) => {
    return {type: actions.PREVIOUS_SLIDE, currentSlide: currentSlide, slideItems: slideItems}
}