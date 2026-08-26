import AnimeCard from "../AnimeCard/AnimeCard"
function AnimeGrid({animes}){
    return(
        <div>
            {
                animes.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime}/>
                ))
            }
        </div>
    )
}

export default AnimeGrid