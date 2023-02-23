import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, PRIVACY_POLICY, REGISTRATION_ROUTE } from 'utils/constants';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname !== `/${LOGIN_ROUTE}`;

  return (
    <Container className="auth-container d-flex flex-column justify-content-center align-items-center ">
      <div className="auth-card-wrapper">
        <h1 className="auth-header">{isLogin ? 'Login' : 'Create Account'}</h1>
        <Card className="auth-card px-5 pt-4">
          <Form className="h-100 py-4 d-flex flex-column justify-content-between align-items-center">
            <Form.Control className="input-auth" placeholder="Please enter your email..." />
            <div className="mb-3"></div>
            <Form.Control className="input-auth" placeholder="Please enter your password..." />
            <div className="mb-3"></div>
            <div className="h-50 w-100 d-flex justify-content-between align-items-center">
              <div className="w-50 d-flex flex-column justify-content-between create-account">
                <span className="d-flex">
                  <p>{isLogin ? 'No account yet?' : 'Do you have an account?'}</p>
                  {isLogin ? (
                    <NavLink to={REGISTRATION_ROUTE} className="create-account-link">
                      Create account
                    </NavLink>
                  ) : (
                    <NavLink to={LOGIN_ROUTE} className="create-account-link ">
                      Login
                    </NavLink>
                  )}
                </span>
                <div className="d-flex">
                  {/* TODO Remember me logic */}
                  {/* <Form.Check className="check-remember" id="check-remember" /> */}
                  {/* <Form.Check.Label className="align-middle text-center" htmlFor="check-remember">
                    Remember me
                  </Form.Check.Label> */}
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                {isLogin ? (
                  <>
                    <Button className="auth-btn">Log in</Button>
                    <a className="lost-password pt-3">Lost your password?</a>
                  </>
                ) : (
                  <Button className="auth-btn create-acc-btn">Create Account</Button>
                )}
              </div>
            </div>
          </Form>
          {!isLogin && (
            <>
              <p className="policy-text">
                {PRIVACY_POLICY} <a>privacy policy.</a>
              </p>
            </>
          )}
        </Card>
      </div>
    </Container>
  );
};

export default Auth;
