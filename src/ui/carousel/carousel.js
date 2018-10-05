import React from 'react';
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import Styles from "./carousel.css";

const Carousel = (props) => {

    let styles;
    let Output = null;
    if (props.items.length > 0) {
        const items = [];
        props
            .items
            .forEach(item => {
                if (item.imageSrc) {
                    items.push(item);
                }
            });
        Output = items.map((item, index) => {

            if (index !== props.currentSlide) {
                styles = ["image", "is-4by3", Styles.slideItems];
            } else {
                styles = ["image", "is-4by3", Styles.active];
            }
            return (
                <figure className={styles.join(' ')}>
                    <img src={item.imageSrc} alt="Description"/>
                </figure>
            )
        });
    }

    return (
        <div className="column is-6">
            <div className={Styles.slideShowContainer}>
                {Output}
                <span
                    className={Styles.next}
                    onClick={() => props.nextSlide(props.currentSlide, props.items)}>&#10095;</span>
                <span
                    className={Styles.prev}
                    onClick={() => props.previousSlide(props.currentSlide, props.items)}>&#10094;</span>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return {currentSlide: state.itemSlides.currentSlide}
}

const mapDispatchToProps = dispatch => {
    return {
        nextSlide: (currentSlide, slideItems) => dispatch(
            actions.nextSlide(currentSlide, slideItems)
        ),
        previousSlide: (currentSlide, slideItems) => dispatch(
            actions.previousSlide(currentSlide, slideItems)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);