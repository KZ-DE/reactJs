import { useState } from "react";

import { Button, Button2 } from "../package/Button";
import { Test123 } from "../package/test";

function HomeIf() {
  //   const nilai = 0;
  const [getNilai, setNilai] = useState(0);

  const KurangNilai = () => {
    if (getNilai <= 0) {
      return;
    } else {
      return setNilai((nilaiSebelumnya) => nilaiSebelumnya - 1);
    }
  };

  return (
    <>
      <Test123 />
      <h1>Nilai anda sebesar : {getNilai} </h1>
      <Button
        click={() => setNilai((nilaiSebelumnya) => nilaiSebelumnya + 1)}
      />
      <Button2 click2={() => KurangNilai()} />
    </>
  );
}

export default HomeIf;
