import Button from "./Button"


export default function Header() {

    return (<>
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 px-12">
            <nav className="w-1/3">
                <ul className="flex space-x-4">
                    <li><a href="/">Vitrine</a></li>
                    <li><a href="/marketplace">Market</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/panier">Panier</a></li>
                </ul>
            </nav>
            <div className="flex-1 flex items-center justify-center space-x-4 text-center">
                <img src="" className="bg-red-600 w-12 h-12 rounded-full" />
                <h1>Mon site</h1>   
            </div>
            <div className="w-1/3 flex items-center justify-end space-x-4">
                <a href="">Talk to sales</a>
                <Button label="Sign up" />
                <Button label="Login" backgroundColor="" />
            </div>
        </div>
    </>)
}