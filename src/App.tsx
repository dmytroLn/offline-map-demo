import { IonApp, IonButton, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import "mapbox-gl/dist/mapbox-gl.css";

setupIonicReact();
import { useEffect } from "react";

import { OfflineMap } from "offline-map";

const App: React.FC = () => {
  useEffect(() => {
    const initializeMap = async () => {
      await OfflineMap.initialize({
        accessToken:
          "pk.eyJ1IjoiZG15dHJvMTIzNDEyMyIsImEiOiJjbHhrN3RkNGgwMGJ4MmtyM2p1NTZtcTI4In0.C98LiKnQTnerkBbniJaxRw",
      });
      await OfflineMap.showMap({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [30.5238, 50.45466],
        zoom: 12,
      });
    };

    initializeMap();
  }, []);
  return (
    <IonApp>
      <div style={{ width: "30%", height: "30vh" }}>
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </IonApp>
  );
};

export default App;
