/** @jsx React.DOM */

var React = require('react');

var VoteOption = React.createClass({

    handleClick: function(e){
        e.preventDefault();
        this.props.onVoteOptionClick({id:this.props.id, image:this.props.image, title:this.props.title, votes:this.props.votes, questionId:this.props.questionId}, function(err){
            console.error("Error occurred:", err);
        });

    },

    render : function(){
        return (
            <div className="col s6 m6" onClick={this.handleClick}>
                <div className="card" onClick={this.handleClick}>
                    <div className="card-image" onClick={this.handleClick}>
                        <img src={this.props.image} onClick={this.handleClick} />
                    </div>
                    <div className="card-content" onClick={this.handleClick}>
                        <p className="card-title black-text" onClick={this.handleClick}>{this.props.title}</p>
                    </div>
                    <div className="card-action" onClick={this.handleClick}>
                        <h5 className="header center" onClick={this.handleClick}>{this.props.votes}</h5>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = VoteOption;