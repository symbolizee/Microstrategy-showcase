var React = require('react');
var ReactDOM = require('react-dom');   
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render:function(){
        return(
            <div>
          <nav className ="nav-collapse.collapse">
                <div className="navbar-inner"> 
                  <ul className="nav navbar-nav navbar-left">
                            <li className="nav-item">
                                <Link  className="nav-link" to="/">Dashboard</Link>
                            </li>
                  </ul>
                </div>
              </nav>
            </div>    
       );
   } 
})