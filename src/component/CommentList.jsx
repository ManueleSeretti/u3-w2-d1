import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentList extends Component {
  handleDelete = async (event, id) => {
    event.preventDefault();
    try {
      const resp = await fetch(URL + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
    } catch (error) {
      console.log(error);
    }
    this.props.fetchComment();
  };
  render() {
    console.log(this.props.list);
    return (
      <ListGroup className="p-2 bg-secondary">
        <h5 className="text-info">Lista dei commenti:</h5>
        {this.props.list.map((comm, index) => (
          <ListGroup.Item key={index}>
            commento : {comm.comment} <br /> rate : {comm.rate}
            <Button
              className="ms-3"
              variant="danger"
              onClick={(event) => {
                this.handleDelete(event, comm._id);
              }}
            >
              delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
export default CommentList;
