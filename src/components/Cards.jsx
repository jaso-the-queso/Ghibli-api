import React, { Component } from 'react';
// import InfoDump from './InfoDump';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: [],
            clickMessage: []
        };
        
    };
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            return obj;
        })
    };

    

    render() {
        return (
            <div>
                <div className="row">
                    <div className="card col-sm-6">
                        <div className="card">
                            {/* <img className="card-img-top" src="..." alt="ay" /> */}
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary" type="submit">Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-sm-6">
                        <div className="card">
                            {/* <img className="card-img-top" src="..." alt="ay" /> */}
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary" type="submit">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Cards;