import Apresentacao from "./Apresentacao";
import Button from "./Button";

import "./global.css"


function App() {
 return(
  <div id="app"> 
     <Apresentacao/>
     <Button tipo="primary">Primary</Button>
     <Button tipo="danger">Danger</Button>
     <Button tipo="danger" disabled="true" >Disabled d</Button>
     <Button tipo="primary" disabled="true" >Disabled p</Button>
  </div>
 

  );
}

export default App;
