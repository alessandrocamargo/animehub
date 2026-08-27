function AnimeCard({ anime }) {
    return (
        <div className="bg-slate-900 text-orange-400 rounded-lg overflow-hidden py-4 px-4">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
            <h3 className="px-4 pt-4 font-bold truncate text-center">{anime.title}</h3>
            <p className="text-orange-400 font-semibold text-center">{anime.score}</p>
        </div>
    )
}
export default AnimeCard