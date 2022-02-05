import react from 'react'
import Header from './components/Header'
import { AnimeProvider } from './common/context/Anime'
import AnimeSection from './components/AnimeSection'
import 'antd/dist/antd.css';
function App() {
 
  return (
    <AnimeProvider>
    <Header/>
    <AnimeSection/>
    </AnimeProvider>
  )
}

export default App
