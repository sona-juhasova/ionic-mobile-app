import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { listOutline, addOutline, checkmarkOutline } from 'ionicons/icons';
import Learn from './pages/learn';
import Add from './pages/add';
import Revise from './pages/revise';
import Update from './pages/update';

import './pages/global.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

export default function App() {
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/learn">
            <Learn/>
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route path="/revise">
            <Revise />
          </Route>
          <Route exact path="/">
            <Redirect to="/learn" />
          </Route>
          <Route exact path="/update/:id">
          <Update/>
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" >
          <IonTabButton tab="learn" href="/learn" class="tab-bar">
            <IonIcon icon={listOutline} color="#fff"/>
            <IonLabel class="tab-label">Learn</IonLabel>
          </IonTabButton>
          <IonTabButton tab="add" href="/add" class="tab-bar">
            <IonIcon icon={addOutline} />
            <IonLabel class="tab-label">Add</IonLabel>
          </IonTabButton>
          <IonTabButton tab="revise" href="/revise" class="tab-bar">
            <IonIcon icon={checkmarkOutline} />
            <IonLabel class="tab-label">Revise</IonLabel>
          </IonTabButton>
        </IonTabBar>
   
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    );
  }
  