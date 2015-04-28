/** @jsx React.DOM */

var React = require('react');
var Footer = require('components/footer');
var NavBar = require('components/navbar');
var VoteBox = require('components/voteBox');

var VoteApp = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState : function(){
      return {
          questions:{},
          isVotedQuestions :[false, false, false, false,false, false]
      };
    },


    componentDidMount: function() {
        var self = this;
        this.socket = io();
        this.socket.on('data', function (questions) {
            self.setState({questions: questions});
        });
        this.socket.emit('fetchData');
    },


    handleVoteOptionClicked: function(voteOption, callback){
        if (!this.state.isVotedQuestions[voteOption.questionId-1]){
            voteOption.votes++;
            var oldVoted = this.state.isVotedQuestions;
            oldVoted[voteOption.questionId-1] = true;
            this.setState({isVotedQuestions:oldVoted});
            this.socket.emit('voteUp', voteOption, function(err){
                if(err)
                    return console.error('vote up error:', err);
                callback();
            });

        }


    },


    render : function(){
            return (
                <div className="voteApp">
                    <VoteBox questionData={this.state.questions[this.context.router.getCurrentParams().id-1]}  handleVoteOptionClicked={this.handleVoteOptionClicked} />
                </div>

            )
        }
});


module.exports = VoteApp;