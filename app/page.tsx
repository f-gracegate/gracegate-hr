import Navbar from "./components/Navbar";
import DemoForm from "./components/DemoForm";

export default function Home() {
  return (
    <main className="page">
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <Navbar />

      <section className="hero">
        <h1>
          <span className="highlight">HR Made</span> for Humans, Not
          <br />
          Just Spreadsheets
        </h1>
        <p className="subtitle">
          Transform the way you manage HR—automate tasks, nurture talent, and
          create a workplace where everyone thrives.
        </p>
        <a href="#signup" className="btn btn-dark btn-lg">Start With 15 Days Trial</a>

        <DemoForm />
      </section>

      <div className="tiles tiles-left" aria-hidden="true">
        <span className="tile t1" />
        <span className="tile t2" />
        <span className="tile t3" />
      </div>
      <div className="tiles tiles-right" aria-hidden="true">
        <span className="tile t1" />
        <span className="tile t2" />
        <span className="tile t3" />
      </div>
    </main>
  );
}
