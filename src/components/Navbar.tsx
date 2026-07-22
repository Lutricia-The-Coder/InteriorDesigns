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

      

      <ul>
     
  <li onClick={onBookmarks}>Bookmarks</li>

      </ul>
    </nav>
  );
}