
function Navbar(){

    return(
        <nav className="navbar">
            <div className="sitename">
                <a href="/">Codveda</a>
            </div>
            <ul>
                <li className="active"><a href="/home">Home</a></li>
                <li><a href="/platform">Platform</a></li>
                <li><a href="/solution">Solution</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact us">Contact Us</a></li>
            </ul>
            
        </nav>
    )

}

export default Navbar