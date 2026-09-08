export default function HighlightsRow() {
  return (
    <div className="highlights-row-section">
      <div className="container">
        <div className="highlights-row-grid">
          <div className="highlights-metric-item">
            <div className="metric-val">31+</div>
            <div className="metric-lbl">PUBLIC REPOSITORIES</div>
          </div>
          <div className="highlights-metric-item">
            <div className="metric-val">5+</div>
            <div className="metric-lbl">FEATURED BUILDS</div>
          </div>
          <div className="highlights-metric-item">
            <div className="metric-val text-metric">COMPETITIONS</div>
            <div className="metric-lbl">& TECH EVENTS</div>
          </div>
          <div className="highlights-metric-item">
            <div className="metric-val">4</div>
            <div className="metric-lbl">TECHNICAL DOMAINS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
