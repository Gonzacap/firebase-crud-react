import './firebase';

// Components
import Links from './components/Links';

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Links App</span>
      </nav>
      <main className="container p-4">
        <div className='row'>
          <Links />
        </div>
      </main>
      <footer className="footer page-footer font-small blue pt-4" >
        <div className="footer-copyright text-center py-3 bg-light">© 2020 Copyright:
        <a href="https://github.com/Gonzacap//"> Gonza Lopez</a>
        </div>
      </footer>
    </>
  );
}

export default App;
