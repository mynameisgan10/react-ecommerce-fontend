import React from 'react';
import Suggestions from "../../ui/suggestions/suggestions";
import Carousel from "../../ui/carousel/carousel";
import Ad from "../../ui/ad/ad";

const productPage = () => {
    const Fragment = React.Fragment;
    return (

        <div className="columns is-centered">
            <div className="column is-12">
                <section className="hero is-default is-bold">
                    <Ad/>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-vcentered is-multiline">
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
                                <div className="column is-6">
                                    <h1 className="title is-2">
                                        Description
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
                                <div className="column is-6">
                                    <Ad />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Ad/>
                    <div className="has-text-centered">
                        <h1 className="has-text-weight-bold is-size-4">Suggestions</h1>
                    </div>
                    <Suggestions/>
                </section>
            </div>
        </div>

    );
};

export default productPage;