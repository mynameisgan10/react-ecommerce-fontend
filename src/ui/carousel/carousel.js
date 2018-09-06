import React from 'react';
import Styles from "./carousel.css";

const Carousel = (props) => {
    let styles= ["image","is-4by3",Styles.slideItems];
    const Output = props.items.map((item,index) => {
        if(index+1 === props.items.length){
            styles = ["image","is-4by3"];
        }
        return (<figure className={styles.join(' ')}>
                    <img src="https://picsum.photos/800/600/?random" alt="Description" />
                </figure>)
        });
    return (
        <div className="column is-6">
              <div className={Styles.slideShowContainer}>
              {Output}
              <span className={Styles.next}>&#10095;</span>
              <span href="prev" className={Styles.prev}>&#10094;</span>
              </div>
        </div>
    );
};

export default Carousel;