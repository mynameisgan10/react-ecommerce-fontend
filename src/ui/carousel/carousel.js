import React, {Component} from 'react';
import Styles from "./carousel.css";

class Carousel extends Component {

    state = {
        currentSlide: 0
    }
    previousSlide = () => {
        if (this.state.currentSlide - 1 < 0) {
            return this.setState({currentSlide: 0})
        }
        this.setState({
            currentSlide: this.state.currentSlide - 1
        })
    }
    nextSlide = () => {
        const items = [];
        this
            .props
            .items
            .forEach(item => {
                if (item.imageSrc) {
                    items.push(item);
                }
            });
            if(this.state.currentSlide + 1 > items.length - 1 ){
                return this.setState({
                    currentSlide: items.length -1
                })
            }
            this.setState({
                currentSlide: this.state.currentSlide + 1
            })
        
    }
    render() {
        let styles;
        let Output = null;
        if (this.props.items.length > 0) {
            const items = [];
            this
                .props
                .items
                .forEach(item => {
                    if (item.imageSrc) {
                        items.push(item);
                    }
                });
            Output = items.map((item, index) => {

                if (index !== this.state.currentSlide) {
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
                    <span className={Styles.next} onClick={this.nextSlide}>&#10095;</span>
                    <span className={Styles.prev} onClick={this.previousSlide}>&#10094;</span>
                </div>
            </div>
        );
    }
};

export default Carousel;