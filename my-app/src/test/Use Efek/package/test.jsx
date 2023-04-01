// cara import variabel menggunakan nama objek
import { Test_val } from "./Tambah";

export function Test123() {
  let { getangka, setangka } = Test_val();
  return console.log(getangka);
}
