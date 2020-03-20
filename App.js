import React from 'react';

import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {Landing} from './js/pages/landing';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as Light} from '@eva-design/eva';
import {default as appTheme} from './custom-theme.json';
const theme = {...Light, ...appTheme};

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Landing />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
