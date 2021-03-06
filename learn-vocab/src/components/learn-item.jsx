import React from 'react';
import { IonContent, IonItem, IonLabel, IonIcon, IonPopover, IonImg,IonRow, IonCol } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import '../pages/learn.css';
import '../pages/global.css';
import app, { wordsRef } from "../firebase-config"; 

export default function LearnItem({ word, reload }) {
    async function moveToRevise(e) {  
        
        var id = word.id;
        var url = wordsRef.toString() + "/" + id + "/location.json";
        // vsetko sa zmeni na location
        var data = "revise";

        var response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        reload();
    }; 

    async function deleteWord() {
        var id = word.id;
        const url = wordsRef.toString() + "/" + id + ".json";
        const response = await fetch(url, {
            method: "DELETE"
        });
        console.log(response);

        reload();

       
    }

    
    return (
        <IonRow class="element-row">
            
            <IonCol class="element-column">
                <div>{word.translation}</div>
            </IonCol>
            <IonCol class="element-column">
            {word.image &&<IonImg src={word.image} class="row-image"/>}
                <div>{word.meaning}</div>

            </IonCol>



            <IonCol size="1.5">
                <IonIcon icon={ellipsisVertical} id={word.id + "nested-button"} class="element-column-dropdown" />
                <IonPopover trigger={word.id + "nested-button"} dismissOnSelect={true}>
                    <IonContent>
                        <ion-list>
                            <IonItem button={true} detail={false} onClick={ () => moveToRevise()}  >
                                <IonLabel>Move to Revise</IonLabel>
                            </IonItem>
                            <IonItem button={true} detail={false} routerLink={"/update/"+word.id}> 
                                <IonLabel>Edit</IonLabel>
                            </IonItem>
                            <IonItem button={true} detail={false}>
                                <IonLabel style={{ color: "red" }} onClick={ () => deleteWord() }>Delete</IonLabel>
                            </IonItem>
                        </ion-list>
                    </IonContent>
                </IonPopover>

            </IonCol>


        </IonRow>
    )

}