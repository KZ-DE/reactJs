// cara export variabel menggunakan nama objek
import { useState } from "react";

export const Test_val = () => {
  const [getangka, setangka] = useState("Test Bro");
  return { getangka: getangka, setangka: setangka };
  // boleh berbeda nama
  // contoh hello: getangka
};
