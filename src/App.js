import './App.css';

import FirstComponent from './components/learning-exaples/FirstComponent';
import SecondComponent from './components/learning-exaples/SecondComponent';
import ThirdComponent from './components/learning-exaples/ThirdComponent';
import ForthComponent from './components/learning-exaples/ForthComponent';
import {FifthConponent} from './components/learning-exaples/FirstComponent';

function App() {
  return (
    <div className="App">
     <FirstComponent></FirstComponent>
     <SecondComponent/>
     <ThirdComponent/>
     <ForthComponent/>
     <FifthConponent/>
    </div>
  );
}

export default App;
