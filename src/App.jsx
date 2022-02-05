import { AnimeProvider } from './common/context/Anime'
import 'antd/dist/antd.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Anime from './pages/AnimePage';
import Header from './components/Header';
import AnimePage from './pages/AnimePage';
import Footer from './components/Footer';
function App() {
 
  return (
    <AnimeProvider>
      <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
          
        <Route exact path='/anime/:name' element={<AnimePage/>} />

      </Routes>
      <Footer/>
    </Router>
    </AnimeProvider>
  )
}

export default App
