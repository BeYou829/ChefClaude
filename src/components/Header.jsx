import { images } from "../assets/images";
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <img src={images.cheflogo} alt="Hola" />
      <h1>Chef Claude</h1>
    </header>
  );
}
