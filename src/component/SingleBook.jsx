import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  handleSelect = () => {
    this.props.setSelectBook(this.props.book.asin);
  };

  render() {
    let cardClass;
    return (
      <>
        {/* {(cardClass = this.props.book.asin === this.props.id ? "border-2 border-danger " : "")} */}
        <Card
          // className={cardClass}
          style={{ border: this.props.book.asin === this.props.id ? "3px solid red " : "none" }}
        >
          <Card.Img
            className="card-img-fluid"
            style={{ height: " 200px", objectFit: "contain" }}
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.handleSelect();
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            <Card.Text>${this.props.book.price}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;
