import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { listOutline, addOutline, checkmarkOutline } from 'ionicons/icons';
import Tab1 from './pages/learn';
import Tab2 from './pages/add';
import Tab3 from './pages/revise';

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
            <Tab1 />
          </Route>
          <Route exact path="/add">
            <Tab2 />
          </Route>
          <Route path="/revise">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/learn" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="learn" href="/learn">
            <IonIcon icon={listOutline} />
            <IonLabel>Learn</IonLabel>
          </IonTabButton>
          <IonTabButton tab="add" href="/add">
            <IonIcon icon={addOutline} />
            <IonLabel>Add</IonLabel>
          </IonTabButton>
          <IonTabButton tab="revise" href="/revise">
            <IonIcon icon={checkmarkOutline} />
            <IonLabel>Revise</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    );
  }
  