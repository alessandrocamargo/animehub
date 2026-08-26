function AnimeCard({ anime }) {
    return (
        <div>
            <img src={anime.images.jpg.small_image_url} alt={anime.title} />
            <h3>{anime.title}</h3>
            <p>{anime.score}</p>
        </div>
    )
}

export default AnimeCard