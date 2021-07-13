import React, { Component } from 'react';
import { Redirect } from 'react-router';

export function withAuth(AuthedPage, newProps) {
    return class AuthedComponent extends Component {
        render() {
            if (window.User) {
                return (<AuthedPage {...newProps} />);
            }
            else {
                return (<Redirect to="/login" />);
            }
        }
    }
};

export default withAuth;