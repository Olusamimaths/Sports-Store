import React, { Component, lazy, Suspense } from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
import { AuthProviderImpl } from './auth/AuthProviderImpl';

const Admin = lazy(() => import('./admin/Admin'))

export default class App extends Component {
    render() {
        return <Provider store={SportsStoreDataStore}>
            <AuthProviderImpl>
                <Router>
                    <Switch>
                        <Route path='/shop' component={ShopConnector} />
                        <Route path='/admin' render= {
                            routeProps =>  
                                    <Suspense fallback={<h3>loading...</h3>}>
                                        <Admin {...routeProps} />
                                    </Suspense>
                        } />
                        <Redirect to='/shop' />
                    </Switch>
                </Router>
            </AuthProviderImpl>

        </Provider>
    }
}



