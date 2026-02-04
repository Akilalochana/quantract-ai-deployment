import "./page.css";

export default function ApplyPage() {
  return (
    <main>
      <section className="coming-soon-hero">
        <div className="coming-soon-hero-container">
          <div className="coming-soon-hero-content">
            <h1 className="coming-soon-hero-title">
              Coming <span className="coming-soon-hero-highlight">Soon</span>
            </h1>
            <p className="coming-soon-hero-description">
              We&apos;re working on something exciting. Applications will open soon!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}