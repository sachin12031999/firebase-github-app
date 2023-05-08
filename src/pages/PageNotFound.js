
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

const PageNotFound = () => {
  toast.error("Oops! The page you are looking for does not exist.");
  return (
    <Container className="page-not-found">
    <Row>
      <Col>
        <h1 className="text-center">404 Page Not Found</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="text-center">We're sorry, the page you requested could not be found.</p>
      </Col>
    </Row>
    <ToastContainer />
  </Container>
  )
}

export default PageNotFound
