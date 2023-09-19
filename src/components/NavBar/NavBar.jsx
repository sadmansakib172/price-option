import Link from "../Link/Link";


const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];

    return (
        <nav>
            <ul className="md:flex">
                {
                    routes.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;