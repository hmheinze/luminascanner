import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Skin decoded. By Prada Beauty." },
      {
        name: "description",
        content:
          "Live facial scan, environmental calibration and a Prada Beauty makeup ritual composed for the skin you have today.",
      },
      { property: "og:title", content: "Lumina — Skin decoded." },
      {
        property: "og:description",
        content:
          "Scan. Read. Compose. A Prada Beauty ritual built for the skin you have today.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="lumina-landing">
      <style>{css}</style>

      <nav className="ll-nav">
        <span className="ll-logo">Lumina</span>
        <span className="ll-tag">Skin Intelligence × Prada Beauty</span>
      </nav>

      <main className={`ll-main ${mounted ? "in" : ""}`}>
        <div className="ll-rings" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className="ll-content">
          <p className="ll-eyebrow">
            <span>Chapter I</span>
            <span className="ll-rule" />
            <span>The Scan</span>
          </p>

          <h1 className="ll-title">
            Skin<br /><em>decoded.</em>
          </h1>

          <p className="ll-lede">
            A live facial scan across five zones, calibrated to your cycle,
            your environment and the hours ahead. Composed into a Prada Beauty
            ritual — skincare and makeup, written for the skin you have today.
          </p>

          <div className="ll-cta-row">
            <Link to="/scanner" className="ll-cta">
              <span>Begin the scan</span>
              <span className="ll-arrow">→</span>
            </Link>
          </div>

          <ul className="ll-meta">
            <li><span>01</span><span>Live scan · 5 zones</span></li>
            <li><span>02</span><span>Cycle &amp; environment overlay</span></li>
            <li><span>03</span><span>Daylight &amp; Nocturne ritual</span></li>
            <li><span>04</span><span>Shade match · save &amp; share</span></li>
          </ul>
        </div>

        <p className="ll-footer">
          Editorial concept · For demonstration. Not a medical device.
        </p>
      </main>
    </div>
  );
}

const css = `
.lumina-landing{
  position:fixed;inset:0;background:#000;color:#fff;overflow:hidden;
  font-family:'Source Sans 3','Helvetica Neue',Arial,sans-serif;
  -webkit-font-smoothing:antialiased;
}
.ll-nav{
  position:absolute;top:0;left:0;right:0;height:48px;z-index:10;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 24px;border-bottom:1px solid rgba(255,255,255,.12);
}
.ll-logo{
  font-family:'EB Garamond','Times New Roman',Georgia,serif;
  font-size:15px;letter-spacing:.35em;text-transform:uppercase;
}
.ll-tag{
  font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;
  color:rgba(255,255,255,.4);
}
.ll-main{
  position:absolute;inset:0;display:flex;flex-direction:column;
  align-items:stretch;justify-content:flex-end;padding:0 0 40px;
}
.ll-rings{
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  pointer-events:none;
}
.ll-rings span{
  position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.07);
  opacity:0;animation:llPulse 3.6s ease-in-out infinite;
}
.ll-main.in .ll-rings span{opacity:1}
.ll-rings span:nth-child(1){width:200px;height:200px}
.ll-rings span:nth-child(2){width:320px;height:320px;animation-delay:.4s}
.ll-rings span:nth-child(3){width:460px;height:460px;animation-delay:.8s}
.ll-rings span:nth-child(4){width:620px;height:620px;animation-delay:1.2s}
@keyframes llPulse{0%,100%{opacity:.05}50%{opacity:.18}}

.ll-content{
  position:relative;z-index:5;padding:0 24px;
  border-top:1px solid rgba(255,255,255,.1);
  padding-top:32px;background:linear-gradient(to top,rgba(0,0,0,.85) 60%,transparent 100%);
}
.ll-eyebrow{
  display:flex;align-items:center;gap:12px;
  font-size:9px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;
  color:rgba(255,255,255,.4);margin-bottom:24px;
  opacity:0;transform:translateY(8px);
  transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);
  transition-delay:.15s;
}
.ll-rule{flex:1;height:1px;background:rgba(255,255,255,.15);max-width:120px}
.ll-title{
  font-family:'EB Garamond',Georgia,serif;font-weight:400;
  font-size:48px;line-height:1.02;letter-spacing:-.01em;margin:0 0 20px;
  opacity:0;transform:translateY(14px);
  transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);
  transition-delay:.25s;
}
.ll-title em{font-style:italic;color:rgba(255,255,255,.45)}
.ll-lede{
  font-size:12px;font-weight:300;line-height:1.75;letter-spacing:.02em;
  color:rgba(255,255,255,.55);max-width:340px;margin-bottom:28px;
  opacity:0;transform:translateY(10px);
  transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);
  transition-delay:.4s;
}
.ll-cta-row{
  margin-bottom:28px;
  opacity:0;transform:translateY(10px);
  transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);
  transition-delay:.55s;
}
.ll-cta{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  width:100%;padding:18px 20px;background:#fff;color:#000;
  font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;
  text-decoration:none;
  transition:background .35s ease,color .35s ease,transform .35s cubic-bezier(.16,1,.3,1);
}
.ll-cta:hover{background:#E5E3DF}
.ll-arrow{transition:transform .45s cubic-bezier(.16,1,.3,1);font-size:14px}
.ll-cta:hover .ll-arrow{transform:translateX(8px)}

.ll-meta{
  list-style:none;padding:0;margin:0 0 8px;
  border-top:1px solid rgba(255,255,255,.1);
  opacity:0;
  transition:opacity 1s cubic-bezier(.16,1,.3,1);
  transition-delay:.7s;
}
.ll-meta li{
  display:flex;align-items:center;gap:18px;
  padding:14px 0;border-bottom:1px solid rgba(255,255,255,.06);
  font-size:10px;font-weight:300;letter-spacing:.04em;color:rgba(255,255,255,.6);
}
.ll-meta li span:first-child{
  font-family:'EB Garamond',Georgia,serif;font-weight:400;font-size:13px;
  color:rgba(255,255,255,.3);min-width:24px;
}
.ll-footer{
  position:relative;z-index:5;text-align:center;
  font-size:8px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;
  color:rgba(255,255,255,.25);margin-top:24px;padding:0 24px;
  opacity:0;transition:opacity 1.2s ease;transition-delay:.95s;
}

.ll-main.in .ll-eyebrow,
.ll-main.in .ll-title,
.ll-main.in .ll-lede,
.ll-main.in .ll-cta-row,
.ll-main.in .ll-meta,
.ll-main.in ~ * .ll-footer,
.ll-main.in .ll-footer{opacity:1;transform:none}

@media (min-width:640px){
  .ll-title{font-size:72px}
  .ll-content{padding-left:48px;padding-right:48px;padding-top:48px}
  .ll-cta{max-width:380px}
}
@media (prefers-reduced-motion:reduce){
  .ll-rings span{animation:none;opacity:.1!important}
  .ll-eyebrow,.ll-title,.ll-lede,.ll-cta-row,.ll-meta,.ll-footer{
    opacity:1!important;transform:none!important;transition:none!important;
  }
}
`;
