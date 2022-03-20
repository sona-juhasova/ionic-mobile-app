import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonViewWillEnter, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import app, { wordsRef } from "../firebase-config";
import { Toast } from "@capacitor/toast";
import './add.css';
import './global.css';
import UpdateForm from '../components/update-form';
import { useHistory, useParams } from 'react-router-dom';

export default function Update() {
 
  const { id} = useParams();
  // app js?
  const saveUpdated = async (word) => { 
    var url = wordsRef.toString() + "/" + id + ".json";

    var response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(word)
    });
    if (response.ok) {


      await Toast.show({
        text: "This word was updated!"
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
          <IonTitle>Update</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="page-title">Update</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* new word form component */}
        <UpdateForm id={id} saveUpdated={saveUpdated} />

      </IonContent>
    </IonPage>
  );
}; 
