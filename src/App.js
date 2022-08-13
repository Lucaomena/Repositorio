import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar} from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Bootcamp } from './Components/Bootcamp';
import { Certificados } from './Components/Certificados';
import { Message } from './Components/Message';
import { Footer } from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Bootcamp />
      <Certificados />
      <Message />
      <Footer />
    
    </div>
  );
}

export default App;
