import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LearnItem from '../components/learn-item';
import './learn.css';
import './global.css';

export default function Learn() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Learn new words!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ion-grid>

          {/* Vocabulary line component */}
          <LearnItem />

        </ion-grid>


      </IonContent>
    </IonPage>
  );
};

