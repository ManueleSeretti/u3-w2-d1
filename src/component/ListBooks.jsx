import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class ListBooks extends Component {
  state = {
    name: "",
    bookSearch: this.props.books,
    selectBook: { id: null, selected: false },
  };
  setSelectBook = (id) => {
    this.setState({ selectBook: { id: id, selected: true } });
  };

  filterBookList = (valore) => {
    const bookFilter = this.props.books.filter((book) => book.title.toLowerCase().includes(valore));
    this.setState({ bookSearch: bookFilter });
  };

  HandleChange = (valore) => {
    this.setState({ name: valore });
    this.filterBookList(valore);
  };

  render() {
    return (
      <>
        <Container fluid className=" bg-warning bg-opacity-25">
          <InputGroup className="my-3">
            <InputGroup.Text>Find a book</InputGroup.Text>
            <Form.Control
              value={this.state.name}
              type="text"
              placeholder="Inserisci il titolo"
              onChange={(e) => {
                this.HandleChange(e.target.value);
              }}
            />
          </InputGroup>
          <Row className="g-3">
            <Col className="col-8">
              <Row className="row row-cols-sm-3 row-cols-md-4 gy-3">
                {this.state.bookSearch.map((book, index) => (
                  <Col key={index}>
                    <SingleBook book={book} id={this.state.selectBook.id} setSelectBook={this.setSelectBook} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="col-4">
              {this.state.selectBook.selected ? (
                <CommentArea id={this.state.selectBook.id} setSelectBook={this.setSelectBook} />
              ) : (
                <Alert variant="info">clicca su un libro per visualizzare i commenti</Alert>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ListBooks;
