import React from "react";

// convert to class-based component

class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment : this.faker.image.avatar(),
      author : "Jemima Adjanor",
      timeAgo : new Date().getTime(),
      commentText : "I am a full stackdeveloper"
    };
   
  }
  
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.state.img} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.state.author}
          </a>
          <div className="metadata">
            <span className="date">{this.state.timeAgo}</span>
          </div>
          <div className="text">{this.state.commentText}</div>
        </div>
      </div>
    );
  }
  
}

export default CommentDetail;
