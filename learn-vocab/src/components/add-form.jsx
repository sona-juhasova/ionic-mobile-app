import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonIcon, IonImg } from '@ionic/react';
import { Camera, CameraResultType } from "@capacitor/camera";
import { camera } from "ionicons/icons";
import '../pages/add.css';
import '../pages/global.css';

export default function AddForm({ saveNew }) { 
  const [translation, setTranslation] = useState("");
  const [meaning, setMeaning] = useState("");
  const [image, setImage] = useState("");

  
  async function handleSubmit(e) {
    e.preventDefault();

    saveNew({ translation, meaning, location:"learn", image: image  });
    setTranslation("");
    setMeaning("");
    setImage("");
    
  };


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

          <IonItem onClick={takePicture} lines="full" style={{ padding: "30px 0 0 0" }} >
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem>
            {image && <IonImg className="ion-padding" src={image} onClick={takePicture} class="uploaded-img"/>}


        </IonList>
      </form>

      <IonButton expand="block" fill="solid" class="save-button" type="button" onClick={(e) => { handleSubmit(e); }}>Save</IonButton>
    </IonContent>
  );
}; 
