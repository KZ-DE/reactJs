import Navbar from "./navbar";
import { Button, Button2 } from "./Button";

// untuk menggunakan state harus mengimpor usestate di file headingnya
// state adalah tempat penampungan data sementara
// sedangkana tipe datanya apapun aaray, objek, dll
import { useState } from "react";

function Main() {
  // inisialisasi variabel ke dalama class usestate
  const [get_navbar, Set_navbar] = useState("contak");
  const [getPage, setPage] = useState("test");

  //   fungsi set nama
  const Navbar_vallue = () => {
    Set_navbar("Galery");
  };

  function Page() {
    setPage("Hallo");
  }
  return (
    <div>
      <Navbar navbar={get_navbar} geterpage={getPage} />
      <Button clik={() => Navbar_vallue()} />
      <Button2 setPage={() => Page()} />
    </div>
  );
}

export default Main;
