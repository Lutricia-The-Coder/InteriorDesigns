import "../index.css";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  onBookmarks: () => void;
  onHome: () => void;
};

export default function Navbar({ search, setSearch,onBookmarks,onHome}: Props) {
  return (
    <nav className="navbar">
      <div className="logo">interior</div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search from saved links..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
       <li onClick={onHome}>Home</li>
  <li onClick={onBookmarks}>Bookmarks</li>
  <li>About</li>
      </ul>
    </nav>
  );
}