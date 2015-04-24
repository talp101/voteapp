var data = {
    voteNumber : 1,
    voteOptions : [{image: "", title: ""}, {image: "", title: ""}]
};


var VoteOption = React.createClass({
    getInitialState: function(){
        return {votes: 0};
    },

    handleVoteOptionClick: function(e){
        e.preventDefault();
        incVotes = this.state.votes+1;
        this.setState({votes: incVotes});
    },

    render : function(){
        return (
            <div className="col s6 m6" onClick={this.handleVoteOptionClick} >
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.image}/>
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    <div className="card-content">
                        <h5 className="header center">{this.state.votes}</h5>
                    </div>
                </div>
            </div>
        );
    }
});

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

var VoteBox = React.createClass({

    getInitialState: function(){
        return {voteNumber: 1};
    },

    render: function(){
        return (
            <div className="voteBox">
                <VoteHeadLine voteNumber={this.state.voteNumber}/>
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <VoteOption image="http://photos.beontheroad.com/img/s1/v54/p1094556678-4.jpg" title="Rhino"/>
                            <VoteOption image="http://www.hollywoodreporter.com/sites/default/files/imagecache/modal_800/2014/09/too_good_for_grumpy_cat.jpg" title="Cats"/>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    });

var NavBar = React.createClass({
    render: function(){
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo">BigData Seminar</a>
                </div>
            </nav>
        );
    }
});

var Footer = React.createClass({
    render: function(){
        return (
            <footer className="page-footer orange">
                <div className="footer-copyright">
                    <div className="container">
                        Urieal And Tal Production
                    </div>
                </div>
            </footer>
        );
    }
});

var VoteApp = React.createClass({

    render: function(){
        return (
            <div className="voteApp">
                <NavBar />
                <VoteBox />
                <Footer />
            </div>
        );
    }
});

React.render(
<VoteApp />,
    document.getElementById('content')
);