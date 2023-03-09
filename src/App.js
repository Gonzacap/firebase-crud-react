import './firebase';

// Components
import Links from './components/Links';

function App() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Links App</span>
      </nav>
      <main className="container p-4">
        <div className='row'>
          <Links />
        </div>
      </main>
      <footer class="footer page-footer font-small blue pt-4 position-bottom" >
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://github.com/Gonzacap//"> Gonza Lopez</a>
        </div>
      </footer>
    </>
  );
}

export default App;
