var React = require('react');
//Facebook avatar and hyperlink
  //  <span>
  //      <span id="welcome-user">Welcome {this.props.username}!</span>&nbsp;&nbsp;
  //      <a target="_blank" href={'https://www.facebook.com/' + this.props.pagename}>
  //       {this.props.pagetitle}
  //       </a>
  //       </span>
//<--<PagePic pagename={this.props.pagename} /></div> -->
/*<div className ="mercerinsights">
                <PageLink pagename={this.props.pagename} pagetitle={this.props.pagetitle} activeuser={this.props.activeUser} username={this.props.userName}/>
            </div>
            */
var logo = React.createClass({
  render: function() {
      return (
      <div className="layer">
        <div>
           <img src={'picture.jpg'} width="50"/>         
        </div>
    </div>
    )
  }
});
var PagePic = React.createClass({
  render: function() {
    return (
      <img src={'picture.jpg'} height="100" width="100"/>
    );
  }
});

var PageLink = React.createClass({
  render: function() {
    var outputHtml = (
      <a target="_blank" href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagetitle}
      </a>);
    if(this.props.activeuser)
    {
      outputHtml = (
       <span id="welcome-user">Welcome {this.props.username}!</span>
    );
    }
    return outputHtml; 
  }
});
module.exports = logo;