import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput,IonButton, IonList } from '@ionic/react';
import app, {wordsRef} from "../firebase-config";
import { Toast } from "@capacitor/toast";
import './add.css';
import './global.css';
import AddForm from '../components/add-form';

export default function Add() { 
 
// app js?
  const saveNew =async (word) => {
    debugger;
    var url = wordsRef.toString()+".json";

    var response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(word)
  });
  if (response.ok) {
      

      await Toast.show({
          text: "New word created!"
      });
  } else {
      await Toast.show({
          text: "Error. Try again!"
      });
  }

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
