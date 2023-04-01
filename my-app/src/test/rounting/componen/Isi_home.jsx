// use navigate di gunakan untuk perpindah-pindah halaman
import { useNavigate } from "react-router-dom";

export const IsiHome = () => {
  // navigate abaut
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page Rout</h1>
      <button onClick={() => navigate("/Abaut")}>
        Klik saya untuk pindah halaman
      </button>
    </div>
  );
};
