import { AnimeProvider } from './common/context/Anime'
import 'antd/dist/antd.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Anime from './pages/AnimePage';
import AnimePage from './pages/AnimePage';
function App() {
 
  return (
    <AnimeProvider>
      <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
          
        <Route exact path='/anime/:name' element={<AnimePage/>} />

      </Routes>
    </Router>
    </AnimeProvider>
  )
}

export default App
