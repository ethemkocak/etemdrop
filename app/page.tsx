import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
export default function Home() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Cases />
      <Footer />
    </div>
  );
}
