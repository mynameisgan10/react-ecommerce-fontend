import React from 'react';
import Suggestions from "../../ui/suggestions/suggestions";
import Carousel from "../../ui/carousel/carousel";

const productPage = () => {
    const Fragment = React.Fragment;
    return (

        <section className="hero is-default is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <Carousel
                            items={[
                                1,
                                1,
                                1,
                                1,
                                1,
                                1
                            ]}/>
                        <div className="column is-6">
                            <h1 className="title is-2">
                                iPhone X
                            </h1>
                            <h2 className="subtitle is-4">
                                this is the new iphone X<br/>
                                It is the biggest leap forward
                            </h2>
                            <br/>
                            <p className="has-text-centered">
                                <a className="button is-medium is-success">
                                    $9,000
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Suggestions/>
        </section>

    );
};

export default productPage;