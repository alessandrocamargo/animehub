import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimeGrid from './components/AnimeGrid/AnimeGrid'
import { getTopAnime } from './services/jikan'
import { useFetch } from './hooks/useFetch'
import { useCallback } from 'react'

function App() {
  const fetchFn = useCallback(() => getTopAnime(), [])
  const fetchPopularFn = useCallback(() => getTopAnime('bypopularity'), [])
  const { data: topAnimeData, loading: topAnimeLoading, error: topAnimeError, fetchData: fetchTopAnime } = useFetch(fetchFn)
  const { data: popularAnimeData, loading: popularAnimeLoading, error: popularAnimeError, fetchData: fetchPopularAnime } = useFetch(fetchPopularFn)
 

  

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2>Mais Bem Avaliados</h2>
        {topAnimeLoading && <p>Loading...</p>}
        {topAnimeError && (
          <div>
            <p>Não foi possível carregar os animes.</p>
            <button onClick={fetchTopAnime}>Tentar novamente</button>
          </div>
        )}
        {!topAnimeLoading && !topAnimeError && <AnimeGrid animes={topAnimeData} />}
        <h2>Mais Populares</h2>
        {popularAnimeLoading && <p>Loading...</p>}
        {popularAnimeError && (
          <div>
            <p>Não foi possível carregar os animes populares.</p>
            <button onClick={fetchPopularAnime}>Tentar novamente</button>
          </div>
        )}
        {!popularAnimeLoading && !popularAnimeError && <AnimeGrid animes={popularAnimeData} />}
      </main>
      <Footer />
    </>
  )
}

export default App
