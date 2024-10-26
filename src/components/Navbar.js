import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Maravilha Development
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /anasayfa
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /projeler
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://github.com/preetsuthar17/discord-bot-website-template"
                target="_blank"
              >
                /hakkımda
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
