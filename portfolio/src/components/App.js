import Header from './Header';

const App = () => {

  // probably do this better in future (use/add class)
  document.querySelector('body').style.margin = 0;

  return (
    <div>
      <Header />
      <main>
        (everything except footer can go here)
      </main>
    </div>
  )
}

export default App;