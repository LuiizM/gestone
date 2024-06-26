import React from "react";
import {
  IonContent,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonText,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonButtons, 
  IonBackButton, 
  IonTitle,
  IonLabel,
  
} from "@ionic/react";
import './Login.css';
import { checkmark } from 'ionicons/icons';

const Login: React.FC = () => {
  return (
    <>
    <IonContent>
        <IonGrid fixed={true} className="ion-width">
          <IonRow class="ion-justify-content-center">
            <IonCol sizeXl="5">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center" color={"success"}>FAZER LOGIN</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonInput label='Login:' placeholder='Email ou CPF' clearInput labelPlacement="floating" fill="solid"></IonInput>

                  <IonInput label='Senha:' placeholder='Senha' type='password' clearInput labelPlacement='floating' fill='solid'></IonInput>

                  <IonButton expand='block' color={'success'} className="ion-margin-top">
                    <IonText> <h2>Entrar</h2> </IonText>
                  </IonButton>
                
                  <div className="ion-text-center">
                    <IonText><a href="/Home" >Esqueçeu a senha </a></IonText>
                  </div>       
                             

                </IonCardContent>
                
              </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>
    </IonContent>
    </>
  );
};

export default Login;