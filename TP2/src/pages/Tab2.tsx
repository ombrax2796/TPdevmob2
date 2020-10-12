import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle,IonImg, IonToolbar, IonCard, IonLabel, IonInput } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">Arthur</IonTitle>
        <IonImg>PHOTO ICI</IonImg>
        <IonInput>Apport : €</IonInput>
        <IonInput>Taux emprunt : %</IonInput>
        <IonInput>Taux assurance :%</IonInput>
        <IonInput>Durée de l’emprunt :</IonInput>
        <IonInput>Frais de notaire :%</IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
