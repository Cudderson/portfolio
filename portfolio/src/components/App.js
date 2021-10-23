import Header from './Header';
import Hero from './Hero';

const App = () => {

  // probably do this better in future (use/add class)
  document.querySelector('body').style.margin = 0;

  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;