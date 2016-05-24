// tut3.js
var CommentBox - React.createClass({
	rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
	render: function() {
		return (
			<div className="CommentBox">
			  <h1>Comments</h1>
			  <CommentList />
			  <CommentForm />
			</div>
			);
	}
});