import React from 'react';
import { Switch, Route } from 'react-router';
import Navbar from '../components/Navbar';
import Blog from '../pages/Blog';
import DashBoard from '../pages/DashBoard';
import Faq from '../pages/Faq';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';
import Signup from '../pages/Signup';
import Interview from '../pages/Interview';

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={DashBoard} />
        <PrivateRoute exact path='/blog' component={Blog} />
        <PrivateRoute exact path='/faq' component={Faq} />
        <PrivateRoute exact path='/lobby/:id' component={DashBoard} />
        <PrivateRoute exact path='/interview/:id' component={Interview} />
        <PrivateRoute
          exact
          path='/interview/:id/feedback/:pageNumber'
          component={Interview}
        />
        <PrivateRoute
          exact
          path='/feedback/:feedbackId/:pageNumber'
          component={DashBoard}
        />
        <PrivateRoute
          exact
          path='/question/:questionId/:interviewId'
          component={DashBoard}
        />
        <Route path='/' component={Signup} />
      </Switch>
    </>
  );
};

export default Routes;
