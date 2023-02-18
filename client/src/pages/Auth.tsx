import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

const Auth = () => {
  return (
    <Container className="auth-container d-flex flex-column justify-content-center align-items-center ">
      <div className="auth-card-wrapper">
        <h1 className="auth-header">Login</h1>
        <Card className="auth-card p-5">
          <Form className="h-100 d-flex flex-column justify-content-between align-items-center">
            <Form.Control className="input-auth" placeholder="Please enter your email..." />
            <Form.Control className="input-auth" placeholder="Please enter your password..." />
            <div className="h-50 w-100 d-flex justify-content-between align-items-center">
              <div className="w-50 d-flex flex-column justify-content-between create-account">
                <span className="d-flex">
                  <p>No account yet?</p>
                  <a className="create-account-link">Create account</a>
                </span>
                <div className="d-flex">
                  <Form.Check className="check-remember" id="check-remember" />
                  <Form.Check.Label className="align-middle text-center" htmlFor="check-remember">
                    Remember me
                  </Form.Check.Label>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <Button className="auth-btn ">Log in</Button>
                <a className="lost-password pt-3">Lost your password?</a>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default Auth;
