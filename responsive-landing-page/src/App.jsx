import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Pricing from './Pages/Pricing';
import Platform from './Pages/Platform';
import Solution from './Pages/Solution'

function App() {
  
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break

      case "/platform":
        component = <Platform />
      break
      case "/solution":
        component = <Solution />
        break
        case "/pricing":
          component = <Pricing />

      break;
      default:
        component = <Home />
  }

  return (
    <>
    <Navbar/>
    {component}
    </>
    
  );
}

export default App
