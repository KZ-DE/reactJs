function Button(self) {
  // selain menggunakan self.clik() juga bisa menggunakan seperti di bawah yaitu mendecklarasikan dahulu
  // const { click } = self;
  return (
    <div>
      <button onClick={() => self.click()}>klik saya</button>
      {/* fungsi () => agar si alert hanya muncul sekali saat di klik tombolnya */}
    </div>
  );
}

export default Button;
