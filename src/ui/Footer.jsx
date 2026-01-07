export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "120px",
        padding: "40px 24px",
        textAlign: "center",
        opacity: 0.6,
        fontSize: "14px",
        letterSpacing: "0.12em",
      }}
    >
      © {new Date().getFullYear()} Tribunal of Stories · Habib Ur Rehman
    </footer>
  )
}
