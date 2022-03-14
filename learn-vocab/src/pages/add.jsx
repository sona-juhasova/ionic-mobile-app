import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput,IonButton, IonList } from '@ionic/react';
import app from "../firebase-config";

import './add.css';
import './global.css';
import AddForm from '../components/add-form';

export default function Add() { 
  // const [text, setText] = useState([]);
  const word = ""; //change to state
  const meaning = ""; //change to state
  const [words, setWords] = useState([]);

// app js?
  const saveNew = (word) => {
    const saveToFirebase = app.firestore();
    saveToFirebase.collection("words").add({
     
      item: word
    });
  };

  const getWords = () => {
    const getFromFirebase = app.firestore().collection("words");
    getFromFirebase.onSnapshot((querySnapShot) => {
      const saveFirebaseWords = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseWords.push(doc.data());
      });
      setWords(saveFirebaseWords);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add new words!</IonTitle>
          </IonToolbar>
        </IonHeader>
       
    {/* Add new word form component */}
    <AddForm saveNew={saveNew}/>

      </IonContent>
    </IonPage>
  );
}; 
