import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';

const App = () => {

  // probably do this better in future (use/add class)
  document.querySelector('body').style.margin = 0;

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App;