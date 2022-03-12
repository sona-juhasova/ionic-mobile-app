import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonPopover, IonButton, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';  
import './learn.css';
import './global.css';

export default function learn() {
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
          <ion-row>
            <ion-col class="element-column">
              <div>Pencil</div>
            </ion-col>
            <ion-col class="element-column">
              <div>Ceruzka</div>
            </ion-col> 

            <ion-col size="1.5"> 
               <IonIcon icon={ellipsisVertical} id="nested-button" class="element-column-dropdown"/>
                <IonPopover trigger="nested-button" dismissOnSelect={true}>
                  <IonContent>
                    <ion-list>
                      <IonItem button={true} detail={false}>
                        <IonLabel>Move to Revise</IonLabel>
                      </IonItem>
                      <IonItem button={true} detail={false}>
                        <IonLabel>Edit</IonLabel>
                      </IonItem>
                      <IonItem button={true} detail={false}>
                        <IonLabel style={{color: "red"}}>Delete</IonLabel>
                      </IonItem>
                      </ion-list>
        </IonContent>
      </IonPopover>
                    
            </ion-col> 


          </ion-row>
        </ion-grid>


      </IonContent>
    </IonPage>
  );
};
 
