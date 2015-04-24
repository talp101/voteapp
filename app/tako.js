var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;


var Taco = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    remove: function () {
        this.props.onRemoveTaco(this.context.router.getCurrentParams().name);
    },

    render: function () {
        return (
            <div className="Taco">
                <h1>{this.context.router.getCurrentParams().name}</h1>
                <h2>{this.context.router}</h2>
                <button onClick={this.remove}>remove</button>
            </div>
        );
    }
});

module.exports = Taco;