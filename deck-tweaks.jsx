// deck-tweaks.jsx — Tweaks panel for the Marketing Agents deck.
// Static slides stay directly editable; this panel only writes CSS vars +
// data-attributes onto <body>, which the slide CSS reacts to.

const DECK_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "bold",
  "accent": ["#70944d", "#b5cba0", "#587938"],
  "typeScale": 1,
  "pageNumbers": true
}/*EDITMODE-END*/;

function DeckTweaks() {
  const [t, setTweak] = useTweaks(DECK_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const b = document.body;
    b.setAttribute("data-dir", t.direction);
    b.setAttribute("data-pagenums", t.pageNumbers ? "on" : "off");
    const root = document.documentElement;
    const a = Array.isArray(t.accent) ? t.accent : [t.accent, "#b5cba0", "#587938"];
    root.style.setProperty("--accent-deck", a[0]);
    root.style.setProperty("--accent-deck-300", a[1] || a[0]);
    root.style.setProperty("--accent-deck-700", a[2] || a[0]);
    root.style.setProperty("--scale", String(t.typeScale));
    if (window.lucide) window.lucide.createIcons();
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Visual direction" />
      <TweakRadio
        label="Direction"
        value={t.direction}
        options={["bold", "editorial", "data"]}
        onChange={(v) => setTweak("direction", v)}
      />
      <TweakSection label="Accent" />
      <TweakColor
        label="Green accent"
        value={t.accent}
        options={[
          ["#70944d", "#b5cba0", "#587938"],
          ["#587938", "#97b67c", "#3f5a26"],
          ["#7ea15b", "#cde0b8", "#648645"]
        ]}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Layout" />
      <TweakSlider
        label="Type scale"
        value={t.typeScale}
        min={0.9}
        max={1.1}
        step={0.05}
        onChange={(v) => setTweak("typeScale", v)}
      />
      <TweakToggle
        label="Page numbers"
        value={t.pageNumbers}
        onChange={(v) => setTweak("pageNumbers", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<DeckTweaks />);

// initial icon pass (in case effect timing misses)
if (window.lucide) window.lucide.createIcons();
