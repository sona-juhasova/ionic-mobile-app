import React from 'react';
import { IonContent, IonItem, IonLabel, IonIcon, IonPopover } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import '../pages/learn.css';
import '../pages/global.css';

export default function LearnItem() {
    return ( 
            <ion-row>
                <ion-col class="element-column">
                    <div>Pencil</div>
                </ion-col>
                <ion-col class="element-column">
                    <div>Ceruzka</div>
                </ion-col>

                <ion-col size="1.5">
                    <IonIcon icon={ellipsisVertical} id="nested-button" class="element-column-dropdown" />
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
                                    <IonLabel style={{ color: "red" }}>Delete</IonLabel>
                                </IonItem>
                            </ion-list>
                        </IonContent>
                    </IonPopover>

                </ion-col>


            </ion-row> 
    )

}