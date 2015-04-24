/** @jsx React.DOM */

var React = require('react');

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

module.exports = Footer;