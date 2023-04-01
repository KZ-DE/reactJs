import { useEffect, useState } from "react";

export let Testing = () => {
  const [warna, setwarna] = useState("hijau");
  useEffect(() => {
    setwarna("Gren");
  }, [warna === "Hijau"]);
  return console.log(warna);
};
