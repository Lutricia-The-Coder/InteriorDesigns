
import Navbar from "./Navbar";
import "../index.css";


type Props = {
  onAdd: () => void;
  search: string;
  setSearch: (value: string) => void;
  onBookmarks: () => void;
  onHome: () => void;
};


export default function Hero({ onAdd,search,setSearch,onBookmarks,onHome}: Props) {
    return (

        <section className="hero">

            <Navbar
  search={search}
  setSearch={setSearch}
  onBookmarks={onBookmarks}
  onHome={onHome}
/>

            <div className="overlay">

                <h1>
                    Save Your Favorite Links/Website
                </h1>
  
                <p>
                    Never lose amazing interior designs inspo
                    </p>

                <button onClick={onAdd}>
                    Add Link/Bookmark
                </button>

            </div>

        </section>

    );
}