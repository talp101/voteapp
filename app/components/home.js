/** @jsx React.DOM */

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="container">
            <div className="row">
                <div className="container">
                    <h1 className="header center orange-text">BigData Seminar</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">AACT</h5>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src='media/tal.jpg' hight='451' width='800'/>
                        </div>
                        <div className="card-content">
                            <h5 className="header center">Urieal Ravviei</h5>
                        </div>
                    </div>
                </div>

                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src='media/tal.jpg' hight='451' width='800'/>
                        </div>
                        <div className="card-content">
                            <h5 className="header center">Tal Peretz</h5>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        );
    }
});

module.exports = Home;