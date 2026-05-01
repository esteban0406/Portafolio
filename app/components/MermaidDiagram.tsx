"use client";

import { useEffect, useRef } from "react";

interface MermaidDiagramProps {
  chart: string;
  id: string;
  maxWidth?: string;
}

let initialized = false;

export function MermaidDiagram({
  chart,
  id,
  maxWidth = "100%",
}: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = async () => {
      const mermaid = (await import("mermaid")).default;

      if (!initialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            background: "#18181b",
            mainBkg: "#18181b",
            nodeBorder: "#27272a",
            clusterBkg: "#09090b",
            clusterBorder: "#27272a",
            lineColor: "#52525b",
            edgeLabelBackground: "#18181b",
            primaryColor: "#18181b",
            primaryBorderColor: "#27272a",
            primaryTextColor: "#fafafa",
            secondaryColor: "#09090b",
            secondaryBorderColor: "#27272a",
            secondaryTextColor: "#a1a1aa",
            tertiaryColor: "#09090b",
            tertiaryBorderColor: "#27272a",
            tertiaryTextColor: "#a1a1aa",
            noteBkgColor: "#18181b",
            noteTextColor: "#a1a1aa",
            noteBorderColor: "#27272a",
            titleColor: "#fafafa",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "13px",
          },
        });
        initialized = true;
      }

      const { svg } = await mermaid.render(id, chart);

      if (ref.current) {
        ref.current.innerHTML = svg;
        const svgEl = ref.current.querySelector("svg");
        if (svgEl) {
          svgEl.removeAttribute("height");
          svgEl.removeAttribute("width");
          svgEl.style.height = "auto";
          svgEl.style.width = "100%";
          // Trim viewBox to actual content bounds to remove Mermaid's internal whitespace
          try {
            const bbox = svgEl.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
              const pad = 10;
              svgEl.setAttribute(
                "viewBox",
                `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
              );
            }
          } catch {
            // getBBox unavailable (e.g. hidden element) — keep original viewBox
          }
        }
      }
    };

    render().catch(() => {});
  }, [chart, id]);

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-card p-6 flex justify-center">
      <div ref={ref} style={{ width: maxWidth, maxWidth }} />
    </div>
  );
}
