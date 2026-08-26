import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import AnimeGrid from './components/AnimeGrid/AnimeGrid'

function App() {
  const [animes, setAnimes] = useState([])

  useEffect(() =>{
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(response => response.json())
      .then(data => {
        setAnimes(data.data)
      })
  },[])

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AnimeGrid animes={animes} />
      </main>
      <Footer />
    </>
  )
}

export default App
