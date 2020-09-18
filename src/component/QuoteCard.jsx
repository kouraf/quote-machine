import React from 'react';
import { TwitterShareButton, TwitterIcon } from "react-share";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  fullHeight: {
    height:"100vh",
  }
}

export default props => (
  <Container id="quote-box" fluid style={styles.fullHeight} className="d-flex align-items-center justify-content-center">
    
    <Card className="text-center" style={{width:"100vh",backgroundColor:'#d3d5d4'}}>
    <Card.Header id="author">{props.author}</Card.Header>
    <Card.Body>
      <Card.Text id="text">
        {props.text}
      </Card.Text>
      <Row>
      <Col>
      <a id="tweet-quote" href="twitter.com/intent/tweet">
      <TwitterShareButton
          url={String(window.location)}
          title={props.text + "\n -" + props.author + "\n from "}
        >
          <TwitterIcon
            size="2.5em"
          />
        </TwitterShareButton>
        </a>
      </Col>
      <Col>
      <Button id="new-quote" variant="primary" onClick={props.getQuote}>New quote</Button>
      </Col>
      </Row>
    </Card.Body>
  </Card>
    
  </Container>
)