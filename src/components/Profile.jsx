import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>No profile data available</div>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Row>
        <Col>
          <Card className="text-center shadow-lg">
            <Card.Header style={{ backgroundColor: '#03d6b3' }}>
              <h1 style={{ color: 'white' }}>Bienvenido, {user.firstName}!</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Nos alegra tenerte aquí. Disfruta de nuestra plataforma y descubre todas las tutorías disponibles para ti.
              </Card.Text>
              <Card.Text>
                Si necesitas ayuda, no dudes en contactarnos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
