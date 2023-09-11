import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
  },
};
class CommentArea extends Component {
  state = {
    listComment: [],
  };

  fetchComment = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", options);
      const comment = await resp.json();
      const commentOK = comment.filter((c) => c.elementId === this.props.id);
      this.setState({ listComment: commentOK });
    } catch (error) {}
  };

  componentDidMount = () => {
    this.fetchComment();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) {
      this.fetchComment();
    }
  };

  render() {
    return (
      <>
        <CommentList list={this.state.listComment} />
        <AddComment id={this.props.id} />
      </>
    );
  }
}
export default CommentArea;
