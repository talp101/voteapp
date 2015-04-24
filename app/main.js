/** @jsx React.DOM */

var React = require('react');
var VoteApp = require('voteApp');
var NavBar = require('./components/navbar');
var Footer = require('./components/footer');
var Home = require('./components/home');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;




var App = React.createClass({

    contextTypes : {
        router : React.PropTypes.func
    },

   render: function(){
        return (
            <div className="voteApp">
                <NavBar />
                <div className="voteBox">
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        );
   }
});

var routes = (
    <Route handler={App} name="app" path="/">
        <Route name="home" path="home" handler={Home}/>
        <Route name="question" path="question/:id" handler={VoteApp}/>
    </Route>
);

Router.run(routes, function(Handler){
   React.render(<Handler/>, document.getElementById("content"));
});
