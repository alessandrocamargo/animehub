function Footer(){
    return (
        <footer className="bg-slate-900 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="font-bold text-orange-400">© {new Date().getFullYear()} AnimeHub</p>
            </div>
        </footer>
    )
}

export default Footer;