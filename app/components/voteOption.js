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
            <div className="col s6 m6">
                <div className="card" onClick={this.handleClick}>
                    <div className="card-image">
                        <img src={this.props.image}/>
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    <div className="card-content">
                        <h5 className="header center">{this.props.votes}</h5>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = VoteOption;