// Variation 2 — Artisan chaleureux
// Tone: warm, local, human. Cream, terracotta, deep brown. Friendly editorial.

const warmColors = {
  cream: '#f6efe4',
  paper: '#faf5ec',
  terra: '#c66f3f',
  terraDeep: '#9d4f29',
  brown: '#2d2117',
  brownSoft: '#5a4533',
  sage: '#7a8a5e',
  ink: '#1f1812',
  muted: '#8a7b6a',
  border: '#e2d6bf',
};

const warmStyles = {
  root: {
    fontFamily: "'Manrope', sans-serif",
    color: warmColors.ink,
    background: warmColors.cream,
    minHeight: '100%',
  },
  serif: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
  },
};

function WarmNav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: warmColors.cream,
      borderBottom: `1px solid ${warmColors.border}`,
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '20px 56px', display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: warmColors.terra,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: warmColors.paper, fontSize: 22, fontFamily: "'Fraunces', serif", fontWeight: 600, fontStyle: 'italic',
          }}>d</div>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 20, color: warmColors.brown, lineHeight: 1, fontStyle: 'italic' }}>Diag Renov Immo</div>
            <div style={{ fontSize: 11, color: warmColors.muted, marginTop: 2 }}>Audit énergétique · Meurthe-et-Moselle</div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 32, marginLeft: 'auto', alignItems: 'center' }}>
          {['Services', 'Notre histoire', 'Aides', 'Avis clients', 'Contact'].map(item => (
            <a key={item} href="#" style={{ fontSize: 14, color: warmColors.brown, textDecoration: 'none', fontWeight: 500 }}>{item}</a>
          ))}
        </nav>
        <a href="#" style={{
          padding: '12px 22px', background: warmColors.brown, color: warmColors.paper,
          fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: 100,
        }}>{DRI.CONTACT.phone}</a>
      </div>
    </div>
  );
}

function WarmHero() {
  return (
    <section style={{ background: warmColors.cream, padding: '64px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: warmColors.paper, border: `1px solid ${warmColors.border}`, borderRadius: 100, fontSize: 13, color: warmColors.brownSoft, marginBottom: 28, fontWeight: 500 }}>
            <span style={{ fontSize: 12 }}>★</span> Agréé Mon Accompagnateur Rénov' · Meurthe-et-Moselle
          </div>
          <h1 style={{ ...warmStyles.serif, fontSize: 92, lineHeight: 0.95, margin: '0 0 28px', color: warmColors.brown }}>
            Votre maison<br/>
            <span style={{ fontStyle: 'italic', color: warmColors.terra }}>mérite mieux</span><br/>
            qu'une passoire.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: warmColors.brownSoft, maxWidth: 520, margin: '0 0 36px' }}>
            Bonjour, je suis <strong style={{ color: warmColors.brown, fontWeight: 600 }}>Alex</strong>. J'aide les propriétaires de Meurthe-et-Moselle à comprendre leur maison, baisser leurs factures et réussir leurs travaux. Le tout, sans jargon.
          </p>
          <div style={{ display: 'flex', gap: 14, marginBottom: 48 }}>
            <a href="#" style={{ padding: '18px 30px', background: warmColors.terra, color: warmColors.paper, fontSize: 16, fontWeight: 600, textDecoration: 'none', borderRadius: 100 }}>Parler de mon projet</a>
            <a href="#" style={{ padding: '18px 30px', background: 'transparent', color: warmColors.brown, fontSize: 16, fontWeight: 600, textDecoration: 'none', borderRadius: 100, border: `1.5px solid ${warmColors.brown}` }}>Voir mes services</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex' }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: [warmColors.terra, warmColors.sage, warmColors.brownSoft, warmColors.terraDeep][i],
                  border: `2px solid ${warmColors.cream}`, marginLeft: i > 0 ? -10 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: warmColors.paper, fontSize: 13, fontWeight: 600, fontFamily: "'Fraunces', serif",
                }}>{['L','M','B','S'][i]}</div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: 2, color: warmColors.terra, fontSize: 14 }}>{'★★★★★'}</div>
              <div style={{ fontSize: 13, color: warmColors.brownSoft }}>+200 propriétaires accompagnés</div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', borderRadius: 220, background: warmColors.terra,
            position: 'relative', overflow: 'hidden',
            backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 14px, transparent 14px 28px)`,
          }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace", textAlign: 'center', padding: 40 }}>
              [ portrait d'Alex<br/>devant une maison rénovée ]
            </div>
          </div>
          {/* sticker top */}
          <div style={{
            position: 'absolute', top: -16, right: 8, background: warmColors.brown, color: warmColors.paper,
            width: 110, height: 110, borderRadius: '50%',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            transform: 'rotate(-12deg)',
            fontFamily: "'Fraunces', serif",
          }}>
            <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Devis</div>
            <div style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 600 }}>gratuit</div>
            <div style={{ fontSize: 10, marginTop: 2 }}>★ ★ ★</div>
          </div>
          {/* card bottom */}
          <div style={{
            position: 'absolute', bottom: -24, left: -32, background: warmColors.paper,
            border: `1px solid ${warmColors.border}`, borderRadius: 16,
            padding: '18px 22px', boxShadow: '0 8px 32px rgba(45,33,23,0.08)',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, background: warmColors.sage,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: warmColors.paper, fontSize: 20, fontWeight: 700, fontFamily: "'Fraunces', serif",
            }}>A</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: warmColors.brown }}>{DRI.CONTACT.phone}</div>
              <div style={{ fontSize: 12, color: warmColors.muted }}>Lun—Ven · 8h—19h</div>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee */}
      <div style={{ marginTop: 80, padding: '20px 0', borderTop: `1px solid ${warmColors.border}`, borderBottom: `1px solid ${warmColors.border}`, overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 48, alignItems: 'center', ...warmStyles.serif, fontSize: 22, color: warmColors.brownSoft, whiteSpace: 'nowrap', fontStyle: 'italic' }}>
          {['DPE', '·', 'Audit énergétique', '·', 'Étude photovoltaïque', '·', 'Étude chauffage', '·', "Mon Accompagnateur Rénov'", '·', 'MaPrimeRénov\'', '·', 'CEE', '·', 'Éco-PTZ', '·'].map((w, i) => (
            <span key={i} style={{ color: w === '·' ? warmColors.terra : warmColors.brown }}>{w}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarmStats() {
  return (
    <section style={{ background: warmColors.paper, padding: '80px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>·  Le contexte  ·</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {DRI.STATS.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{
                ...warmStyles.serif, fontSize: 88, lineHeight: 1, color: warmColors.terra,
                fontStyle: i % 2 === 0 ? 'italic' : 'normal', marginBottom: 12,
              }}>{s.value}</div>
              <div style={{ fontSize: 15, color: warmColors.brown, lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
              {s.source && <div style={{ fontSize: 11, color: warmColors.muted, marginTop: 6 }}>{s.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarmServices() {
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: warmColors.cream, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  Mes prestations  ·</div>
          <h2 style={{ ...warmStyles.serif, fontSize: 64, lineHeight: 1, margin: 0, color: warmColors.brown }}>
            Quatre façons de <span style={{ fontStyle: 'italic', color: warmColors.terra }}>mieux connaître</span> votre logement.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {DRI.SERVICES.map((s, i) => (
              <button key={s.key} onClick={() => setActive(i)} style={{
                textAlign: 'left', padding: '28px 32px',
                background: active === i ? warmColors.brown : warmColors.paper,
                color: active === i ? warmColors.paper : warmColors.brown,
                border: `1px solid ${active === i ? warmColors.brown : warmColors.border}`,
                borderRadius: 20, cursor: 'pointer', fontFamily: 'inherit',
                display: 'grid', gridTemplateColumns: '48px 1fr 20px', gap: 16, alignItems: 'center',
                transition: 'all 0.2s',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: active === i ? warmColors.terra : warmColors.cream,
                  color: active === i ? warmColors.paper : warmColors.brown,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 600, fontFamily: "'Fraunces', serif", fontStyle: 'italic',
                }}>{i + 1}</div>
                <div>
                  <div style={{ ...warmStyles.serif, fontSize: 24, lineHeight: 1.1, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14, opacity: 0.7 }}>{s.summary}</div>
                </div>
                <div style={{ fontSize: 20 }}>{active === i ? '↘' : '→'}</div>
              </button>
            ))}
          </div>
          <div style={{
            background: warmColors.paper, border: `1px solid ${warmColors.border}`, borderRadius: 24,
            padding: 40, position: 'sticky', top: 100, overflow: 'hidden',
          }}>
            <div style={{
              aspectRatio: '5/3', background: warmColors.terra, borderRadius: 16,
              marginBottom: 28, position: 'relative', overflow: 'hidden',
              backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 14px, transparent 14px 28px)`,
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
                [ photo · prestation {DRI.SERVICES[active].short} ]
              </div>
              <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 12px', background: warmColors.cream, color: warmColors.brown, borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{DRI.SERVICES[active].duration}</div>
            </div>
            <h3 style={{ ...warmStyles.serif, fontSize: 32, color: warmColors.brown, margin: '0 0 14px', lineHeight: 1.1 }}>{DRI.SERVICES[active].title}</h3>
            <p style={{ fontSize: 16, color: warmColors.brownSoft, lineHeight: 1.6, margin: '0 0 24px' }}>{DRI.SERVICES[active].summary}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {DRI.SERVICES[active].bullets.map(b => (
                <div key={b} style={{ display: 'flex', gap: 12, fontSize: 14, color: warmColors.brown, lineHeight: 1.5 }}>
                  <span style={{ color: warmColors.terra, fontWeight: 700, fontSize: 16 }}>✓</span>{b}
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 24, borderTop: `1px dashed ${warmColors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Livrable</div>
                <div style={{ fontSize: 14, color: warmColors.brown, fontWeight: 600 }}>{DRI.SERVICES[active].deliverable}</div>
              </div>
              <a href="#" style={{ padding: '12px 22px', background: warmColors.brown, color: warmColors.paper, fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: 100 }}>Demander un devis</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmDPEScale() {
  const [selected, setSelected] = React.useState('F');
  const data = DRI.DPE.find(d => d.letter === selected);
  return (
    <section style={{ background: warmColors.paper, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'center', marginBottom: 56 }}>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  Échelle DPE  ·</div>
            <h2 style={{ ...warmStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: warmColors.brown }}>
              Une simple lettre, <span style={{ fontStyle: 'italic', color: warmColors.terra }}>beaucoup d'enjeux.</span>
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: warmColors.brownSoft, margin: 0 }}>
            Le DPE classe votre logement de A à G selon sa consommation et ses émissions. Cliquez sur une lettre — je vous explique ce que ça change pour vous, sans jargon.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {DRI.DPE.map(d => {
                const active = d.letter === selected;
                const width = `${50 + (DRI.DPE.indexOf(d)) * 6}%`;
                return (
                  <button key={d.letter} onClick={() => setSelected(d.letter)} style={{
                    width, padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left',
                    background: 'transparent', display: 'flex', alignItems: 'center',
                    transform: active ? 'translateX(8px)' : 'translateX(0)', transition: 'transform 0.2s',
                  }}>
                    <div style={{
                      flex: 1, background: d.color, color: warmColors.ink,
                      padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 16,
                      borderRadius: '8px 100px 100px 8px',
                      boxShadow: active ? `0 4px 20px ${d.color}88` : 'none',
                    }}>
                      <div style={{
                        ...warmStyles.serif, fontSize: 32, fontStyle: 'italic', fontWeight: 600,
                        width: 36, textAlign: 'center',
                      }}>{d.letter}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{d.label}</div>
                      <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", opacity: 0.7 }}>{d.range}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ background: warmColors.cream, borderRadius: 24, padding: 40, border: `1px solid ${warmColors.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <div style={{
                width: 96, height: 96, borderRadius: 24, background: data.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...warmStyles.serif, fontSize: 54, fontStyle: 'italic', fontWeight: 600, color: warmColors.ink,
              }}>{data.letter}</div>
              <div>
                <div style={{ fontSize: 13, color: warmColors.muted, marginBottom: 4 }}>Classe énergétique</div>
                <div style={{ ...warmStyles.serif, fontSize: 28, color: warmColors.brown, lineHeight: 1.1 }}>{data.label}</div>
                <div style={{ fontSize: 13, color: warmColors.brownSoft, fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>{data.range} kWh/m²/an · {data.co2} kgCO₂/m²/an</div>
              </div>
            </div>
            <WarmDPEDetail letter={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmDPEDetail({ letter }) {
  const details = {
    A: { factor: '€', word: 'Bravo', text: 'Votre logement est exemplaire. Une attention à la ventilation et au confort d\'été suffit.' },
    B: { factor: '€', word: 'Très bien', text: 'Vous êtes au-dessus des nouvelles constructions. On peut viser le A avec quelques ajustements.' },
    C: { factor: '€€', word: 'C\'est correct', text: 'L\'objectif visé après rénovation. On peut peaufiner pour atteindre le B.' },
    D: { factor: '€€', word: 'Moyen', text: 'Un audit révèle souvent 30% d\'économies possibles. Pas d\'urgence, mais c\'est rentable.' },
    E: { factor: '€€€', word: 'À surveiller', text: 'Interdiction de location prévue en 2034. Mieux vaut anticiper pendant que les aides existent.' },
    F: { factor: '€€€€', word: 'Passoire', text: 'Vous ne pouvez plus louer ce logement depuis 2028. La rénovation globale est urgente — et bien aidée.' },
    G: { factor: '€€€€€', word: 'Passoire sévère', text: 'Location interdite depuis 2025. Avec MaPrimeRénov\' Ampleur, on peut viser une classe C en un seul chantier.' },
  };
  const d = details[letter];
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px dashed ${warmColors.border}` }}>
        <div style={{ ...warmStyles.serif, fontSize: 36, color: warmColors.terra, fontWeight: 700 }}>{d.factor}</div>
        <div>
          <div style={{ fontSize: 12, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Coût énergétique</div>
          <div style={{ fontSize: 16, color: warmColors.brown, fontWeight: 600 }}>{d.word}</div>
        </div>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: warmColors.brownSoft, margin: '0 0 24px' }}>{d.text}</p>
      <a href="#" style={{ display: 'inline-block', padding: '14px 24px', background: warmColors.terra, color: warmColors.paper, fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: 100 }}>Faire diagnostiquer mon logement →</a>
    </div>
  );
}

function WarmAccompagnateur() {
  return (
    <section style={{ background: warmColors.brown, color: warmColors.paper, padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: warmColors.terra, opacity: 0.15 }}></div>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', background: 'rgba(250,245,236,0.1)', border: `1px solid rgba(250,245,236,0.2)`, borderRadius: 100, fontSize: 13, marginBottom: 28 }}>
              <span style={{ color: warmColors.terra, fontSize: 16 }}>★</span>
              Agrément officiel sur tout le 54
            </div>
            <h2 style={{ ...warmStyles.serif, fontSize: 72, lineHeight: 0.98, margin: '0 0 28px' }}>
              <span style={{ fontStyle: 'italic', color: warmColors.terra }}>Un seul interlocuteur,</span><br/>
              du devis aux travaux.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: '0 0 36px', maxWidth: 520 }}>
              Mon Accompagnateur Rénov', c'est l'agrément que l'État donne aux pros de confiance pour vous guider dans toutes les étapes d'une rénovation. Audit, choix des artisans, dossiers d'aides, suivi de chantier : je m'occupe de tout.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, marginBottom: 40 }}>
              {[
                ['→', "Audit énergétique sur place"],
                ['→', "Choix des artisans certifiés RGE"],
                ['→', "Montage des dossiers d'aides"],
                ['→', "Suivi du chantier et réception"],
              ].map(([arrow, text], i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '16px 0', borderBottom: `1px solid rgba(250,245,236,0.12)` }}>
                  <span style={{ color: warmColors.terra, fontWeight: 700 }}>{arrow}</span>
                  <span style={{ fontSize: 15 }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#" style={{ padding: '16px 28px', background: warmColors.terra, color: warmColors.paper, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 100 }}>Démarrer mon projet</a>
              <a href="#" style={{ padding: '16px 28px', background: 'transparent', color: warmColors.paper, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 100, border: `1.5px solid ${warmColors.paper}` }}>En savoir plus</a>
            </div>
          </div>
          <div>
            <div style={{
              background: warmColors.paper, color: warmColors.brown, borderRadius: 32,
              padding: 40, transform: 'rotate(2deg)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: `1px dashed ${warmColors.border}` }}>
                <div>
                  <div style={{ fontSize: 11, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Certificat</div>
                  <div style={{ ...warmStyles.serif, fontSize: 22, color: warmColors.brown }}>Mon Accompagnateur Rénov'</div>
                </div>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: warmColors.terra, color: warmColors.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', ...warmStyles.serif, fontSize: 24, fontStyle: 'italic', fontWeight: 600 }}>✓</div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Délivré à</div>
                <div style={{ ...warmStyles.serif, fontSize: 28, color: warmColors.brown, fontStyle: 'italic' }}>Diag Renov Immo</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: 11, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>N° d'agrément</div>
                  <div style={{ fontSize: 14, color: warmColors.brown, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>MAR-54-2024-0847</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Périmètre</div>
                  <div style={{ fontSize: 14, color: warmColors.brown, fontWeight: 600 }}>Meurthe-et-Moselle</div>
                </div>
              </div>
              <div style={{ background: warmColors.cream, borderRadius: 14, padding: 16, fontSize: 13, color: warmColors.brownSoft, lineHeight: 1.5 }}>
                <strong style={{ color: warmColors.brown }}>Bon à savoir :</strong> ma prestation d'accompagnement peut être prise en charge jusqu'à <strong style={{ color: warmColors.terra }}>2 000 €</strong> par l'État.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmAides() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});

  const questions = [
    { key: 'revenu', label: 'Vos revenus annuels du foyer ?', options: ['< 20 000 €', '20 — 35 000 €', '35 — 60 000 €', '> 60 000 €'] },
    { key: 'logement', label: 'Type de logement ?', options: ['Maison', 'Appartement'] },
    { key: 'travaux', label: 'Quels travaux envisagés ?', options: ['Isolation', 'Chauffage', 'Rénovation globale', 'Je ne sais pas'] },
    { key: 'usage', label: 'Vous y vivez ou vous louez ?', options: ['Résidence principale', 'Logement loué', 'Les deux'] },
  ];

  const result = answers.revenu === '< 20 000 €' ? 35000 :
    answers.revenu === '20 — 35 000 €' ? 24000 :
    answers.revenu === '35 — 60 000 €' ? 14000 : 9000;

  return (
    <section style={{ background: warmColors.cream, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 56, maxWidth: 760 }}>
          <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  Aides & subventions  ·</div>
          <h2 style={{ ...warmStyles.serif, fontSize: 64, lineHeight: 1, margin: 0, color: warmColors.brown }}>
            Jusqu'à <span style={{ fontStyle: 'italic', color: warmColors.terra }}>90 %</span> de vos travaux pris en charge.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {DRI.AIDES.map((a, i) => (
              <div key={a.name} style={{
                background: i === 0 ? warmColors.terra : warmColors.paper,
                color: i === 0 ? warmColors.paper : warmColors.brown,
                borderRadius: 24, padding: 28, border: i === 0 ? 'none' : `1px solid ${warmColors.border}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <h3 style={{ ...warmStyles.serif, fontSize: 24, margin: 0, lineHeight: 1.1, maxWidth: 260 }}>{a.name}</h3>
                  <div style={{ fontSize: 11, padding: '5px 10px', background: i === 0 ? warmColors.paper : warmColors.brown, color: i === 0 ? warmColors.terra : warmColors.paper, borderRadius: 100, letterSpacing: '0.06em', fontWeight: 700, textTransform: 'uppercase' }}>{a.pill}</div>
                </div>
                <div style={{ ...warmStyles.serif, fontSize: 40, lineHeight: 1, marginBottom: 12, fontStyle: 'italic', fontWeight: 600 }}>{a.amount}</div>
                <div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.55 }}>{a.desc}</div>
              </div>
            ))}
          </div>
          <div style={{
            background: warmColors.brown, color: warmColors.paper, borderRadius: 24, padding: 40,
            position: 'sticky', top: 100, height: 'fit-content',
          }}>
            <div style={{ fontSize: 12, color: warmColors.terra, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8, fontWeight: 600 }}>★ Simulateur ★ 30 secondes</div>
            <h3 style={{ ...warmStyles.serif, fontSize: 32, margin: '0 0 28px', lineHeight: 1.1 }}>
              <span style={{ fontStyle: 'italic' }}>Combien</span> pour mon projet ?
            </h3>
            <div style={{ display: 'flex', gap: 4, marginBottom: 28 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? warmColors.terra : 'rgba(250,245,236,0.2)' }}></div>
              ))}
            </div>
            {step < questions.length ? (
              <>
                <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>{step + 1}/{questions.length}</div>
                <div style={{ ...warmStyles.serif, fontSize: 22, marginBottom: 28, lineHeight: 1.3, fontStyle: 'italic' }}>{questions[step].label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {questions[step].options.map(opt => (
                    <button key={opt} onClick={() => { setAnswers({ ...answers, [questions[step].key]: opt }); setStep(step + 1); }} style={{
                      padding: '14px 20px', background: 'rgba(250,245,236,0.08)',
                      border: `1px solid rgba(250,245,236,0.2)`, color: warmColors.paper,
                      borderRadius: 100, textAlign: 'left', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                    }}>{opt}</button>
                  ))}
                </div>
                {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: 'transparent', border: 'none', color: 'rgba(250,245,236,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>← Précédent</button>}
              </>
            ) : (
              <>
                <div style={{ fontSize: 12, color: warmColors.terra, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>RÉSULTAT</div>
                <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 16, lineHeight: 1.5 }}>D'après vos réponses, vous pourriez obtenir :</div>
                <div style={{ ...warmStyles.serif, fontSize: 80, lineHeight: 1, color: warmColors.terra, fontStyle: 'italic', fontWeight: 600 }}>
                  {result.toLocaleString('fr-FR')} €
                </div>
                <div style={{ fontSize: 14, opacity: 0.7, marginTop: 8, marginBottom: 28 }}>d'aides cumulées sur une rénovation globale</div>
                <a href="#" style={{ display: 'block', textAlign: 'center', padding: '16px 24px', background: warmColors.terra, color: warmColors.paper, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 100, marginBottom: 12 }}>Faire chiffrer mon projet →</a>
                <button onClick={() => { setStep(0); setAnswers({}); }} style={{ background: 'transparent', border: 'none', color: 'rgba(250,245,236,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>↺ Recommencer</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmZone() {
  return (
    <section style={{ background: warmColors.paper, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{
            aspectRatio: '5/4', background: warmColors.cream, borderRadius: 32, position: 'relative', overflow: 'hidden',
            border: `1px solid ${warmColors.border}`,
          }}>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <pattern id="warm-grid" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 6 0 L 0 0 0 6" fill="none" stroke={warmColors.border} strokeWidth="0.2"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#warm-grid)" />
              <path d="M 25 8 L 55 5 L 65 18 L 60 30 L 75 40 L 70 55 L 85 65 L 75 80 L 60 85 L 45 80 L 30 70 L 25 55 L 15 40 L 20 25 Z"
                fill={warmColors.terra} fillOpacity="0.15" stroke={warmColors.terra} strokeWidth="0.4" />
              {[
                { name: 'Nancy', x: 50, y: 55, big: true },
                { name: 'Lunéville', x: 70, y: 60 },
                { name: 'Toul', x: 35, y: 50 },
                { name: 'Pont-à-Mousson', x: 48, y: 35 },
                { name: 'Longwy', x: 38, y: 12 },
                { name: 'Briey', x: 30, y: 25 },
                { name: 'Baccarat', x: 80, y: 72 },
              ].map(c => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r={c.big ? 2.5 : 1.5} fill={warmColors.terra} />
                  {c.big && <circle cx={c.x} cy={c.y} r="5" fill="none" stroke={warmColors.terra} strokeWidth="0.3" />}
                  <text x={c.x + 3} y={c.y + 1.2} fontSize={c.big ? "3" : "2.4"} fill={warmColors.brown} fontFamily="Fraunces" fontStyle="italic" fontWeight={c.big ? "600" : "500"}>{c.name}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: 'absolute', bottom: 24, left: 24, background: warmColors.brown, color: warmColors.paper, padding: '14px 20px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>
              Meurthe-et-Moselle · 54
            </div>
          </div>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  Zone d'intervention  ·</div>
            <h2 style={{ ...warmStyles.serif, fontSize: 56, lineHeight: 1, margin: '0 0 24px', color: warmColors.brown }}>
              Un pro <span style={{ fontStyle: 'italic', color: warmColors.terra }}>près de chez vous,</span> où que vous soyez dans le 54.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: warmColors.brownSoft, margin: '0 0 32px' }}>
              De Longwy à Baccarat, je me déplace partout en Meurthe-et-Moselle. Le premier rendez-vous est gratuit et sans engagement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Nancy', 'Lunéville', 'Toul', 'Pont-à-Mousson', 'Longwy', 'Briey', 'Baccarat', 'Vandœuvre', 'Villers', 'Laxou', 'Jarville', 'Maxéville', 'Frouard', 'Dombasle', 'Champigneulles'].map(c => (
                <div key={c} style={{ padding: '8px 16px', background: warmColors.cream, border: `1px solid ${warmColors.border}`, borderRadius: 100, fontSize: 13, color: warmColors.brown, fontWeight: 500 }}>{c}</div>
              ))}
              <div style={{ padding: '8px 16px', background: warmColors.terra, color: warmColors.paper, borderRadius: 100, fontSize: 13, fontWeight: 600 }}>+ toutes les communes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmTestimonials() {
  return (
    <section style={{ background: warmColors.terra, color: warmColors.paper, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, opacity: 0.8 }}>·  Avis clients  ·</div>
            <h2 style={{ ...warmStyles.serif, fontSize: 64, lineHeight: 1, margin: 0, maxWidth: 800 }}>
              On parle <span style={{ fontStyle: 'italic' }}>mieux de moi</span> que je ne pourrais le faire.
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ ...warmStyles.serif, fontSize: 56, fontStyle: 'italic', fontWeight: 600, lineHeight: 1 }}>4,9/5</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>★★★★★ · Google Reviews</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DRI.TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: warmColors.paper, color: warmColors.brown, borderRadius: 24, padding: 32,
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
            }}>
              <div style={{ display: 'flex', gap: 2, color: warmColors.terra, fontSize: 16, marginBottom: 18 }}>★★★★★</div>
              <p style={{ ...warmStyles.serif, fontSize: 19, lineHeight: 1.5, margin: '0 0 24px', fontStyle: 'italic', fontWeight: 500 }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 20, borderTop: `1px dashed ${warmColors.border}` }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: [warmColors.sage, warmColors.brown, warmColors.terraDeep][i],
                  color: warmColors.paper, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, fontStyle: 'italic',
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: warmColors.brown }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: warmColors.muted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarmBlog() {
  return (
    <section style={{ background: warmColors.cream, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  Le journal  ·</div>
            <h2 style={{ ...warmStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: warmColors.brown }}>
              Pour <span style={{ fontStyle: 'italic', color: warmColors.terra }}>y voir clair</span> dans la jungle des aides.
            </h2>
          </div>
          <a href="#" style={{ fontSize: 14, color: warmColors.brown, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 22px', border: `1px solid ${warmColors.brown}`, borderRadius: 100 }}>Tous les articles →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 24 }}>
          {DRI.BLOG.map((b, i) => (
            <a key={i} href="#" style={{
              background: warmColors.paper, borderRadius: 24, padding: 0,
              textDecoration: 'none', display: 'block', border: `1px solid ${warmColors.border}`,
              overflow: 'hidden',
            }}>
              <div style={{
                aspectRatio: i === 0 ? '16/10' : '4/3',
                background: [warmColors.brown, warmColors.sage, warmColors.terra][i],
                position: 'relative',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 10px, transparent 10px 20px)',
              }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>[ photo article ]</div>
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '5px 12px', background: warmColors.cream, color: warmColors.brown, borderRadius: 100, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{b.cat}</div>
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 12, color: warmColors.muted, marginBottom: 12 }}>{b.date} · {b.readTime} de lecture</div>
                <h3 style={{ ...warmStyles.serif, fontSize: i === 0 ? 28 : 22, color: warmColors.brown, margin: '0 0 12px', lineHeight: 1.15 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: warmColors.brownSoft, lineHeight: 1.55, margin: 0 }}>{b.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarmContact() {
  return (
    <section style={{ background: warmColors.brown, color: warmColors.paper, padding: '120px 0' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
          <div>
            <div style={{ ...warmStyles.serif, fontSize: 14, color: warmColors.terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>·  On en parle ?  ·</div>
            <h2 style={{ ...warmStyles.serif, fontSize: 80, lineHeight: 0.95, margin: '0 0 32px' }}>
              Racontez-moi <span style={{ fontStyle: 'italic', color: warmColors.terra }}>votre projet.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: '0 0 48px' }}>
              Le premier échange est gratuit, sans engagement, et dure 15 minutes. On voit ensemble si vous avez besoin d'un DPE, d'un audit, ou simplement de conseils pour démarrer.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '24px 0',
                borderBottom: `1px solid rgba(250,245,236,0.15)`, textDecoration: 'none', color: warmColors.paper,
              }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: warmColors.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>☎</div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Téléphone</div>
                  <div style={{ ...warmStyles.serif, fontSize: 26, fontStyle: 'italic' }}>{DRI.CONTACT.phone}</div>
                </div>
              </a>
              <a href={`mailto:${DRI.CONTACT.email}`} style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '24px 0',
                borderBottom: `1px solid rgba(250,245,236,0.15)`, textDecoration: 'none', color: warmColors.paper,
              }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: warmColors.sage, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>✉</div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Email</div>
                  <div style={{ ...warmStyles.serif, fontSize: 22 }}>{DRI.CONTACT.email}</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '24px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: warmColors.terraDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>⌖</div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Zone</div>
                  <div style={{ ...warmStyles.serif, fontSize: 22 }}>Meurthe-et-Moselle (54)</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: warmColors.paper, color: warmColors.brown, borderRadius: 32, padding: 48 }}>
            <h3 style={{ ...warmStyles.serif, fontSize: 28, color: warmColors.brown, margin: '0 0 28px', lineHeight: 1.1 }}>
              Ou laissez-moi <span style={{ fontStyle: 'italic', color: warmColors.terra }}>vos coordonnées</span> :
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 24 }}>
              <WarmField label="Prénom et nom" placeholder="Marie Dupont" />
              <WarmField label="Téléphone" placeholder="06 …" />
              <WarmField label="Email" placeholder="marie@exemple.fr" />
              <WarmField label="Commune" placeholder="Nancy, Lunéville…" />
              <div>
                <label style={{ display: 'block', fontSize: 12, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 600 }}>Votre besoin</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['DPE', 'Audit', 'Étude PV', 'Chauffage', 'Conseil global'].map(b => (
                    <button key={b} style={{ padding: '10px 16px', background: warmColors.cream, border: `1px solid ${warmColors.border}`, borderRadius: 100, fontSize: 13, color: warmColors.brown, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>{b}</button>
                  ))}
                </div>
              </div>
              <WarmField label="Quelques mots sur votre projet" placeholder="ex : maison 1970, je veux vendre" multiline />
            </div>
            <button style={{ width: '100%', padding: '18px 24px', background: warmColors.terra, color: warmColors.paper, border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', borderRadius: 100 }}>Envoyer ma demande →</button>
            <div style={{ fontSize: 11, color: warmColors.muted, lineHeight: 1.5, textAlign: 'center', marginTop: 16 }}>Je vous réponds sous 24h ouvrées. Vos données restent confidentielles.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarmField({ label, placeholder, multiline }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, color: warmColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 600 }}>{label}</label>
      {multiline ? (
        <textarea placeholder={placeholder} rows={3} style={{
          width: '100%', padding: '14px 18px', background: warmColors.cream, border: `1px solid ${warmColors.border}`, borderRadius: 14,
          fontSize: 15, fontFamily: 'inherit', color: warmColors.brown, outline: 'none', resize: 'vertical',
        }} />
      ) : (
        <input placeholder={placeholder} style={{
          width: '100%', padding: '14px 18px', background: warmColors.cream, border: `1px solid ${warmColors.border}`, borderRadius: 100,
          fontSize: 15, fontFamily: 'inherit', color: warmColors.brown, outline: 'none',
        }} />
      )}
    </div>
  );
}

function WarmFooter() {
  return (
    <footer style={{ background: warmColors.cream, padding: '64px 0 32px', borderTop: `1px solid ${warmColors.border}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: warmColors.terra, color: warmColors.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontFamily: "'Fraunces', serif", fontWeight: 600, fontStyle: 'italic' }}>d</div>
              <div style={{ ...warmStyles.serif, fontSize: 22, color: warmColors.brown, fontStyle: 'italic' }}>Diag Renov Immo</div>
            </div>
            <p style={{ fontSize: 14, color: warmColors.brownSoft, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>Votre allié pour comprendre, rénover et valoriser votre maison. Audit, accompagnement et financement de A à Z, en Meurthe-et-Moselle.</p>
          </div>
          {[
            ['Services', ['DPE', 'Audit', 'Étude PV', 'Chauffage', 'Accompagnement']],
            ['Société', ['À propos d\'Alex', 'Le journal', 'Témoignages', 'FAQ']],
            ['Contact', [DRI.CONTACT.phone, DRI.CONTACT.email, DRI.CONTACT.zone]],
          ].map(([head, items]) => (
            <div key={head}>
              <div style={{ ...warmStyles.serif, fontSize: 16, color: warmColors.brown, marginBottom: 16, fontStyle: 'italic' }}>{head}</div>
              {items.map(it => <div key={it} style={{ fontSize: 13, color: warmColors.brownSoft, marginBottom: 10 }}>{it}</div>)}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: `1px dashed ${warmColors.border}`, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: warmColors.muted }}>
          <div>© 2026 Diag Renov Immo — fait avec ★ en Lorraine</div>
          <div>Mentions légales · CGV · Confidentialité</div>
        </div>
      </div>
    </footer>
  );
}

function VarWarm() {
  return (
    <div style={warmStyles.root}>
      <WarmNav />
      <WarmHero />
      <WarmStats />
      <WarmServices />
      <WarmDPEScale />
      <WarmAccompagnateur />
      <WarmAides />
      <WarmZone />
      <WarmTestimonials />
      <WarmBlog />
      <WarmContact />
      <WarmFooter />
    </div>
  );
}

window.VarWarm = VarWarm;
