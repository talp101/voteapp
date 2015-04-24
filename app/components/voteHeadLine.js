/** @jsx React.DOM */

var React = require('react');

var VoteHeadLine = React.createClass({
    render : function(){
        return (
            <div className="container">
                <h1 className="header center orange-text">Vote #{this.props.voteNumber}</h1>
                <div className="row center">
                    <h5 className="header col s12 light">What Is Your Pick?</h5>
                </div>
            </div>
        );
    }
});

module.exports = VoteHeadLine;