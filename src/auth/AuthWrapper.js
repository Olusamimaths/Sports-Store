import React, { Compoent } from 'react';
import { AuthContext } from './AuthContext';

export const authWrapper = (WrappedComponent) => 
    class extends Compoent {
        render = () => 
            <AuthContext.Consumer>
                { context => 
                    <WrappedComponent {...this.props} {...context} />
                }
            </AuthContext.Consumer>
    }