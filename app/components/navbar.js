/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({

    componentDidMount : function(){
        $(".button-collapse").sideNav();
    },

    render: function(){
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper">
                    <a id="logo-container" href="#" className="brand-logo">Seminar</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="question" params={{id:"1"}}>Vote# 1</Link></li>
                        <li><Link to="question" params={{id:"2"}}>Vote# 2</Link></li>
                        <li><Link to="question" params={{id:"3"}}>Vote# 3</Link></li>
                        <li><Link to="question" params={{id:"4"}}>Vote# 4</Link></li>
                        <li><Link to="question" params={{id:"5"}}>Vote# 5</Link></li>
                        <li><Link to="question" params={{id:"6"}}>Vote# 6</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to="app">Votes</Link></li>
                        <hr/>
                        <li><Link to="question" params={{id:"1"}}>Vote# 1</Link></li>
                        <li><Link to="question" params={{id:"2"}}>Vote# 2</Link></li>
                        <li><Link to="question" params={{id:"3"}}>Vote# 3</Link></li>
                        <li><Link to="question" params={{id:"4"}}>Vote# 4</Link></li>
                        <li><Link to="question" params={{id:"5"}}>Vote# 5</Link></li>
                        <li><Link to="question" params={{id:"6"}}>Vote# 6</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});


module.exports = NavBar;