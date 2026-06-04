export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 sticky top-0 z-50">
            <div className="container  flex justify-center items-center">
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    <li><a href="#tech" className="hover:text-gray-400">Tech</a></li>
                </ul>
            </div>
        </nav>
    );
}