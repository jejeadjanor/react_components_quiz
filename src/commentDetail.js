import React from "react";

// convert to class-based component

class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    comment = faker.image.avatar(),
    this.props.author = "Jemima Adjanor",
    this.props.timeAgo = new Date().getTime(),
    this.props.commentText = "I am a full stackdeveloper"
  }
  
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.img} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.commentText}</div>
        </div>
      </div>
    );
  }
  
}

export default CommentDetail;
