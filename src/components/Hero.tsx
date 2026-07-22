
import Navbar from "./Navbar";
import hero from "../assets/hero.png"
import "../index.css";

type Props = {
    onAdd: () => void;
};

export default function Hero({ onAdd }: Props) {

    return (

        <section className="hero"  style={{ backgroundImage: `url(${hero})` }}>

            <Navbar />

            <div className="overlay">

                <h1>
                    Save Your Favorite Links
                </h1>
  
                <p>
                    Never lose amazing interior designs inspo
                    </p>

                <button onClick={onAdd}>
                    Add Link
                </button>

            </div>

        </section>

    );
}