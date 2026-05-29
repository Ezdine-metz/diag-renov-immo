// Variation 3 — Écolo moderne
// Tone: contemporary, eco-driven. Dark forest + lime. Big confident type.

const ecoColors = {
  bg: '#0e2a1e',
  bgDeep: '#081c14',
  bgPanel: '#143228',
  ink: '#f1ede0',
  inkSoft: 'rgba(241,237,224,0.7)',
  inkMute: 'rgba(241,237,224,0.5)',
  border: 'rgba(241,237,224,0.12)',
  lime: '#c8e6a0',
  limeBright: '#d8f7a8',
  sage: '#7fa680',
  amber: '#e6c878',
};

const ecoStyles = {
  root: {
    fontFamily: "'Inter', sans-serif",
    color: ecoColors.ink,
    background: ecoColors.bg,
    minHeight: '100%',
  },
  display: {
    fontFamily: "'Instrument Serif', serif",
    fontWeight: 400,
    letterSpacing: '-0.02em',
  },
};

function EcoNav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(14,42,30,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${ecoColors.border}`,
    }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '18px 56px', display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8, background: ecoColors.lime,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: ecoColors.bg, fontSize: 18, fontWeight: 700,
            fontFamily: "'Instrument Serif', serif",
          }}>◐</div>
          <div style={{ fontSize: 15, color: ecoColors.ink, letterSpacing: '-0.01em', fontWeight: 600 }}>
            Diag Renov Immo
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 'auto', alignItems: 'center' }}>
          {[
            ['Diagnostics', null], ['Aides', '€'], ['Accompagnement', null], ['Blog', null], ['Contact', null],
          ].map(([item, badge]) => (
            <a key={item} href="#" style={{ fontSize: 14, color: ecoColors.ink, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
              {item} {badge && <span style={{ fontSize: 10, padding: '2px 6px', background: ecoColors.lime, color: ecoColors.bg, borderRadius: 100, fontWeight: 700 }}>{badge}</span>}
            </a>
          ))}
        </nav>
        <a href="#" style={{
          padding: '12px 22px', background: ecoColors.lime, color: ecoColors.bg,
          fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>Estimer mes aides <span>↗</span></a>
      </div>
    </div>
  );
}

function EcoHero() {
  return (
    <section style={{ background: ecoColors.bg, padding: '80px 0 120px', position: 'relative', overflow: 'hidden' }}>
      {/* glow */}
      <div style={{
        position: 'absolute', top: 100, right: -200, width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${ecoColors.lime}33 0%, transparent 60%)`,
      }}></div>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
          <div style={{ width: 8, height: 8, background: ecoColors.lime, borderRadius: '50%', boxShadow: `0 0 12px ${ecoColors.lime}` }}></div>
          <div style={{ fontSize: 13, color: ecoColors.inkSoft, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}>
            Agréé Mon Accompagnateur Rénov' · 54 · 2026
          </div>
          <div style={{ flex: 1, height: 1, background: ecoColors.border, marginLeft: 16 }}></div>
        </div>
        <h1 style={{
          ...ecoStyles.display, fontSize: 168, lineHeight: 0.9, margin: '0 0 24px',
          color: ecoColors.ink, letterSpacing: '-0.04em',
        }}>
          Rénovez<br/>
          <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>vivement.</span>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, marginTop: 56 }}>
          <div>
            <p style={{ fontSize: 22, lineHeight: 1.5, color: ecoColors.inkSoft, maxWidth: 620, margin: '0 0 36px', fontWeight: 400 }}>
              4,8 millions de logements français sont des passoires énergétiques. Le vôtre n'en fait peut-être plus partie longtemps. On vous dit comment, on vous accompagne, on monte les dossiers d'aides.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#" style={{
                padding: '20px 32px', background: ecoColors.lime, color: ecoColors.bg,
                fontSize: 16, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                Diagnostiquer mon logement <span style={{ fontSize: 20 }}>→</span>
              </a>
              <a href="#" style={{
                padding: '20px 32px', background: 'transparent', color: ecoColors.ink,
                fontSize: 16, fontWeight: 500, textDecoration: 'none', borderRadius: 100,
                border: `1px solid ${ecoColors.border}`,
              }}>{DRI.CONTACT.phone}</a>
            </div>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {[
                ['2 028', "Fin du F locatif", "Loi climat"],
                ['90 %', "Aides plafonnées", "MaPrimeRénov'"],
                ['48 h', "Délai DPE", "Sur 54"],
                ['200+', "Foyers conseillés", "Depuis 2022"],
              ].map(([v, l, sub], i) => (
                <div key={i} style={{ padding: '20px 0', borderTop: `1px solid ${ecoColors.border}` }}>
                  <div style={{ ...ecoStyles.display, fontSize: 48, lineHeight: 1, color: ecoColors.lime, marginBottom: 6 }}>{v}</div>
                  <div style={{ fontSize: 14, color: ecoColors.ink, fontWeight: 600 }}>{l}</div>
                  <div style={{ fontSize: 12, color: ecoColors.inkMute, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* DPE band */}
      <div style={{ marginTop: 96, maxWidth: 1360, margin: '96px auto 0', padding: '0 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase' }}>De la passoire à la performance</div>
          <div style={{ flex: 1, height: 1, background: ecoColors.border }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
          {DRI.DPE.map(d => (
            <div key={d.letter} style={{
              padding: '20px 16px', background: d.color, color: ecoColors.bg,
              borderRadius: 8,
            }}>
              <div style={{ ...ecoStyles.display, fontSize: 64, lineHeight: 1 }}>{d.letter}</div>
              <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", marginTop: 6, opacity: 0.85 }}>{d.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoServices() {
  return (
    <section style={{ background: ecoColors.bg, padding: '120px 0', borderTop: `1px solid ${ecoColors.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§01 — Diagnostics & études</div>
            <h2 style={{ ...ecoStyles.display, fontSize: 96, lineHeight: 0.95, margin: 0, color: ecoColors.ink, letterSpacing: '-0.03em' }}>
              Tout commence par<br/>
              <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>comprendre.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {DRI.SERVICES.map((s, i) => (
            <div key={s.key} style={{
              background: ecoColors.bgPanel, borderRadius: 24, padding: 32,
              display: 'flex', flexDirection: 'column', minHeight: 480,
              border: `1px solid ${ecoColors.border}`, position: 'relative', overflow: 'hidden',
            }}>
              {i === 0 && (
                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, padding: '4px 10px', background: ecoColors.lime, color: ecoColors.bg, borderRadius: 100, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Le + demandé</div>
              )}
              <div style={{ fontSize: 12, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', marginBottom: 16 }}>0{i+1}/04</div>
              <div style={{
                width: 64, height: 64, borderRadius: 16, background: ecoColors.lime,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, color: ecoColors.bg, ...ecoStyles.display, fontSize: 32,
              }}>{s.short[0]}</div>
              <h3 style={{ ...ecoStyles.display, fontSize: 28, color: ecoColors.ink, margin: '0 0 12px', lineHeight: 1.1 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: ecoColors.inkSoft, lineHeight: 1.55, margin: '0 0 24px', flex: 1 }}>{s.summary}</p>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${ecoColors.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: ecoColors.inkMute, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Durée</span>
                  <span style={{ fontSize: 13, color: ecoColors.ink, fontWeight: 500 }}>{s.duration}</span>
                </div>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0 0', color: ecoColors.lime, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
                  Démarrer <span style={{ fontSize: 16 }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoDPEScale() {
  const [selected, setSelected] = React.useState('F');
  const data = DRI.DPE.find(d => d.letter === selected);
  const idx = DRI.DPE.findIndex(d => d.letter === selected);
  return (
    <section style={{ background: ecoColors.bgDeep, padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§02 — Échelle DPE interactive</div>
            <h2 style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 0.95, margin: 0, color: ecoColors.ink, letterSpacing: '-0.03em' }}>
              Où se situe<br/>
              <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>votre logement ?</span>
            </h2>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: ecoColors.inkMute, textAlign: 'right' }}>
            Cliquez sur une lettre<br/>↓
          </div>
        </div>
        <div style={{ marginBottom: 48 }}>
          {/* big DPE bar */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 32 }}>
            {DRI.DPE.map((d, i) => {
              const active = d.letter === selected;
              return (
                <button key={d.letter} onClick={() => setSelected(d.letter)} style={{
                  flex: 1, padding: 0, border: 'none', cursor: 'pointer',
                  background: 'transparent',
                }}>
                  <div style={{
                    height: 60 + i * 24, background: d.color, color: ecoColors.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    ...ecoStyles.display, fontSize: 88, lineHeight: 1,
                    borderRadius: 12, position: 'relative',
                    boxShadow: active ? `0 0 0 3px ${ecoColors.lime}, 0 0 40px ${d.color}88` : 'none',
                    transition: 'all 0.2s',
                    transform: active ? 'translateY(-12px)' : 'translateY(0)',
                  }}>
                    {d.letter}
                    {active && <div style={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace" }}>▼ sélectionné</div>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          <div style={{ background: ecoColors.bgPanel, borderRadius: 24, padding: 36, border: `1px solid ${ecoColors.border}` }}>
            <div style={{ fontSize: 12, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Classe</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: data.color, color: ecoColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...ecoStyles.display, fontSize: 44, lineHeight: 1 }}>{data.letter}</div>
              <div>
                <div style={{ ...ecoStyles.display, fontSize: 26, color: ecoColors.ink, lineHeight: 1.1 }}>{data.label}</div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${ecoColors.border}`, paddingTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: ecoColors.inkMute }}>Énergie</span>
                <span style={{ fontSize: 14, color: ecoColors.ink, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{data.range} kWh/m²/an</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: ecoColors.inkMute }}>CO₂</span>
                <span style={{ fontSize: 14, color: ecoColors.ink, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{data.co2} kgCO₂/m²/an</span>
              </div>
            </div>
          </div>
          <div style={{ background: ecoColors.bgPanel, borderRadius: 24, padding: 36, border: `1px solid ${ecoColors.border}` }}>
            <div style={{ fontSize: 12, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Cadre légal</div>
            <p style={{ fontSize: 15, color: ecoColors.ink, lineHeight: 1.6, margin: 0 }}>
              {idx >= 5 && <><strong style={{ color: ecoColors.amber }}>Interdiction de location</strong> {data.letter === 'G' ? 'depuis 2025' : 'depuis 2028'}. </>}
              {idx === 4 && <><strong style={{ color: ecoColors.amber }}>Interdiction prévue en 2034</strong>. </>}
              {idx < 4 && <>Aucune restriction réglementaire. </>}
              Le DPE doit être annexé à toute vente ou location.
            </p>
          </div>
          <div style={{ background: ecoColors.lime, color: ecoColors.bg, borderRadius: 24, padding: 36 }}>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7 }}>Avec un audit</div>
            <div style={{ ...ecoStyles.display, fontSize: 28, lineHeight: 1.1, marginBottom: 16 }}>
              {idx >= 5 ? `Passer de ${data.letter} à C` : idx >= 3 ? `Viser le B` : `Maintenir la performance`}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 20px', opacity: 0.85 }}>
              {idx >= 5 ? 'En un seul chantier, avec MaPrimeRénov\' Ampleur. Économies estimées : 1 200 à 2 400 €/an.' :
               idx >= 3 ? 'Audit + travaux ciblés. Économies estimées : 600 à 1 200 €/an.' :
               'Optimisation continue. PV ou améliorations ponctuelles.'}
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: ecoColors.bg, color: ecoColors.lime, fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>
              Lancer l'audit <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoProcess() {
  return (
    <section style={{ background: ecoColors.bg, padding: '120px 0', borderTop: `1px solid ${ecoColors.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§03 — Notre méthode</div>
          <h2 style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 0.95, margin: 0, color: ecoColors.ink, letterSpacing: '-0.03em', maxWidth: 1000 }}>
            Quatre étapes, <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>zéro mauvaise surprise.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {DRI.PROCESS.map((p, i) => (
            <div key={p.n} style={{
              padding: '32px 24px 32px 0', borderTop: `2px solid ${ecoColors.lime}`,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
                <div style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 1, color: ecoColors.lime }}>0{p.n}</div>
                <div style={{ fontSize: 11, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>{i === 0 ? 'GRATUIT' : i === DRI.PROCESS.length - 1 ? 'AVEC VOUS' : 'INCLUS'}</div>
              </div>
              <h3 style={{ ...ecoStyles.display, fontSize: 28, color: ecoColors.ink, margin: '0 0 12px', lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: ecoColors.inkSoft, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoAccompagnateur() {
  return (
    <section style={{ background: ecoColors.lime, color: ecoColors.bg, padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>§04 — Mon Accompagnateur Rénov'</div>
            <h2 style={{ ...ecoStyles.display, fontSize: 120, lineHeight: 0.9, margin: '0 0 32px', letterSpacing: '-0.04em' }}>
              On vous tient<br/>
              <span style={{ fontStyle: 'italic' }}>la main</span> jusqu'au bout.
            </h2>
            <p style={{ fontSize: 20, lineHeight: 1.55, margin: '0 0 40px', maxWidth: 600, opacity: 0.85 }}>
              Mon Accompagnateur Rénov' est l'agrément officiel délivré par l'État aux pros qui vous accompagnent de bout en bout : audit, choix des artisans, dossiers d'aides, contrôle des travaux. Diag Renov Immo est agréé sur tout le 54.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" style={{ padding: '20px 32px', background: ecoColors.bg, color: ecoColors.lime, fontSize: 16, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>Démarrer mon projet →</a>
              <a href="#" style={{ padding: '20px 32px', background: 'transparent', color: ecoColors.bg, fontSize: 16, fontWeight: 600, textDecoration: 'none', borderRadius: 100, border: `1.5px solid ${ecoColors.bg}` }}>En savoir +</a>
            </div>
          </div>
          <div style={{ background: ecoColors.bg, color: ecoColors.ink, borderRadius: 32, padding: 36 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Certificat actif</div>
                <div style={{ ...ecoStyles.display, fontSize: 24, marginTop: 4 }}>Mon Accompagnateur Rénov'</div>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: ecoColors.lime, color: ecoColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700 }}>✓</div>
            </div>
            <div style={{ marginBottom: 20 }}>
              {[
                ['Titulaire', 'Diag Renov Immo'],
                ['N° agrément', 'MAR-54-2024-0847'],
                ['Périmètre', 'Meurthe-et-Moselle (54)'],
                ['Délivré', 'Anah · 2024'],
                ['Valide jusqu\'au', '2029'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${ecoColors.border}` }}>
                  <span style={{ fontSize: 13, color: ecoColors.inkMute }}>{k}</span>
                  <span style={{ fontSize: 14, color: ecoColors.ink, fontWeight: 500, fontFamily: k === 'N° agrément' ? "'JetBrains Mono', monospace" : 'inherit' }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ background: ecoColors.bgPanel, borderRadius: 16, padding: 18 }}>
              <div style={{ fontSize: 12, color: ecoColors.lime, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>BONUS</div>
              <div style={{ fontSize: 14, lineHeight: 1.5 }}>Cette prestation peut être prise en charge jusqu'à <strong style={{ color: ecoColors.lime }}>2 000 €</strong> par l'État.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoAides() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const questions = [
    { key: 'revenu', label: 'Revenus annuels du foyer', options: ['< 20 000 €', '20 — 35 000 €', '35 — 60 000 €', '> 60 000 €'] },
    { key: 'travaux', label: 'Type de projet', options: ['Rénovation globale', 'Isolation seule', 'Chauffage seul', 'Je découvre'] },
    { key: 'surface', label: 'Surface du logement', options: ['< 70 m²', '70-120 m²', '120-180 m²', '> 180 m²'] },
  ];
  const result = answers.revenu === '< 20 000 €' ? 38000 :
    answers.revenu === '20 — 35 000 €' ? 26000 :
    answers.revenu === '35 — 60 000 €' ? 16000 : 9500;
  return (
    <section style={{ background: ecoColors.bg, padding: '120px 0' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§05 — Aides mobilisables</div>
          <h2 style={{ ...ecoStyles.display, fontSize: 96, lineHeight: 0.9, margin: 0, color: ecoColors.ink, letterSpacing: '-0.03em' }}>
            <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>L'État paie</span><br/>
            une grande partie.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {DRI.AIDES.map((a, i) => (
              <div key={a.name} style={{
                background: i === 0 ? ecoColors.lime : ecoColors.bgPanel,
                color: i === 0 ? ecoColors.bg : ecoColors.ink,
                border: i === 0 ? 'none' : `1px solid ${ecoColors.border}`,
                borderRadius: 20, padding: 32,
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <h3 style={{ ...ecoStyles.display, fontSize: 28, margin: 0, lineHeight: 1.1 }}>{a.name}</h3>
                    <span style={{ fontSize: 10, padding: '4px 8px', background: i === 0 ? ecoColors.bg : ecoColors.lime, color: i === 0 ? ecoColors.lime : ecoColors.bg, borderRadius: 100, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a.pill}</span>
                  </div>
                  <p style={{ fontSize: 14, opacity: i === 0 ? 0.8 : 0.7, lineHeight: 1.5, margin: 0 }}>{a.desc}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ ...ecoStyles.display, fontSize: 36, lineHeight: 1, fontStyle: 'italic' }}>{a.amount}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: ecoColors.bgPanel, borderRadius: 32, padding: 48, border: `1px solid ${ecoColors.border}`, position: 'sticky', top: 100, height: 'fit-content' }}>
            <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>● Simulateur · 60 sec</div>
            <h3 style={{ ...ecoStyles.display, fontSize: 40, margin: '0 0 32px', lineHeight: 1.05 }}>
              Estimez vos aides<br/>
              <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>en 3 questions.</span>
            </h3>
            <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? ecoColors.lime : ecoColors.border }}></div>
              ))}
            </div>
            {step < questions.length ? (
              <>
                <div style={{ fontSize: 12, color: ecoColors.inkMute, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>Q{step + 1}/{questions.length}</div>
                <div style={{ fontSize: 20, marginBottom: 24, color: ecoColors.ink, lineHeight: 1.3 }}>{questions[step].label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                  {questions[step].options.map(opt => (
                    <button key={opt} onClick={() => { setAnswers({...answers, [questions[step].key]: opt}); setStep(step + 1); }} style={{
                      padding: '16px 22px', background: ecoColors.bg, border: `1px solid ${ecoColors.border}`,
                      color: ecoColors.ink, borderRadius: 100, textAlign: 'left', fontSize: 15,
                      cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                      <span>{opt}</span><span style={{ color: ecoColors.lime }}>→</span>
                    </button>
                  ))}
                </div>
                {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: 'transparent', border: 'none', color: ecoColors.inkMute, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>← Précédent</button>}
              </>
            ) : (
              <>
                <div style={{ fontSize: 12, color: ecoColors.lime, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>● ESTIMATION</div>
                <div style={{ ...ecoStyles.display, fontSize: 96, lineHeight: 1, color: ecoColors.lime, fontStyle: 'italic', marginBottom: 8 }}>
                  {result.toLocaleString('fr-FR')} €
                </div>
                <p style={{ fontSize: 14, color: ecoColors.inkSoft, marginBottom: 28, lineHeight: 1.55 }}>d'aides cumulées sur une rénovation globale, avant calcul du reste à charge éligible Éco-PTZ.</p>
                <a href="#" style={{ display: 'block', textAlign: 'center', padding: '18px 24px', background: ecoColors.lime, color: ecoColors.bg, fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100, marginBottom: 12 }}>Étudier mon dossier précisément →</a>
                <button onClick={() => { setStep(0); setAnswers({}); }} style={{ background: 'transparent', border: 'none', color: ecoColors.inkMute, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>↺ Refaire la simulation</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoZone() {
  return (
    <section style={{ background: ecoColors.bgDeep, padding: '120px 0' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§06 — Zone d'intervention</div>
          <h2 style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 0.95, margin: 0, color: ecoColors.ink, letterSpacing: '-0.03em' }}>
            Sur tout le 54,<br/>
            <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>de Longwy à Baccarat.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}>
          <div style={{
            aspectRatio: '5/4', background: ecoColors.bgPanel, borderRadius: 32, position: 'relative', overflow: 'hidden',
            border: `1px solid ${ecoColors.border}`,
          }}>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <pattern id="eco-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <circle cx="2.5" cy="2.5" r="0.15" fill={ecoColors.border}/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#eco-grid)" />
              <path d="M 25 8 L 55 5 L 65 18 L 60 30 L 75 40 L 70 55 L 85 65 L 75 80 L 60 85 L 45 80 L 30 70 L 25 55 L 15 40 L 20 25 Z"
                fill={ecoColors.lime} fillOpacity="0.1" stroke={ecoColors.lime} strokeWidth="0.3" />
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
                  <circle cx={c.x} cy={c.y} r={c.big ? 2.5 : 1.5} fill={ecoColors.lime} />
                  {c.big && (
                    <>
                      <circle cx={c.x} cy={c.y} r="6" fill="none" stroke={ecoColors.lime} strokeWidth="0.3" strokeOpacity="0.6">
                        <animate attributeName="r" from="2.5" to="10" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    </>
                  )}
                  <text x={c.x + 3} y={c.y + 1.2} fontSize={c.big ? "3.2" : "2.6"} fill={ecoColors.ink} fontFamily="Inter" fontWeight={c.big ? "600" : "400"}>{c.name}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ecoColors.inkMute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Meurthe-et-Moselle / 54</div>
            <div style={{ position: 'absolute', bottom: 24, right: 24, background: ecoColors.lime, color: ecoColors.bg, padding: '10px 18px', borderRadius: 100, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, background: ecoColors.bg, borderRadius: '50%' }}></span> Diag Renov Immo · Nancy
            </div>
          </div>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: ecoColors.inkSoft, margin: '0 0 32px' }}>
              Diag Renov Immo intervient dans toutes les communes du département. Premier déplacement gratuit dans un rayon de 60 km autour de Nancy.
            </p>
            <div style={{ background: ecoColors.bgPanel, border: `1px solid ${ecoColors.border}`, borderRadius: 20, padding: 28, marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Principales communes</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Nancy', 'Lunéville', 'Toul', 'Pont-à-Mousson', 'Longwy', 'Briey', 'Baccarat', 'Vandœuvre', 'Villers-lès-Nancy', 'Laxou', 'Jarville', 'Maxéville', 'Frouard', 'Dombasle', 'Champigneulles', 'Saint-Nicolas-de-Port'].map(c => (
                  <div key={c} style={{ padding: '6px 12px', background: ecoColors.bg, border: `1px solid ${ecoColors.border}`, borderRadius: 100, fontSize: 12, color: ecoColors.ink }}>{c}</div>
                ))}
              </div>
            </div>
            <div style={{ background: ecoColors.lime, color: ecoColors.bg, borderRadius: 20, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pas listée ?</div>
                <div style={{ ...ecoStyles.display, fontSize: 20, lineHeight: 1.2 }}>Appelez-nous, on intervient.</div>
              </div>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{ padding: '12px 22px', background: ecoColors.bg, color: ecoColors.lime, fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>{DRI.CONTACT.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoTestimonials() {
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: ecoColors.bg, padding: '120px 0', borderTop: `1px solid ${ecoColors.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§07 — Témoignages</div>
            <h2 style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 0.95, margin: 0, letterSpacing: '-0.03em' }}>
              Ils sont passés du<br/>
              <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>rouge au vert.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setActive((active - 1 + DRI.TESTIMONIALS.length) % DRI.TESTIMONIALS.length)} style={{ width: 48, height: 48, borderRadius: '50%', background: 'transparent', border: `1px solid ${ecoColors.border}`, color: ecoColors.ink, fontSize: 18, cursor: 'pointer' }}>←</button>
            <button onClick={() => setActive((active + 1) % DRI.TESTIMONIALS.length)} style={{ width: 48, height: 48, borderRadius: '50%', background: ecoColors.lime, border: 'none', color: ecoColors.bg, fontSize: 18, cursor: 'pointer', fontWeight: 700 }}>→</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {DRI.TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: i === active ? ecoColors.lime : ecoColors.bgPanel,
              color: i === active ? ecoColors.bg : ecoColors.ink,
              border: `1px solid ${i === active ? ecoColors.lime : ecoColors.border}`,
              borderRadius: 24, padding: 36, cursor: 'pointer',
              transition: 'all 0.2s',
            }} onClick={() => setActive(i)}>
              <div style={{ display: 'flex', gap: 2, fontSize: 14, marginBottom: 24, color: i === active ? ecoColors.bg : ecoColors.lime }}>★★★★★</div>
              <p style={{ ...ecoStyles.display, fontSize: 22, lineHeight: 1.35, margin: '0 0 28px', fontStyle: 'italic' }}>"{t.quote}"</p>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${i === active ? 'rgba(14,42,30,0.2)' : ecoColors.border}` }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoBlog() {
  return (
    <section style={{ background: ecoColors.bgDeep, padding: '120px 0' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 12, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>§08 — Actualités</div>
            <h2 style={{ ...ecoStyles.display, fontSize: 80, lineHeight: 0.95, margin: 0, letterSpacing: '-0.03em' }}>
              Pour <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>aller plus loin.</span>
            </h2>
          </div>
          <a href="#" style={{ fontSize: 14, color: ecoColors.lime, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            Tous les articles <span>→</span>
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DRI.BLOG.map((b, i) => (
            <a key={i} href="#" style={{
              background: ecoColors.bgPanel, border: `1px solid ${ecoColors.border}`,
              borderRadius: 24, padding: 0, textDecoration: 'none', display: 'block', overflow: 'hidden',
            }}>
              <div style={{
                aspectRatio: '4/3',
                background: i === 0 ? ecoColors.lime : i === 1 ? ecoColors.amber : ecoColors.sage,
                position: 'relative',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(14,42,30,0.04) 0 10px, transparent 10px 20px)',
              }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(14,42,30,0.4)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>[ visuel article ]</div>
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '5px 12px', background: ecoColors.bg, color: ecoColors.lime, borderRadius: 100, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{b.cat}</div>
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 11, color: ecoColors.inkMute, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace", display: 'flex', justifyContent: 'space-between' }}><span>{b.date}</span><span>{b.readTime}</span></div>
                <h3 style={{ ...ecoStyles.display, fontSize: 24, color: ecoColors.ink, margin: '0 0 12px', lineHeight: 1.2 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: ecoColors.inkSoft, lineHeight: 1.55, margin: 0 }}>{b.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoContact() {
  return (
    <section style={{ background: ecoColors.lime, color: ecoColors.bg, padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, opacity: 0.7 }}>§09 — Premier contact</div>
          <h2 style={{ ...ecoStyles.display, fontSize: 168, lineHeight: 0.88, margin: 0, letterSpacing: '-0.04em' }}>
            On en parle ?<br/>
            <span style={{ fontStyle: 'italic', opacity: 0.5 }}>Vraiment.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <p style={{ fontSize: 20, lineHeight: 1.6, margin: '0 0 48px', opacity: 0.85 }}>
              15 minutes au téléphone pour comprendre votre projet et identifier les leviers d'aides. Sans engagement, sans baratin.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{
                padding: '28px 0', borderTop: `1px solid rgba(14,42,30,0.2)`,
                textDecoration: 'none', color: ecoColors.bg,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 12, opacity: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em' }}>Téléphone direct</div>
                  <div style={{ ...ecoStyles.display, fontSize: 40, lineHeight: 1.1, fontStyle: 'italic' }}>{DRI.CONTACT.phone}</div>
                </div>
                <span style={{ fontSize: 24 }}>→</span>
              </a>
              <a href={`mailto:${DRI.CONTACT.email}`} style={{
                padding: '28px 0', borderTop: `1px solid rgba(14,42,30,0.2)`,
                textDecoration: 'none', color: ecoColors.bg,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 12, opacity: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</div>
                  <div style={{ ...ecoStyles.display, fontSize: 32, lineHeight: 1.1 }}>{DRI.CONTACT.email}</div>
                </div>
                <span style={{ fontSize: 24 }}>→</span>
              </a>
              <div style={{ padding: '28px 0', borderTop: `1px solid rgba(14,42,30,0.2)`, borderBottom: `1px solid rgba(14,42,30,0.2)` }}>
                <div style={{ fontSize: 12, opacity: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disponibilités</div>
                <div style={{ ...ecoStyles.display, fontSize: 24, lineHeight: 1.2 }}>Lun — Ven · 8h — 19h · Sam matin sur RDV</div>
              </div>
            </div>
          </div>
          <div style={{ background: ecoColors.bg, color: ecoColors.ink, borderRadius: 32, padding: 48 }}>
            <h3 style={{ ...ecoStyles.display, fontSize: 32, margin: '0 0 28px', lineHeight: 1.1 }}>
              Ou écrivez-moi <span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>ici</span>.
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <EcoField label="Prénom et nom" placeholder="Marie Dupont" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <EcoField label="Téléphone" placeholder="06 …" />
                <EcoField label="Email" placeholder="marie@…" />
              </div>
              <EcoField label="Commune" placeholder="Nancy, Lunéville…" />
              <div>
                <label style={{ display: 'block', fontSize: 11, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Type de projet</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['DPE', 'Audit', 'Étude PV', 'Chauffage', 'Rénovation globale', 'Je découvre'].map(b => (
                    <button key={b} style={{ padding: '10px 16px', background: ecoColors.bgPanel, border: `1px solid ${ecoColors.border}`, borderRadius: 100, fontSize: 13, color: ecoColors.ink, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>{b}</button>
                  ))}
                </div>
              </div>
              <EcoField label="Votre projet en quelques mots" placeholder="ex : pavillon 1970 à Lunéville, classé F, on voudrait baisser les factures" multiline />
              <button style={{ width: '100%', padding: '20px 24px', background: ecoColors.lime, color: ecoColors.bg, border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', borderRadius: 100, marginTop: 8 }}>Envoyer ma demande →</button>
              <div style={{ fontSize: 11, color: ecoColors.inkMute, lineHeight: 1.5 }}>Réponse sous 24h ouvrées. Vos données restent confidentielles et ne sont jamais partagées.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoField({ label, placeholder, multiline }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</label>
      {multiline ? (
        <textarea placeholder={placeholder} rows={3} style={{
          width: '100%', padding: '14px 18px', background: ecoColors.bgPanel, border: `1px solid ${ecoColors.border}`, borderRadius: 16,
          fontSize: 15, fontFamily: 'inherit', color: ecoColors.ink, outline: 'none', resize: 'vertical',
        }} />
      ) : (
        <input placeholder={placeholder} style={{
          width: '100%', padding: '14px 18px', background: ecoColors.bgPanel, border: `1px solid ${ecoColors.border}`, borderRadius: 100,
          fontSize: 15, fontFamily: 'inherit', color: ecoColors.ink, outline: 'none',
        }} />
      )}
    </div>
  );
}

function EcoFooter() {
  return (
    <footer style={{ background: ecoColors.bgDeep, color: ecoColors.inkSoft, padding: '80px 0 32px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ ...ecoStyles.display, fontSize: 140, lineHeight: 0.9, color: ecoColors.ink, marginBottom: 64, letterSpacing: '-0.04em' }}>
          Diag Renov Immo<span style={{ color: ecoColors.lime, fontStyle: 'italic' }}>.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: ecoColors.inkSoft, margin: 0, maxWidth: 320 }}>
              Audit énergétique, accompagnement à la rénovation et financement des projets verts. Agréé Mon Accompagnateur Rénov' sur tout le département de la Meurthe-et-Moselle.
            </p>
          </div>
          {[
            ['Services', ['DPE', 'Audit énergétique', 'Étude PV', 'Étude chauffage']],
            ['Société', ['À propos', 'Méthode', 'Blog', 'FAQ']],
            ['Contact', [DRI.CONTACT.phone, DRI.CONTACT.email, DRI.CONTACT.zone]],
          ].map(([head, items]) => (
            <div key={head}>
              <div style={{ fontSize: 11, color: ecoColors.lime, fontFamily: "'JetBrains Mono', monospace", marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{head}</div>
              {items.map(it => <div key={it} style={{ fontSize: 13, marginBottom: 10 }}>{it}</div>)}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: `1px solid ${ecoColors.border}`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: ecoColors.inkMute, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
          <div>© 2026 DIAG RENOV IMMO · TOUS DROITS RÉSERVÉS</div>
          <div>MENTIONS · CGV · COOKIES · CONFIDENTIALITÉ</div>
        </div>
      </div>
    </footer>
  );
}

function VarEco() {
  return (
    <div style={ecoStyles.root}>
      <EcoNav />
      <EcoHero />
      <EcoServices />
      <EcoDPEScale />
      <EcoProcess />
      <EcoAccompagnateur />
      <EcoAides />
      <EcoZone />
      <EcoTestimonials />
      <EcoBlog />
      <EcoContact />
      <EcoFooter />
    </div>
  );
}

window.VarEco = VarEco;
