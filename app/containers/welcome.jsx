var React = require('react');
var LogoHeader = require('./../components/LogoHeader.jsx');
var LogoFooter = require('./../components/LogoFooter.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    info: function(){
        alert("WIP Bro!!, tool is not ready yet.");
    },
    getInitialState: function() {
        return { showResults: false };
    },
    ShowPanel:function(e){
   this.setState({ showResults:!this.state.showResults });
    },
     render:function(){
       return(
        <div>
            <div className="content">        
                <div className="home-box">
                <Link  to="/about">React Projects</Link>
                </div>
                <div className="home-box">
                <Link to="/about">Survey Tool</Link>
                </div>
                <div className="home-box">
                <Link to="/about">Analytics</Link>
                </div>
                    <div className="home-box">
                <Link to="/about">Report</Link>
                </div>
            </div> 
          
        </div>
       );
   }
});