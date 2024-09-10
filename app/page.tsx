import Cases from "./components/Cases";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
export const BACKEND_URL = "https://etemdrop-express.vercel.app/api";
export default function Home() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Cases />
    </div>
  );
}
