// merupakan file yang akan di gunakan sebagai tempattesting src
// file ini berupa fungsi componen

function Test(self) {
  // progam akan di ketk di dalam fungsi Test
  return (
    <div>
      <h1>Hallo tuan {self.name}</h1> {/* tidak menggunakan dolar  */}
    </div>
  );
}

export default Test;
