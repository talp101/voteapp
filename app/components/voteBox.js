/** @jsx React.DOM */
var React = require('react');
var VoteHeadLine = require('components/voteHeadLine');
var VoteOption = require('components/voteOption');

var VoteBox = React.createClass({

    render: function(){
        if(this.props.questionData !== undefined){
            var self = this;
            var voteOptions = self.props.questionData.options.map(function(voteOption){
                return (
                  <VoteOption questionId={self.props.questionData.id} key={voteOption.id} id={voteOption.id} image={voteOption.image} title={voteOption.title} votes={voteOption.votes} onVoteOptionClick={self.props.handleVoteOptionClicked} />
                );
            });
            return (
                <div className="voteBox">
                    <VoteHeadLine voteNumber={self.props.questionData.id}/>
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                {voteOptions}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>Loading Data</div>
        );
    }
});

module.exports = VoteBox;