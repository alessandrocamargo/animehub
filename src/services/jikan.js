export async function getTopAnime(filter = '') {
    const url = filter ? `https://api.jikan.moe/v4/top/anime?filter=${filter}` : 'https://api.jikan.moe/v4/top/anime';
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Falha em carregar os animes');
    }
    return data.data;
}