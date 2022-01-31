import './App.css';
import Nav from './components/Layout/Nav'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
          <Home />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
