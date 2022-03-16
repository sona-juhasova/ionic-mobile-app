import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';

import '../pages/add.css';
import '../pages/global.css';

export default function AddForm({ saveNew }) {
  // const [text, setText] = useState([]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  // const word = ""; //change to state
  // const meaning = ""; //change to state



  //   function submitEvent(event) {
  //     event.preventDefault();
  //     const formData = { title: word, body: meaning };
  //     handleSubmit(formData);
  // }



  async function handleSubmit(e) {
    e.preventDefault();

    saveNew({ word, meaning });
    setWord("");
    setMeaning("");
  };

  return (
    <IonContent>
      <form>
        <IonList lines="full" class="ion-no-margin">
          <IonItem>
            <IonLabel position="floating">New Word</IonLabel>
            <IonInput value={word}
              onIonChange={(e) => setWord(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Meaning</IonLabel>
            <IonInput value={meaning}
              onIonChange={(e) => setMeaning(e.target.value)}></IonInput>
          </IonItem>

        </IonList>
      </form>

      <IonButton expand="block" fill="solid" class="save-button" type="button" onClick={(e) => { handleSubmit(e); }}>Save</IonButton>
    </IonContent>
  );
}; 
