import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
// import TravelImagePath from "../images/Travel-img.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TravelCards = () => {
   

  const travelData = useSelector((state) => state.travel.travelPlans);
  
  console.log(travelData);


  return (
    <Container>
      <Row>
        {travelData.map((travel) => (
            
          <Col lg={4} key={travel.id}>
            <Card>
              <Card.Img variant="top" src={travel.thumbnail} />
              <Card.Body>
                <Card.Title>{travel.destinationTitle}</Card.Title>
                <Card.Text>{travel.destinationDescription}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Max Persons We Carry: {travel.maxPersons}
                </ListGroup.Item>
                <ListGroup.Item>Status: {travel.status}</ListGroup.Item>
                <ListGroup.Item>Start Date: {travel.startDate}</ListGroup.Item>
                <ListGroup.Item>End Date: {travel.endDate}</ListGroup.Item>
                <ListGroup.Item>Cost Per Person: {travel.cost}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link as={Link} to={`/view-detail/${travel.id}`}>View Detail</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default TravelCards;
