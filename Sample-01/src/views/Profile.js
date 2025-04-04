import React from "react";
import { Container, Row, Col } from "reactstrap";

import ReactJson from "react-json-view";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <ReactJson src={user} name={false} displayObjectSize={false}
        displayDataTypes={false} theme="monokai" style={{ fontSize: "1.1rem", lineHeight: 1.1}} />
        {/* <Highlight>{JSON.stringify(user, null, 2)}</Highlight> */}
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
