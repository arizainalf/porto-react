import { useState, useEffect, use } from "react"

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });
    
    return (
        <div className="navbar flex items-center justify-between py-7">
            <div className="hover:scale-105 transition-transform duration-300 logo text-3xl font-bold bg-white text-black md:bg-transparent md:text-white p-1 rounded-lg">
                <h1>Portofolio</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-5 gap-3 md:static fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 w-full max-w-md md:max-w-none md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none transition-all duration-300 ease-in-out ${active ? 'top-0 opacity-100 justify-center z-50' : '-top-10 opacity-0 justify-end '}`}>
                <li className="hover:scale-105 transition-transform duration-300"><a className="sm:text-lg text-base font-medium" href="#beranda">Beranda</a></li>
                <li className="hover:scale-105 transition-transform duration-300"><a className="sm:text-lg text-base font-medium" href="#tentang">Tentang</a></li>
                <li className="hover:scale-105 transition-transform duration-300"><a className="sm:text-lg text-base font-medium" href="#skill">Skill</a></li>
                <li className="hover:scale-105 transition-transform duration-300"><a className="sm:text-lg text-base font-medium" href="#project">Project</a></li>
                <li className="hover:scale-105 transition-transform duration-300"><a className="sm:text-lg text-base font-medium" href="#kontak">Kontak</a></li>
            </ul>
        </div>
    )
}

export default Navbar