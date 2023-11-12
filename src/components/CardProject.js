import {Card, Button} from 'react-bootstrap';

const CardProject = (props ) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.project}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProject;
