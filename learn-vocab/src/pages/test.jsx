import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import app, { wordsRef } from "../firebase-config";
import { Toast } from "@capacitor/toast";
import './test.css';
import './global.css';
import AddForm from '../components/add-form';

export default function Test(reload) {
  
  const [selectedWord, setWord] = useState("");
  const [filledWord, setFilledWord] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");

  async function getRandomWord() {
    const response = await fetch(wordsRef.toString() + ".json");
    const data = await response.json();
    // map object into an array with objects
    const wordsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    let index = Math.floor(Math.random() * wordsArray.length);
    let randomWord = wordsArray[index];
    return randomWord;
    
  }
  async function selectNewWord(e)
  {
    

    if(selectedWord != null && selectedWord != "")
    {
     
      //do the check
      if(selectedWord.translation == filledWord)
      {
        //success 
      
        setCheckAnswer("Correct, the answer is " + selectedWord.translation);
      }else{
        //fail 

        setCheckAnswer("Incorrect, the answer is " + selectedWord.translation);

      }
    }
    setFilledWord("");
    let randomWord = await getRandomWord();  
    setWord(randomWord);  
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="page-title">Test</IonTitle>

          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="test">
            <IonLabel className="question">translate: {selectedWord.meaning}</IonLabel>

            <IonInput className='test-input' placeholder='Type in translation' value={filledWord} onIonChange={(e)=>{setFilledWord(e.target.value);}}></IonInput>
            <IonLabel className="question">{checkAnswer}</IonLabel>

          </div>

          <IonButton expand="block" fill="solid" class="save-button" type="button" onClick={(e) => { selectNewWord(e); }}>Check</IonButton>

        </IonContent>
      </IonContent>
    </IonPage>
  );
}; 
