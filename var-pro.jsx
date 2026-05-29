// Variation 1 — Institutionnel
// Tone: professional, reassuring, formal. Navy + cream. Structured grid.

const proColors = {
  navy: '#0d2745',
  navyDark: '#081a2f',
  cream: '#f5f1e8',
  paper: '#fbf9f4',
  ink: '#0a1626',
  muted: '#5a6b7e',
  border: '#d8d3c3',
  accent: '#c9974a', // brass
  red: '#b8412e',
  green: '#3d6b4a',
};

const proStyles = {
  root: {
    fontFamily: "'Inter', sans-serif",
    color: proColors.ink,
    background: proColors.paper,
    minHeight: '100%',
  },
  serif: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    letterSpacing: '-0.02em',
  },
};

function ProNav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(251,249,244,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${proColors.border}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '18px 56px', display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 4, background: proColors.navy,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: proColors.cream, fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces', serif",
          }}>D</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: proColors.navy, letterSpacing: '0.02em' }}>DIAG RENOV IMMO</div>
            <div style={{ fontSize: 10, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Audit & rénovation énergétique</div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 32, marginLeft: 'auto', alignItems: 'center' }}>
          {['Services', 'Aides', 'Accompagnement', 'Zone', 'Blog', 'Contact'].map(item => (
            <a key={item} href="#" style={{ fontSize: 14, color: proColors.ink, textDecoration: 'none', fontWeight: 500 }}>{item}</a>
          ))}
        </nav>
        <a href="#" style={{
          padding: '12px 22px', background: proColors.navy, color: proColors.cream,
          fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: 2,
        }}>Demander un devis</a>
      </div>
    </div>
  );
}

function ProHero() {
  return (
    <section style={{ background: proColors.paper, borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 56px 100px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', border: `1px solid ${proColors.border}`, borderRadius: 100, fontSize: 12, color: proColors.muted, marginBottom: 32, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, background: proColors.green, borderRadius: '50%' }}></span>
            Agréé Mon Accompagnateur Rénov' · Meurthe-et-Moselle
          </div>
          <h1 style={{ ...proStyles.serif, fontSize: 76, lineHeight: 0.98, margin: '0 0 28px', color: proColors.navy }}>
            L'audit énergétique,<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>fait avec rigueur.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: proColors.muted, maxWidth: 540, margin: '0 0 40px' }}>
            DPE, audits, études photovoltaïques et chauffage. Nous accompagnons les propriétaires de Meurthe-et-Moselle dans leurs projets de rénovation énergétique, du diagnostic à la mise en œuvre.
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 56 }}>
            <a href="#" style={{ padding: '16px 28px', background: proColors.navy, color: proColors.cream, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 2 }}>Estimer mes aides →</a>
            <a href="#" style={{ padding: '16px 28px', background: 'transparent', color: proColors.navy, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 2, border: `1px solid ${proColors.navy}` }}>07 49 13 79 11</a>
          </div>
          <div style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: `1px solid ${proColors.border}` }}>
            {[
              ['Certifié', 'OPQIBI / RGE'],
              ['Agréé', "Mon Accomp. Rénov'"],
              ['Délai', '48h pour un DPE'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: proColors.navy }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', background: proColors.navy,
            display: 'flex', alignItems: 'flex-end', padding: 32, position: 'relative', overflow: 'hidden',
            backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 12px, transparent 12px 24px)`,
          }}>
            <div style={{ position: 'absolute', top: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: 11, color: proColors.cream, opacity: 0.6, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Photo · Inspection thermique</div>
              <div style={{ fontSize: 11, color: proColors.cream, opacity: 0.6, fontFamily: "'DM Mono', monospace" }}>54 · 2026</div>
            </div>
            <div style={{ color: proColors.cream, position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Étude de cas</div>
              <div style={{ ...proStyles.serif, fontSize: 28, lineHeight: 1.1 }}>Pavillon des années 70 passé de G à C</div>
              <div style={{ fontSize: 14, opacity: 0.8, marginTop: 10 }}>Pont-à-Mousson · –1 740 € / an</div>
            </div>
            <DPEMiniBadge />
          </div>
          <div style={{
            position: 'absolute', bottom: -40, left: -40, background: proColors.cream,
            border: `1px solid ${proColors.border}`, padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 16, maxWidth: 280,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%', background: proColors.navy,
              color: proColors.cream, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces', serif",
            }}>A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: proColors.navy }}>Alex, fondateur</div>
              <div style={{ fontSize: 12, color: proColors.muted }}>Diagnostiqueur certifié</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DPEMiniBadge() {
  return (
    <div style={{
      position: 'absolute', top: 70, right: 24, background: proColors.cream, padding: 14,
      width: 130, fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ fontSize: 9, fontWeight: 600, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>DPE Après travaux</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {['A','B','C','D','E','F','G'].map((l, i) => (
          <div key={l} style={{
            flex: l === 'C' ? '0 0 28px' : '0 0 12px',
            height: l === 'C' ? 36 : 22,
            background: DRI.DPE[i].color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0a1626', fontSize: l === 'C' ? 14 : 9, fontWeight: 700,
          }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function ProStats() {
  return (
    <section style={{ background: proColors.navy, color: proColors.cream }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {DRI.STATS.map((s, i) => (
            <div key={i} style={{
              padding: i === 0 ? '0 32px 0 0' : '0 32px',
              borderLeft: i > 0 ? `1px solid rgba(245,241,232,0.15)` : 'none',
            }}>
              <div style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, color: proColors.cream, marginBottom: 12 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: 'rgba(245,241,232,0.7)', lineHeight: 1.4 }}>{s.label}</div>
              {s.source && <div style={{ fontSize: 11, color: 'rgba(245,241,232,0.4)', marginTop: 8, fontFamily: "'DM Mono', monospace" }}>{s.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProServices() {
  return (
    <section style={{ background: proColors.paper, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 80, marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>01 — Nos prestations</div>
            <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: proColors.navy }}>Quatre expertises, un seul interlocuteur.</h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: proColors.muted, margin: 0, alignSelf: 'end', paddingBottom: 12 }}>
            Chaque prestation est conduite par un professionnel certifié et donne lieu à un rapport détaillé, accompagné de recommandations concrètes pour optimiser la performance énergétique de votre bien.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: proColors.border, border: `1px solid ${proColors.border}` }}>
          {DRI.SERVICES.map((s, i) => (
            <div key={s.key} style={{ background: proColors.paper, padding: 40 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: proColors.accent, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>0{i+1} · {s.short}</div>
                <div style={{ fontSize: 12, color: proColors.muted }}>{s.duration}</div>
              </div>
              <h3 style={{ ...proStyles.serif, fontSize: 28, color: proColors.navy, margin: '0 0 12px', lineHeight: 1.1 }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: proColors.muted, lineHeight: 1.55, margin: '0 0 24px' }}>{s.summary}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ fontSize: 14, color: proColors.ink, padding: '10px 0', borderTop: `1px solid ${proColors.border}`, display: 'flex', gap: 12 }}>
                    <span style={{ color: proColors.accent, fontFamily: "'DM Mono', monospace", fontSize: 12, paddingTop: 2 }}>—</span>{b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: `1px solid ${proColors.border}` }}>
                <div>
                  <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Livrable</div>
                  <div style={{ fontSize: 14, color: proColors.navy, fontWeight: 600 }}>{s.deliverable}</div>
                </div>
                <a href="#" style={{ fontSize: 14, color: proColors.navy, fontWeight: 600, textDecoration: 'none', borderBottom: `1px solid ${proColors.navy}`, paddingBottom: 2 }}>En savoir plus →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProDPEScale() {
  const [selected, setSelected] = React.useState('F');
  const data = DRI.DPE.find(d => d.letter === selected);
  return (
    <section style={{ background: proColors.cream, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 80, marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>02 — Échelle DPE</div>
            <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: proColors.navy }}>Comprendre votre classe énergétique.</h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: proColors.muted, margin: 0, alignSelf: 'end', paddingBottom: 12 }}>
            Cliquez sur une lettre pour découvrir ce qu'elle implique en matière de consommation, d'émissions de CO₂ et d'obligations réglementaires.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            {DRI.DPE.map((d) => {
              const active = d.letter === selected;
              return (
                <button key={d.letter} onClick={() => setSelected(d.letter)} style={{
                  width: '100%', display: 'grid', gridTemplateColumns: '60px 80px 1fr 1fr 40px', gap: 0,
                  padding: 0, marginBottom: 4, border: 'none', cursor: 'pointer',
                  background: active ? proColors.navy : 'transparent', color: active ? proColors.cream : proColors.ink,
                  alignItems: 'stretch', textAlign: 'left', transition: 'all 0.15s',
                }}>
                  <div style={{
                    background: d.color, color: '#0a1626',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, fontWeight: 700, fontFamily: "'Fraunces', serif",
                    minHeight: 64,
                  }}>{d.letter}</div>
                  <div style={{ padding: '16px 0 16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Énergie</div>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{d.range}</div>
                  </div>
                  <div style={{ padding: '16px 0 16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>CO₂</div>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{d.co2}</div>
                  </div>
                  <div style={{ padding: '16px 0 16px 20px', display: 'flex', alignItems: 'center', fontSize: 14 }}>{d.label}</div>
                  <div style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{active ? '●' : '○'}</div>
                </button>
              );
            })}
            <div style={{ fontSize: 12, color: proColors.muted, marginTop: 16, fontFamily: "'DM Mono', monospace" }}>kWh<sub>EP</sub>/m²/an &nbsp;·&nbsp; kgCO₂eq/m²/an</div>
          </div>
          <div style={{ background: proColors.paper, border: `1px solid ${proColors.border}`, padding: 40, position: 'sticky', top: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <div style={{
                width: 80, height: 80, background: data.color, color: '#0a1626',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 44, fontWeight: 700, fontFamily: "'Fraunces', serif",
              }}>{data.letter}</div>
              <div>
                <div style={{ fontSize: 12, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Classe énergétique</div>
                <div style={{ ...proStyles.serif, fontSize: 28, color: proColors.navy, lineHeight: 1.05 }}>{data.label}</div>
              </div>
            </div>
            <ProDPEDetail letter={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProDPEDetail({ letter }) {
  const details = {
    A: { status: 'Logement très performant', law: 'Aucune contrainte. Valorisation maximale à la revente.', advice: 'Maintenance préventive : ventilation, étanchéité.' },
    B: { status: 'Logement performant', law: 'Aucune contrainte réglementaire à ce jour.', advice: 'Optimisations ponctuelles possibles (PV, régulation).' },
    C: { status: 'Bonne performance', law: 'Pas de restriction. Objectif visé après rénovation.', advice: 'Ajustements pour viser le B : enveloppe ou chauffage.' },
    D: { status: 'Performance moyenne', law: 'Aucune restriction immédiate.', advice: 'Audit recommandé pour identifier les leviers prioritaires.' },
    E: { status: 'Performance médiocre', law: 'Interdiction de location prévue en 2034.', advice: 'Anticipez : audit + plan de travaux sur 5 ans.' },
    F: { status: 'Passoire énergétique', law: 'Interdiction de location depuis 2028. Hausse de loyer gelée.', advice: 'Rénovation globale prioritaire. Aides majorées disponibles.' },
    G: { status: 'Passoire énergétique sévère', law: 'Interdiction de location depuis 2025.', advice: 'Travaux indispensables. MaPrimeRénov\' Ampleur particulièrement adaptée.' },
  };
  const d = details[letter];
  return (
    <div>
      <div style={{ paddingBottom: 20, borderBottom: `1px solid ${proColors.border}`, marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Statut</div>
        <div style={{ fontSize: 15, color: proColors.ink, fontWeight: 500 }}>{d.status}</div>
      </div>
      <div style={{ paddingBottom: 20, borderBottom: `1px solid ${proColors.border}`, marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Cadre réglementaire</div>
        <div style={{ fontSize: 15, color: proColors.ink, lineHeight: 1.5 }}>{d.law}</div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Notre recommandation</div>
        <div style={{ fontSize: 15, color: proColors.ink, lineHeight: 1.5 }}>{d.advice}</div>
      </div>
      <a href="#" style={{ display: 'block', textAlign: 'center', padding: '14px 24px', background: proColors.navy, color: proColors.cream, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Demander un diagnostic →</a>
    </div>
  );
}

function ProAccompagnateur() {
  return (
    <section style={{ background: proColors.navy, color: proColors.cream, padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', border: `1px solid rgba(245,241,232,0.2)`, borderRadius: 100, fontSize: 12, marginBottom: 32, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, background: proColors.accent, borderRadius: '50%' }}></span>
            Agrément officiel
          </div>
          <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: '0 0 24px' }}>Mon Accompagnateur Rénov'.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(245,241,232,0.75)', margin: '0 0 32px', maxWidth: 480 }}>
            Diag Renov Immo est agréé sur l'ensemble de la Meurthe-et-Moselle pour vous accompagner de l'audit initial à la fin des travaux, en passant par toutes les démarches administratives.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
            {[
              ['Prestation prise en charge', "jusqu'à 2 000 € par l'État"],
              ['Obligatoire pour', "MaPrimeRénov' Ampleur"],
              ['Périmètre', 'Audit, dossiers, suivi chantier'],
              ['Indépendant', "Aucun lien artisan"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 11, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
          <a href="#" style={{ display: 'inline-block', padding: '16px 28px', background: proColors.cream, color: proColors.navy, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Démarrer mon projet →</a>
        </div>
        <div style={{
          aspectRatio: '4/3', background: proColors.navyDark,
          padding: 40, position: 'relative', overflow: 'hidden',
          backgroundImage: `repeating-linear-gradient(0deg, rgba(245,241,232,0.04) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(245,241,232,0.04) 0 1px, transparent 1px 60px)`,
        }}>
          <div style={{ position: 'absolute', top: 24, left: 24, fontSize: 11, opacity: 0.5, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Photo · Alex sur chantier, Toul</div>
          <div style={{ position: 'absolute', inset: 100, background: 'rgba(245,241,232,0.05)', border: `1px dashed rgba(245,241,232,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,241,232,0.4)', fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
            [ image_slot — équipe sur le terrain ]
          </div>
          <div style={{ position: 'absolute', bottom: 24, right: 24, background: proColors.cream, color: proColors.navy, padding: '16px 20px', maxWidth: 240 }}>
            <div style={{ fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Agrément n°</div>
            <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>MAR-54-2024-0847</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProAides() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({ revenu: '', logement: '', surface: '', annee: '' });

  const questions = [
    { key: 'revenu', label: 'Quel est votre profil de revenus ?', options: ['Très modeste', 'Modeste', 'Intermédiaire', 'Supérieur'] },
    { key: 'logement', label: 'Type de logement', options: ['Maison individuelle', 'Appartement'] },
    { key: 'surface', label: 'Surface habitable', options: ['< 70 m²', '70 — 120 m²', '120 — 180 m²', '> 180 m²'] },
    { key: 'annee', label: 'Année de construction', options: ['Avant 1948', '1948 — 1975', '1975 — 2000', 'Après 2000'] },
  ];

  const result = answers.revenu === 'Très modeste' ? '32 000 €' :
    answers.revenu === 'Modeste' ? '24 000 €' :
    answers.revenu === 'Intermédiaire' ? '15 000 €' :
    answers.revenu === 'Supérieur' ? '8 000 €' : '—';

  return (
    <section style={{ background: proColors.paper, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 80, marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>03 — Financement</div>
            <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: proColors.navy }}>Les aides mobilisables.</h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: proColors.muted, margin: 0, alignSelf: 'end', paddingBottom: 12 }}>
            Jusqu'à 90 % du montant HT des travaux peut être pris en charge. Notre rôle : monter les dossiers et garantir le bon versement des aides.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64 }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: proColors.border, border: `1px solid ${proColors.border}` }}>
              {DRI.AIDES.map(a => (
                <div key={a.name} style={{ background: proColors.paper, padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ ...proStyles.serif, fontSize: 22, color: proColors.navy, lineHeight: 1.1, maxWidth: 200 }}>{a.name}</div>
                    <div style={{ fontSize: 10, padding: '4px 8px', background: proColors.navy, color: proColors.cream, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{a.pill}</div>
                  </div>
                  <div style={{ ...proStyles.serif, fontSize: 32, color: proColors.accent, lineHeight: 1, marginBottom: 12 }}>{a.amount}</div>
                  <div style={{ fontSize: 13, color: proColors.muted, lineHeight: 1.5 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: proColors.navy, color: proColors.cream, padding: 36, position: 'sticky', top: 100, height: 'fit-content' }}>
            <div style={{ fontSize: 11, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8, fontWeight: 600 }}>Simulateur · 30 sec</div>
            <h3 style={{ ...proStyles.serif, fontSize: 28, margin: '0 0 24px', lineHeight: 1.1 }}>Estimez vos aides en quelques clics.</h3>
            <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 3, background: i <= step ? proColors.accent : 'rgba(245,241,232,0.2)' }}></div>
              ))}
            </div>
            {step < questions.length ? (
              <>
                <div style={{ fontSize: 12, color: 'rgba(245,241,232,0.6)', marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Question {step + 1}/{questions.length}</div>
                <div style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.4 }}>{questions[step].label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                  {questions[step].options.map(opt => (
                    <button key={opt} onClick={() => {
                      setAnswers({ ...answers, [questions[step].key]: opt });
                      setStep(step + 1);
                    }} style={{
                      padding: '14px 18px', background: answers[questions[step].key] === opt ? proColors.accent : 'rgba(245,241,232,0.06)',
                      border: `1px solid rgba(245,241,232,${answers[questions[step].key] === opt ? '0' : '0.15'})`, color: proColors.cream,
                      textAlign: 'left', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                      transition: 'all 0.15s',
                    }}>{opt}</button>
                  ))}
                </div>
                {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: 'transparent', border: 'none', color: 'rgba(245,241,232,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>← Précédent</button>}
              </>
            ) : (
              <>
                <div style={{ fontSize: 12, color: 'rgba(245,241,232,0.6)', marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Estimation</div>
                <div style={{ fontSize: 13, color: 'rgba(245,241,232,0.7)', marginBottom: 24, lineHeight: 1.5 }}>Sur la base de vos réponses, vous pourriez bénéficier d'environ :</div>
                <div style={{ ...proStyles.serif, fontSize: 64, lineHeight: 1, color: proColors.accent, marginBottom: 8 }}>{result}</div>
                <div style={{ fontSize: 14, color: 'rgba(245,241,232,0.7)', marginBottom: 28 }}>d'aides cumulées sur un projet de rénovation globale</div>
                <a href="#" style={{ display: 'block', textAlign: 'center', padding: '14px 24px', background: proColors.cream, color: proColors.navy, fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 12 }}>Étudier mon dossier →</a>
                <button onClick={() => { setStep(0); setAnswers({ revenu: '', logement: '', surface: '', annee: '' }); }} style={{ background: 'transparent', border: 'none', color: 'rgba(245,241,232,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>↺ Recommencer</button>
              </>
            )}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid rgba(245,241,232,0.15)`, fontSize: 11, color: 'rgba(245,241,232,0.5)', lineHeight: 1.5 }}>
              Estimation indicative. Le montant définitif dépend du projet de travaux et est validé par l'Anah.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProZone() {
  const cities = [
    { name: 'Nancy', x: 50, y: 55 },
    { name: 'Lunéville', x: 70, y: 60 },
    { name: 'Toul', x: 35, y: 50 },
    { name: 'Pont-à-Mousson', x: 48, y: 35 },
    { name: 'Longwy', x: 38, y: 12 },
    { name: 'Briey', x: 30, y: 25 },
    { name: 'Baccarat', x: 80, y: 72 },
  ];
  return (
    <section style={{ background: proColors.cream, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>04 — Zone d'intervention</div>
            <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: '0 0 24px', color: proColors.navy }}>Tout le département,<br/>de Longwy à Baccarat.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: proColors.muted, margin: '0 0 40px' }}>
              Diag Renov Immo intervient sur l'ensemble de la Meurthe-et-Moselle. Nous nous déplaçons gratuitement pour le premier contact dans un rayon de 60 km autour de Nancy.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 40 }}>
              {cities.map(c => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: proColors.paper, border: `1px solid ${proColors.border}` }}>
                  <span style={{ width: 6, height: 6, background: proColors.green, borderRadius: '50%' }}></span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: proColors.navy }}>{c.name}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, color: proColors.muted, fontStyle: 'italic' }}>… et toutes les communes intermédiaires. Une question ? Appelez le {DRI.CONTACT.phone}.</div>
          </div>
          <div style={{
            aspectRatio: '1', background: proColors.paper, border: `1px solid ${proColors.border}`,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 24, left: 24, fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 2 }}>Meurthe-et-Moselle · 54</div>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <path d="M 25 8 L 55 5 L 65 18 L 60 30 L 75 40 L 70 55 L 85 65 L 75 80 L 60 85 L 45 80 L 30 70 L 25 55 L 15 40 L 20 25 Z" fill={proColors.cream} stroke={proColors.navy} strokeWidth="0.5" />
              {cities.map(c => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="1.5" fill={proColors.accent} />
                  <text x={c.x + 2.5} y={c.y + 1} fontSize="2.5" fill={proColors.navy} fontFamily="Inter">{c.name}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: 'absolute', bottom: 24, right: 24, background: proColors.navy, color: proColors.cream, padding: '12px 16px', fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: '0.1em' }}>54 · LORRAINE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProTestimonials() {
  return (
    <section style={{ background: proColors.paper, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>05 — Témoignages</div>
          <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: proColors.navy, maxWidth: 800 }}>Ce que disent les propriétaires accompagnés.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: proColors.border, border: `1px solid ${proColors.border}` }}>
          {DRI.TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: proColors.paper, padding: 36, display: 'flex', flexDirection: 'column' }}>
              <div style={{ ...proStyles.serif, fontSize: 64, color: proColors.accent, lineHeight: 0.5, marginBottom: 16, fontStyle: 'italic' }}>“</div>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: proColors.ink, margin: '0 0 28px', flex: 1 }}>{t.quote}</p>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${proColors.border}` }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: proColors.navy }}>{t.name}</div>
                <div style={{ fontSize: 12, color: proColors.muted }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProBlog() {
  return (
    <section style={{ background: proColors.cream, padding: '120px 0', borderBottom: `1px solid ${proColors.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 11, color: proColors.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>06 — Actualités</div>
            <h2 style={{ ...proStyles.serif, fontSize: 56, lineHeight: 1, margin: 0, color: proColors.navy }}>Comprendre la rénovation énergétique.</h2>
          </div>
          <a href="#" style={{ fontSize: 14, color: proColors.navy, fontWeight: 600, textDecoration: 'none', borderBottom: `1px solid ${proColors.navy}`, paddingBottom: 2 }}>Tous les articles →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DRI.BLOG.map((b, i) => (
            <a key={i} href="#" style={{ background: proColors.paper, border: `1px solid ${proColors.border}`, padding: 0, textDecoration: 'none', display: 'block' }}>
              <div style={{ aspectRatio: '4/3', background: proColors.navy, position: 'relative', backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 8px, transparent 8px 16px)' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,241,232,0.4)', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>[ photo article ]</div>
                <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 10, padding: '4px 8px', background: proColors.cream, color: proColors.navy, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{b.cat}</div>
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: proColors.muted, marginBottom: 14, fontFamily: "'DM Mono', monospace" }}>
                  <span>{b.date}</span><span>{b.readTime}</span>
                </div>
                <h3 style={{ ...proStyles.serif, fontSize: 22, color: proColors.navy, margin: '0 0 12px', lineHeight: 1.2 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: proColors.muted, lineHeight: 1.5, margin: 0 }}>{b.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProContact() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({ projet: '', surface: '', nom: '', email: '', tel: '' });
  return (
    <section style={{ background: proColors.navy, color: proColors.cream, padding: '120px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
        <div>
          <div style={{ fontSize: 11, color: proColors.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>07 — Contact</div>
          <h2 style={{ ...proStyles.serif, fontSize: 64, lineHeight: 0.98, margin: '0 0 32px' }}>Discutons de votre projet.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(245,241,232,0.75)', margin: '0 0 48px' }}>
            Un échange téléphonique gratuit de 15 minutes pour cerner vos besoins, identifier les aides mobilisables et vous orienter vers la bonne prestation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              ['Téléphone', DRI.CONTACT.phone],
              ['Email', DRI.CONTACT.email],
              ['Zone', DRI.CONTACT.zone],
              ['Horaires', 'Lun – Ven · 8h – 19h'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', paddingBottom: 24, borderBottom: `1px solid rgba(245,241,232,0.15)` }}>
                <div style={{ fontSize: 12, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{k}</div>
                <div style={{ fontSize: 17, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: proColors.cream, color: proColors.ink, padding: 48 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ flex: 1, height: 3, background: i <= step ? proColors.navy : proColors.border }}></div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: proColors.muted, marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Étape {step}/3</div>
          {step === 1 && (
            <>
              <h3 style={{ ...proStyles.serif, fontSize: 28, color: proColors.navy, margin: '0 0 24px', lineHeight: 1.1 }}>Quel est votre projet ?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 32 }}>
                {['DPE', 'Audit énergétique', 'Étude PV', 'Étude chauffage', "Rénovation globale", 'Je ne sais pas'].map(opt => (
                  <button key={opt} onClick={() => { setForm({...form, projet: opt}); setStep(2); }} style={{
                    padding: '18px 20px', background: form.projet === opt ? proColors.navy : proColors.paper,
                    color: form.projet === opt ? proColors.cream : proColors.ink,
                    border: `1px solid ${proColors.border}`, textAlign: 'left',
                    fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                  }}>{opt}</button>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h3 style={{ ...proStyles.serif, fontSize: 28, color: proColors.navy, margin: '0 0 24px', lineHeight: 1.1 }}>Quelques infos sur le logement.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                <ProField label="Surface (m²)" placeholder="ex : 120" />
                <ProField label="Année de construction" placeholder="ex : 1978" />
                <ProField label="Commune" placeholder="ex : Nancy" />
                <ProField label="Énergie de chauffage actuelle" placeholder="ex : gaz, fioul, électrique…" />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px 24px', background: 'transparent', color: proColors.navy, border: `1px solid ${proColors.navy}`, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>← Précédent</button>
                <button onClick={() => setStep(3)} style={{ flex: 2, padding: '14px 24px', background: proColors.navy, color: proColors.cream, border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Continuer →</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h3 style={{ ...proStyles.serif, fontSize: 28, color: proColors.navy, margin: '0 0 24px', lineHeight: 1.1 }}>Comment vous joindre ?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                <ProField label="Nom et prénom" placeholder="Marie Dupont" />
                <ProField label="Email" placeholder="marie@exemple.fr" />
                <ProField label="Téléphone" placeholder="06 …" />
                <ProField label="Disponibilités" placeholder="ex : en semaine après 18h" />
              </div>
              <button style={{ width: '100%', padding: '16px 24px', background: proColors.navy, color: proColors.cream, border: 'none', fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', marginBottom: 16 }}>Envoyer ma demande →</button>
              <div style={{ fontSize: 11, color: proColors.muted, lineHeight: 1.5 }}>En envoyant ce formulaire, vous acceptez d'être recontacté par Diag Renov Immo. Vos données ne sont jamais partagées.</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ProField({ label, placeholder }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, color: proColors.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, fontWeight: 600 }}>{label}</label>
      <input placeholder={placeholder} style={{
        width: '100%', padding: '14px 16px', background: proColors.paper, border: `1px solid ${proColors.border}`,
        fontSize: 15, fontFamily: 'inherit', color: proColors.ink, outline: 'none',
      }} />
    </div>
  );
}

function ProFooter() {
  return (
    <footer style={{ background: proColors.navyDark, color: 'rgba(245,241,232,0.7)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 4, background: proColors.cream, color: proColors.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces', serif" }}>D</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: proColors.cream, letterSpacing: '0.02em' }}>DIAG RENOV IMMO</div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 280 }}>Audit, diagnostic et accompagnement à la rénovation énergétique. Agréé Mon Accompagnateur Rénov' en Meurthe-et-Moselle.</p>
          </div>
          <div>
            <div style={{ fontSize: 11, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16, fontWeight: 600 }}>Services</div>
            {['DPE', 'Audit énergétique', 'Étude PV', 'Étude chauffage'].map(s => <div key={s} style={{ fontSize: 13, marginBottom: 10 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 11, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16, fontWeight: 600 }}>Société</div>
            {['À propos', 'Accompagnement', 'Blog', 'Témoignages'].map(s => <div key={s} style={{ fontSize: 13, marginBottom: 10 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 11, color: proColors.accent, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16, fontWeight: 600 }}>Contact</div>
            <div style={{ fontSize: 13, marginBottom: 10 }}>{DRI.CONTACT.phone}</div>
            <div style={{ fontSize: 13, marginBottom: 10 }}>{DRI.CONTACT.email}</div>
            <div style={{ fontSize: 13, marginBottom: 10 }}>{DRI.CONTACT.zone}</div>
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: `1px solid rgba(245,241,232,0.1)`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(245,241,232,0.4)', fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>
          <div>© 2026 DIAG RENOV IMMO · SIRET 000 000 000 00000</div>
          <div>MENTIONS LÉGALES · CGV · COOKIES</div>
        </div>
      </div>
    </footer>
  );
}

function VarPro() {
  return (
    <div style={proStyles.root}>
      <ProNav />
      <ProHero />
      <ProStats />
      <ProServices />
      <ProDPEScale />
      <ProAccompagnateur />
      <ProAides />
      <ProZone />
      <ProTestimonials />
      <ProBlog />
      <ProContact />
      <ProFooter />
    </div>
  );
}

window.VarPro = VarPro;
