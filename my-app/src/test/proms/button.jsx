function Button(props) {
  const { click } = props;
  return (
    <div>
      <button onClick={() => click()}>klik saya</button>
      {/* fungsi () => agar si alert hanya muncul sekali saat di klik tombolnya */}
    </div>
  );
}

export default Button;
