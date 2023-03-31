import "./App.css";
// import Test from "./test/template dasar/Test";
import Nav from "./test/proms/navbar";
import Button from "./test/proms/button";
import Footer from "./test/proms/footer";
import { Klik, Test } from "./test/proms/klik";

// const Klik = () => {
//   return alert("hello word");
// };

function App() {
  // progam akan di ketk di dalam fungsi app
  const navText = "bejo makmur";

  // const Clicked = () => {
  //   return alert("tombol di klik");
  // };

  const paragraf = () => {
    return (
      <div>
        <i>Ini adalah paragraf yang ada di footer</i>
        <marquee>Mantap bang</marquee>
      </div>
    );
  };
  return (
    <div>
      {/* wajib menggunakan tag html nama fungsi untuk menampilkannya di web*/}
      <Nav test={navText} navedn="Contak" />
      <Button click={() => Klik()} />
      <Footer paragraf={paragraf} />
    </div>
  );
}

export default App;
