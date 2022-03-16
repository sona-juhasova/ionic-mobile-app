import React from 'react';
import { IonContent, IonItem, IonLabel, IonIcon, IonPopover } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import '../pages/learn.css';
import '../pages/global.css';
import app, { wordsRef } from "../firebase-config";

export default function LearnItem({word}) {
    async function moveToRevise(e)
    {
        //https://vocabulary-ionic-app-default-rtdb.firebaseio.com/words/-MyH4FcDsI18txRdtcHB
        //TODO: change locaiton to revise
        var id = word.id;
        var url = wordsRef.toString() + id + ".json";
        var data = {location: "revise"};
        var response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data)
          });
    };
    return ( 
            <ion-row>
                <ion-col class="element-column">
                    <div>{word.translation}</div>
                </ion-col>
                <ion-col class="element-column">
                    <div>{word.meaning}</div>
                </ion-col>

                <ion-col size="1.5">
                    <IonIcon icon={ellipsisVertical} id="nested-button" class="element-column-dropdown" />
                    <IonPopover trigger="nested-button" dismissOnSelect={true}>
                        <IonContent>
                            <ion-list>
                                <IonItem button={true} detail={false} >
                                    <IonLabel>Move to Revise</IonLabel>
                                </IonItem>
                                <IonItem button={true} detail={false}>
                                    <IonLabel>Edit</IonLabel>
                                </IonItem>
                                <IonItem button={true} detail={false}>
                                    <IonLabel style={{ color: "red" }}>Delete</IonLabel>
                                </IonItem>
                            </ion-list>
                        </IonContent>
                    </IonPopover>

                </ion-col>


            </ion-row> 
    )

}