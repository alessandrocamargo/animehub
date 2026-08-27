import './index.css'
import { getTopAnime, getCurrentSeason } from './services/jikan'
import { useFetch } from './hooks/useFetch'
import { useCallback } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimeGrid from './components/AnimeGrid/AnimeGrid'


function App() {
  const fetchFn = useCallback(() => getTopAnime(), [])
  const fetchPopularFn = useCallback(() => getTopAnime('bypopularity'), [])
  const { data: topAnimeData, loading: topAnimeLoading, error: topAnimeError, fetchData:fetchTopAnime } = useFetch(fetchFn)
  const { data: popularAnimeData, loading: popularAnimeLoading, error: popularAnimeError, fetchData:fetchPopularAnime } = useFetch(fetchPopularFn)
  const fetchCs = useCallback(() => getCurrentSeason(), [])
  const {data: currentSeasonData, loading: currentSeasonLoading, error: currentSeasonError, fetchData: fetchCurrentSeason} = useFetch(fetchCs)
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className='px-4 py-8'>
          <h2 className='font-bold text-xl text-orange-500 text-center'>Mais Bem Avaliados</h2>
          {topAnimeLoading && <p>Loading...</p>}
          {topAnimeError && (
            <div>
              <p>Não foi possível carregar os animes.</p>
              <button onClick={fetchTopAnime}>Tentar novamente</button>
            </div>
          )}
          {!topAnimeLoading && !topAnimeError && <AnimeGrid animes={topAnimeData} />}
        </section>
        
        <section className='px-4 py-8'>
          <h2 className='font-bold text-xl text-orange-500 text-center'>Mais Populares</h2>
          {popularAnimeLoading && <p>Loading...</p>}
          {popularAnimeError && (
            <div>
              <p>Não foi possível carregar os animes populares.</p>
              <button onClick={fetchPopularAnime}>Tentar novamente</button>
            </div>
          )}
          {!popularAnimeLoading && !popularAnimeError && <AnimeGrid animes={popularAnimeData} />}
        </section>

        <section className='px-4 py-8'>
          <h2 className='font-bold text-xl text-orange-500 text-center'>Temporada Atual</h2>
          {currentSeasonLoading && <p>Loading...</p>}
          {currentSeasonError && (
            <div>
              <p>Não foi possível carregar os animes.</p>
              <button onClick={fetchCurrentSeason}>Tentar novamente</button>
            </div>
          )}
          {!currentSeasonLoading && !currentSeasonError && <AnimeGrid animes={currentSeasonData} />}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
