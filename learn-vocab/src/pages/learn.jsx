import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonViewWillEnter,IonList} from '@ionic/react';
import LearnItem from '../components/learn-item';
import './learn.css';
import './global.css';
import app, { wordsRef } from "../firebase-config";

export default function Learn() {
  const [words, setWords] = useState([])
  
  async function getWords() {
    const response = await fetch(wordsRef.toString() + ".json");
    const data = await response.json();
    // map object into an array with objects
    const wordsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    return wordsArray;
  }


  async function loadWords() {

    const wordsArray = await getWords();
    
    setWords(wordsArray);
}

useIonViewWillEnter(() => {
  loadWords();
});



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


      <IonList>
                    {words.map(word => (
                        <LearnItem word={word} key={word.id} reload={loadWords} />
                    ))}
                </IonList>

      </ion-grid>


    </IonContent>
  </IonPage>
);
};

