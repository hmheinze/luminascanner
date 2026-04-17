import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scanner")({
  head: () => ({
    meta: [
      { title: "Lumina — Skin Intelligence × Prada Beauty" },
      {
        name: "description",
        content:
          "Live facial scan with Prada Beauty makeup ritual: shade match, day & night looks, save & share.",
      },
      { property: "og:title", content: "Lumina — Skin Intelligence × Prada Beauty" },
      {
        property: "og:description",
        content: "Scan your skin. Compose your look. Two routines, one Prada signature.",
      },
    ],
  }),
  component: ScannerPage,
});

function ScannerPage() {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#000" }}>
      <iframe
        src="/scanner.html"
        title="Lumina Skin Intelligence Scanner"
        allow="camera; geolocation; clipboard-write"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
