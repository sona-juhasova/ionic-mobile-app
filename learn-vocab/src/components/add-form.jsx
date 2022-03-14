import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput,IonButton, IonList } from '@ionic/react';

import '../pages/add.css';
import '../pages/global.css';

export default function AddForm({saveNew}) { 
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
  alert("Hello " + word);
  saveNew(word);
  setWord("");
  // setMeaning("");
};

  return ( 
    <IonContent>
      <form onSubmit={(e) => handleSubmit(e)}>
        <IonList lines="full" class="ion-no-margin">
        <IonItem>
            <IonLabel position="floating">New Word</IonLabel>
            <IonInput value={word} 
              onChange={(e) => setWord(e.target.value)}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Meaning</IonLabel>
            <IonInput value={meaning}
            onChange={(e) => setMeaning(e.target.value)}></IonInput>
        </IonItem>

        </IonList>
        </form>

    <IonButton expand="block" fill="solid" class="save-button" type="submit">Save</IonButton>
    
    </IonContent>
  );
}; 
