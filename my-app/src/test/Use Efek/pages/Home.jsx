import { useEffect, useState } from "react";
import { Button, Button2 } from "../package/Button";
// import { Testing } from "./use efek external";

function Home() {
  const nilai = 0;
  const [setNilai, getNilai] = useState(nilai);
  // kiri geter kanan setter (untuk getter sudah menjai sungsi)

  const [getnama, setnama] = useState("Bejo");
  useEffect(() => {
    // bisa begini
    // if (setNilai >= 2) {
    //   setnama("ucup");
    // } else {
    //   setnama("bejo");
    // }

    // juga bisa begini
    if (setNilai === 2) {
      setnama("Sudrun");
    }
  }, [nilai]);
  // yang berada di dalam kurung kotak merupakan parameter, jadi setnama akan berubah jadi sudrun jika parameternya ke triger

  return (
    <>
      {/* <Testing /> */}
      <h2>nama: {getnama}</h2>
      <h1>Nilai anda sebesar : {setNilai} </h1>

      {/* di gunakan untuk hanya mengubah sekali saja */}
      {/* <Button click={() => getNilai(1)} /> */}

      {/* sedangkan untuk menmabah lagi dari nilai sebelumnya maka menggunakan tanda kurung lagi*/}
      <Button
        click={() => getNilai((nilaiSebelumnya) => nilaiSebelumnya + 1)}
        // setiap di klik akan menambahkan 1 karena menggunakan nilai sebelumya atau colback
      />
      <Button2
        click2={() => getNilai((nilaiSebelumnya) => nilaiSebelumnya - 1)}
      />
    </>
  );
}

export default Home;
