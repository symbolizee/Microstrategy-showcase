var React = require('react');
var LogoHeader = require('./../components/LogoHeader.jsx');
var LogoFooter = require('./../components/LogoFooter.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    
      getInitialState: function() {
        return { enabledisable: false,
               access:false};
      },
   
      accessfalse:function(){
        this.setState({access: false,
                      enabledisable: false});  
      },
      accesstrue:function(){
        this.setState({access: true,
                      enabledisable: true});  
      },
    
      render:function(){
       return(
        <div>
            <div className="logoheader">
                <LogoHeader />
            </div>
           
            <div className="navbar-fixed-bottom footer-bottom">           
                <LogoFooter />
            </div>
        </div>
       );
   }
});
