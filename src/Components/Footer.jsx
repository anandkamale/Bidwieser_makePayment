import { Row, Col, Container } from "reactstrap";




const Footer = () => {
  return (
    <>
      <Container fluid className="">
        <Row>
          <Col className="px-0 py-0">
            <p className="footer_title mb-0">
              <span style={{ color: "#FECF3E" }}>BID</span>
              <span style={{ color: "#fff" }}>WISER</span> - THIS BIDS FOR YOU
            </p>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Footer;
