import AnimeCard from "../AnimeCard/AnimeCard"
function AnimeGrid({animes}){
    return(
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {
                animes.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime}/>
                ))
            }
        </div>
    )
}

export default AnimeGrid