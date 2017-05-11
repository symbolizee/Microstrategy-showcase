var React = require('react');
var ReactDOM = require('react-dom');   
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
     info: function(){
    },
    getInitialState: function() {
  return { showResults: false };
    },
    ShowPanel:function(e){
   
    },
    render:function(){
        return(
            <div>
                 <nav className ="nav-collapse.collapse">
                <div className="navbar-inner"> 
                  <ul className="nav navbar-nav navbar-left">
                            <li className="nav-item">
                                <Link  className="nav-link" to="/">Go back to Home</Link>
                            </li>
                  </ul>
                </div>
              </nav>
              <center>
                  <iframe width="1200" height="700" src="http://aumel13as26v/MicroStrategy/asp/Main.aspx?evt=2048001&src=Main.aspx.2048001&documentID=AD5A6A664F13C47BAD80BDA3DA842DD7&currentViewMedia=1&visMode=0&Server=AUMEL13AS26V&Project=Demo%20Ops&Port=0&share=1&hiddensections=header,path,dockTop,dockLeft,footer"></iframe>
                  </center>
            </div>    
       );
   } 
})

/*
          <nav className ="nav-collapse.collapse">
                <div className="navbar-inner"> 
                  <ul className="nav navbar-nav navbar-left">
                            <li className="nav-item">
                                <Link  className="nav-link" to="/">Go back to Home</Link>
                            </li>
                  </ul>
                </div>
              </nav>*/