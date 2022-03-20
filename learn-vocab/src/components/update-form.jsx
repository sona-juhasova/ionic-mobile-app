import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonIcon, IonImg,useIonViewWillEnter, useIonRouter} from '@ionic/react';
import { Camera, CameraResultType } from "@capacitor/camera";
import { camera, reload } from "ionicons/icons";
import '../pages/add.css';
import '../pages/global.css';
import app, { wordsRef } from "../firebase-config";
import { useHistory } from "react-router-dom";


export default function UpdateForm({ id,saveUpdated, }) { 
  const [translation, setTranslation] = useState("");
  const [meaning, setMeaning] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

 const router = useIonRouter();
  
  
  async function handleUpdate(e) {
    e.preventDefault(); 


    await saveUpdated({ translation, meaning, location, image: image  });

    router.goBack();
  
    
  };
  async function  loadWord(id) {
    var url = wordsRef.toString() + "/" + id + ".json";

    var response = await fetch(url, {
      method: "GET",
    });
    if (response.ok) {
      var responseJson =await response.json();
            console.log(responseJson);
      var word = responseJson;
      setTranslation(word.translation);
      setMeaning(word.meaning);
      setImage(word.image);
      setLocation(word.location);
      
    }
  };
  useIonViewWillEnter(() => {
    loadWord(id);
  });
  

  

  async function takePicture() {
    const imageOptions = {
        quality: 80,
        width: 500,
        allowEditing: true,
        resultType: CameraResultType.DataUrl
    };
    const image = await Camera.getPhoto(imageOptions);
    const imageUrl = image.dataUrl;
    setImage(imageUrl);
}

  return (
    <IonContent>
      <form>
        <IonList lines="full" class="ion-no-margin">
          <IonItem>
            <IonLabel position="floating">New Word</IonLabel>
            <IonInput value={translation}
              onIonChange={(e) => setTranslation(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Meaning</IonLabel>
            <IonInput value={meaning}
              onIonChange={(e) => setMeaning(e.target.value)}></IonInput>
          </IonItem>

          <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem>
            {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />}


        </IonList>
      </form>

      <IonButton expand="block" fill="solid" class="save-button" type="button" onClick={(e) => { handleUpdate(e); }}>Save</IonButton>
    </IonContent>
  );
}; 
