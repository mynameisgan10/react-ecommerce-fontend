import React from 'react';

const Suggestion = () => {
    return (
        <div className="column is-3">
            <figure className="image is-4by3">
                <img src="https://picsum.photos/800/600/?random" alt="Description" />
            </figure>
             <div className="has-text-centered">
                 <h3>The name of the items</h3>
                 <h3>The price</h3>
                
            </div>
        </div>
    );
};

export default Suggestion;