import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroHeader />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
