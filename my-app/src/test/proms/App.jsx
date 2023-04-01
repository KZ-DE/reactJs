import Nav from "./navbar";
import Button from "./button";
import Footer from "./footer";
import { Test } from "./klik";

function AppProms() {
  const navText = "bejo makmur bersama sudrun";

  // const Clicked = () => {   bisa juga membuat fungsi clik di sini atau di external file
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
      <Button click={() => Test()} />
      <Footer paragraf={paragraf} />
    </div>
  );
}

export default AppProms;
