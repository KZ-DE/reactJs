// import { Dipencet } from "./pencet";

// pembuatan fungsi bisa di lakukan jadi 1 dengan file head atau membaut file package sendiri terus mengimportnya
export const Logbtn = () => {
  return console.log("Tombol di tekan");
};

export const Button = (self) => {
  return (
    <div>
      <button onClick={() => self.clik()}>Ubah Navigasi</button>
    </div>
  );
};

export const Button2 = (props) => {
  return (
    <div>
      <button onClick={() => props.setPage()}>Pencet</button>
    </div>
  );
};
