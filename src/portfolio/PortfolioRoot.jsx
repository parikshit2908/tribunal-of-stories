import HeroSlider from "../components/HeroSlider"
import "./portfolio.css"

export default function PortfolioRoot() {
  return (
    <section className="home">
      <div className="home-left">
        <h1>HABIB UR<br />REHMAN</h1>
        <p>
          SCRIPTWRITER · AI VIDEO EDITOR · CONTENT WRITER · VIDEO PRODUCTION ASSISTANT
        </p>

        <div className="home-actions">
          <a className="btn primary" href="/works">View Works</a>
          <a className="btn ghost" href="/writings">Read Writings</a>
        </div>
      </div>

      <HeroSlider />
    </section>
  )
}
