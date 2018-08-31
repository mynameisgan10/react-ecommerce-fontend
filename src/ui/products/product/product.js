import React from 'react';

const Product = () => {
    return (
        <div className="column is-3">
            <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://picsum.photos/1280/960/?random" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer className="card-footer">
        <a href="#" className="card-footer-item has-text-danger"><i class="fas fa-heart"></i></a>
        <a href="#" className="card-footer-item has-text-info"><i className="fas fa-shopping-cart"></i></a>
      </footer>
      </div>
      
        </div>
    );
};

export default Product;