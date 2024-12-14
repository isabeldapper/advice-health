import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header'
import Footer from './components/footer';
import TabelaAvisos from './components/notice-board';

function App() {

  return (
    <div className='d-flex flex-column min-vh-100 justify-content-between'>
      <Header />
      <TabelaAvisos />
      <Footer />
    </div>
  )
}

export default App
