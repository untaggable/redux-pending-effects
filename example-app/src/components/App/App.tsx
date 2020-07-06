import React from 'react';
import { Switch, Route } from 'react-router';
import { Grommet, Box } from 'grommet';

import { Header } from '../Header/Header';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { PatentsPage } from '../../pages/PatentsPage';
import { LibraryPage } from '../../pages/LibraryPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ROUTES } from '../../utils/routes';
import { theme } from '../../theme';

export const App: React.FC = () => (
  <Grommet theme={theme} >
    <Header/>
    <Box
      as='section'
      margin={{
          "top": "30px",
          "bottom": "15px",
          "horizontal": "30px"
      }}
    >
      <Switch>
        <Route path={ROUTES.HOME} exact component={HomePage}/>
        <Route path={ROUTES.LOGIN} component={LoginPage}/>
        <Route path={ROUTES.PATENTS} component={PatentsPage}/>
        <Route path={ROUTES.LIBRARY} component={LibraryPage}/>
        <Route path={ROUTES.DASHBOARD} component={DashboardPage}/>
      </Switch>
    </Box>
  </Grommet>
);