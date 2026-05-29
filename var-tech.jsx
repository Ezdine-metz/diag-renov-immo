// Variation 4 — Expert technique
// Tone: technical, data-driven, engineering. Black + signal yellow. Monospace heavy.

const techColors = {
  bg: '#0a0a0a',
  bgPanel: '#161616',
  bgDeep: '#050505',
  ink: '#f5f5f0',
  inkSoft: 'rgba(245,245,240,0.65)',
  inkMute: 'rgba(245,245,240,0.4)',
  border: 'rgba(245,245,240,0.1)',
  borderStrong: 'rgba(245,245,240,0.25)',
  yellow: '#e8ff5a',
  amber: '#ffb547',
  red: '#ff5544',
  green: '#52d97e',
};

const techStyles = {
  root: {
    fontFamily: "'Inter', sans-serif",
    color: techColors.ink,
    background: techColors.bg,
    minHeight: '100%',
  },
  mono: {
    fontFamily: "'JetBrains Mono', monospace",
  },
};

function TechBadge({ children, color = techColors.yellow }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 8px', background: color, color: techColors.bg,
      ...techStyles.mono, fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
    }}>{children}</span>
  );
}

function TechSectionLabel({ num, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.yellow, letterSpacing: '0.05em' }}>[{num}]</div>
      <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.inkSoft, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{children}</div>
      <div style={{ flex: 1, height: 1, background: techColors.border }}></div>
    </div>
  );
}

function TechNav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: techColors.bg,
      borderBottom: `1px solid ${techColors.border}`,
    }}>
      <div style={{ ...techStyles.mono, padding: '6px 56px', borderBottom: `1px solid ${techColors.border}`, fontSize: 11, color: techColors.inkSoft, letterSpacing: '0.08em', display: 'flex', justifyContent: 'space-between' }}>
        <span><span style={{ color: techColors.green }}>●</span> Disponible · LUN—VEN 08:00→19:00 · 54 LORRAINE</span>
        <span>{DRI.CONTACT.phone} &nbsp;·&nbsp; {DRI.CONTACT.email}</span>
      </div>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '16px 56px', display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, background: techColors.yellow,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: techColors.bg, ...techStyles.mono, fontSize: 18, fontWeight: 700,
          }}>D/</div>
          <div>
            <div style={{ ...techStyles.mono, fontSize: 15, color: techColors.ink, letterSpacing: '0.02em', fontWeight: 600 }}>DIAG_RENOV_IMMO</div>
            <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.inkMute, letterSpacing: '0.05em' }}>v2026.04 · build 8472</div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 'auto', alignItems: 'center', ...techStyles.mono }}>
          {['/services', '/dpe', '/aides', '/zone', '/blog', '/contact'].map(item => (
            <a key={item} href="#" style={{ fontSize: 13, color: techColors.ink, textDecoration: 'none' }}>{item}</a>
          ))}
        </nav>
        <a href="#" style={{
          padding: '12px 22px', background: techColors.yellow, color: techColors.bg,
          ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none',
          letterSpacing: '0.05em', textTransform: 'uppercase',
        }}>→ devis_gratuit.exe</a>
      </div>
    </div>
  );
}

function TechHero() {
  return (
    <section style={{ background: techColors.bg, padding: '64px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        {/* Top stat band */}
        <div style={{
          ...techStyles.mono, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          padding: '14px 0', borderTop: `1px solid ${techColors.border}`, borderBottom: `1px solid ${techColors.border}`,
          fontSize: 11, color: techColors.inkSoft, marginBottom: 48,
        }}>
          {[
            ['STATUS', 'Opérationnel'],
            ['ZONE', 'Meurthe-et-Moselle [54]'],
            ['AGRÉMENT', 'MAR-54-2024-0847'],
            ['CERTIF', 'OPQIBI · RGE'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: 12 }}>
              <span style={{ color: techColors.yellow }}>{k}</span>
              <span>:</span>
              <span style={{ color: techColors.ink }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 32 }}>
              <TechBadge color={techColors.yellow}>● Live · Demande de devis ouverte</TechBadge>
            </div>
            <h1 style={{
              fontSize: 144, lineHeight: 0.92, margin: '0 0 32px',
              color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em',
            }}>
              Audit<br/>
              énergétique.<br/>
              <span style={{ color: techColors.yellow, fontStyle: 'italic', fontWeight: 400, fontFamily: "'Fraunces', serif" }}>Sans bullshit.</span>
            </h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48, maxWidth: 700 }}>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: techColors.inkSoft, margin: 0 }}>
                DPE, audit, étude PV, étude chauffage. Mesures conformes à la méthode 3CL-2021, calculs détaillés, scénarios chiffrés. Pas de pitch commercial, juste des données.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: techColors.inkSoft, margin: 0 }}>
                Agréé Mon Accompagnateur Rénov' sur tout le 54. Indépendant. Aucun lien commercial avec un artisan, un fabricant ou un installateur.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" style={{
                padding: '18px 28px', background: techColors.yellow, color: techColors.bg,
                ...techStyles.mono, fontSize: 14, fontWeight: 700, textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: 12,
              }}>
                → Diagnostiquer mon logement
              </a>
              <a href="#" style={{
                padding: '18px 28px', background: 'transparent', color: techColors.ink,
                ...techStyles.mono, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                border: `1px solid ${techColors.borderStrong}`,
              }}>$ ./contact.sh</a>
            </div>
          </div>
          <div>
            {/* Big console card */}
            <div style={{ background: techColors.bgPanel, border: `1px solid ${techColors.border}`, padding: 0, marginBottom: 16 }}>
              <div style={{ padding: '10px 16px', borderBottom: `1px solid ${techColors.border}`, display: 'flex', justifyContent: 'space-between', ...techStyles.mono, fontSize: 11, color: techColors.inkSoft }}>
                <span>~/diag_renov_immo/case_study.log</span>
                <span style={{ color: techColors.yellow }}>● rec</span>
              </div>
              <div style={{ padding: 24, ...techStyles.mono, fontSize: 13, lineHeight: 1.7 }}>
                <div style={{ color: techColors.inkMute }}>// case_id: 2025-0847</div>
                <div style={{ color: techColors.inkMute }}>// location: Pont-à-Mousson</div>
                <div style={{ color: techColors.inkMute, marginBottom: 12 }}>// type: pavillon 1972, 138 m²</div>
                <div style={{ color: techColors.ink }}><span style={{ color: techColors.yellow }}>{'>'}</span> diag.run()</div>
                <div style={{ color: techColors.inkSoft, paddingLeft: 16 }}>analysing envelope...</div>
                <div style={{ color: techColors.inkSoft, paddingLeft: 16 }}>measuring U-values...</div>
                <div style={{ color: techColors.inkSoft, paddingLeft: 16, marginBottom: 10 }}>computing scenarios...</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '14px 0', borderTop: `1px dashed ${techColors.border}`, borderBottom: `1px dashed ${techColors.border}`, marginBottom: 14 }}>
                  <div>
                    <div style={{ color: techColors.inkMute, fontSize: 11 }}>DPE_INITIAL</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                      <span style={{ width: 28, height: 28, background: '#e3211c', color: techColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, fontFamily: 'Inter' }}>G</span>
                      <span style={{ color: techColors.ink }}>481 kWh/m²/an</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: techColors.inkMute, fontSize: 11 }}>DPE_CIBLE</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                      <span style={{ width: 28, height: 28, background: '#bbcf3a', color: techColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, fontFamily: 'Inter' }}>C</span>
                      <span style={{ color: techColors.ink }}>148 kWh/m²/an</span>
                    </div>
                  </div>
                </div>
                <div style={{ color: techColors.green }}>{'>'} économies_annuelles  = 1 743 €</div>
                <div style={{ color: techColors.green }}>{'>'} aides_mobilisables  = 28 400 €</div>
                <div style={{ color: techColors.green }}>{'>'} reste_à_charge      = 7 100 €</div>
                <div style={{ color: techColors.inkMute, marginTop: 8 }}>// ROI : 4.1 ans</div>
              </div>
            </div>
            <div style={{ background: techColors.yellow, color: techColors.bg, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ ...techStyles.mono, fontSize: 11, opacity: 0.8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cas réel · client 2025</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>Pavillon classé G → C</div>
              </div>
              <a href="#" style={{ ...techStyles.mono, fontSize: 13, color: techColors.bg, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>→ Voir le rapport</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStats() {
  return (
    <section style={{ background: techColors.bgDeep, padding: '80px 0', borderTop: `1px solid ${techColors.border}`, borderBottom: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="01">Données de cadrage · France · 2026</TechSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 40 }}>
          {DRI.STATS.map((s, i) => (
            <div key={i} style={{
              padding: '32px 32px 32px 0',
              borderRight: i < DRI.STATS.length - 1 ? `1px solid ${techColors.border}` : 'none',
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{ fontSize: 72, lineHeight: 1, color: techColors.yellow, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>{s.value}</div>
              <div style={{ fontSize: 15, color: techColors.ink, lineHeight: 1.4 }}>{s.label}</div>
              {s.source && <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkMute, marginTop: 12 }}>// {s.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechServices() {
  return (
    <section style={{ background: techColors.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="02">Prestations · Mesure & calcul</TechSectionLabel>
        <h2 style={{ fontSize: 80, lineHeight: 0.95, margin: '24px 0 64px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em', maxWidth: 1200 }}>
          Mesurer. Calculer.<br/>
          <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>Recommander.</span>
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', ...techStyles.mono }}>
          <thead>
            <tr style={{ borderTop: `1px solid ${techColors.borderStrong}`, borderBottom: `1px solid ${techColors.borderStrong}` }}>
              {['#', 'Prestation', 'Méthode', 'Durée', 'Livrable', 'Tarif', ''].map(h => (
                <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, color: techColors.inkSoft, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DRI.SERVICES.map((s, i) => {
              const methods = ['3CL-2021', 'TH-C-E-EX', 'PVGIS + Helios', 'Th-BCE'];
              const prices = ['180 €', '850 €', '320 €', '280 €'];
              return (
                <tr key={s.key} style={{ borderBottom: `1px solid ${techColors.border}` }}>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', color: techColors.yellow, fontWeight: 700, width: 50 }}>0{i+1}</td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <div style={{ fontSize: 18, color: techColors.ink, fontWeight: 600, marginBottom: 6, fontFamily: 'Inter' }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: techColors.inkSoft, fontFamily: 'Inter', lineHeight: 1.5, maxWidth: 400 }}>{s.summary}</div>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', color: techColors.ink, fontSize: 13 }}>{methods[i]}</td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', color: techColors.ink, fontSize: 13 }}>{s.duration}</td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', color: techColors.ink, fontSize: 13, maxWidth: 200, fontFamily: 'Inter' }}>{s.deliverable}</td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', color: techColors.yellow, fontSize: 16, fontWeight: 700 }}>{prices[i]}</td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', textAlign: 'right' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: techColors.bgPanel, color: techColors.yellow, fontSize: 12, fontWeight: 700, textDecoration: 'none', border: `1px solid ${techColors.border}`, letterSpacing: '0.05em', textTransform: 'uppercase' }}>→ Devis</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ marginTop: 32, padding: 24, background: techColors.bgPanel, border: `1px solid ${techColors.border}`, ...techStyles.mono, fontSize: 13, color: techColors.inkSoft, lineHeight: 1.6 }}>
          <div style={{ color: techColors.yellow, marginBottom: 8 }}>// note</div>
          Les tarifs ci-dessus sont indicatifs pour un logement de 100 m². Devis personnalisé en fonction de la surface, du nombre de niveaux et de la complexité du bâti. Réduction de 15% pour audit + DPE combinés.
        </div>
      </div>
    </section>
  );
}

function TechDPEScale() {
  const [selected, setSelected] = React.useState('F');
  const data = DRI.DPE.find(d => d.letter === selected);
  const idx = DRI.DPE.findIndex(d => d.letter === selected);
  return (
    <section style={{ background: techColors.bgDeep, padding: '100px 0', borderTop: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="03">Classification DPE · arrêté du 31/03/2021</TechSectionLabel>
        <h2 style={{ fontSize: 72, lineHeight: 0.95, margin: '24px 0 56px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
          Échelle interactive <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>A → G</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <div style={{ background: techColors.bg, border: `1px solid ${techColors.border}`, padding: 0 }}>
              <div style={{ ...techStyles.mono, padding: '10px 16px', borderBottom: `1px solid ${techColors.border}`, fontSize: 11, color: techColors.inkSoft, letterSpacing: '0.05em', display: 'grid', gridTemplateColumns: '50px 1fr 1fr 1fr 1fr', gap: 0 }}>
                <span>CLS</span><span>LIBELLÉ</span><span>kWh/m²/an</span><span>kgCO₂/m²/an</span><span>STATUT</span>
              </div>
              {DRI.DPE.map((d, i) => {
                const active = d.letter === selected;
                const status = i < 5 ? 'OK' : i === 5 ? 'INTERDIT_2028' : 'INTERDIT_2025';
                const statusColor = i < 4 ? techColors.green : i < 5 ? techColors.amber : techColors.red;
                return (
                  <button key={d.letter} onClick={() => setSelected(d.letter)} style={{
                    width: '100%', display: 'grid', gridTemplateColumns: '50px 1fr 1fr 1fr 1fr', gap: 0,
                    padding: '14px 16px', border: 'none', cursor: 'pointer',
                    background: active ? techColors.bgPanel : 'transparent',
                    borderBottom: `1px solid ${techColors.border}`,
                    color: techColors.ink, textAlign: 'left',
                    ...techStyles.mono, fontSize: 13,
                  }}>
                    <span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, background: d.color, color: techColors.bg, fontWeight: 700, fontFamily: 'Inter', fontSize: 14 }}>{d.letter}</span>
                    </span>
                    <span style={{ alignSelf: 'center', fontFamily: 'Inter', fontSize: 14, color: active ? techColors.yellow : techColors.ink, fontWeight: active ? 600 : 400 }}>{d.label}</span>
                    <span style={{ alignSelf: 'center', color: techColors.inkSoft }}>{d.range}</span>
                    <span style={{ alignSelf: 'center', color: techColors.inkSoft }}>{d.co2}</span>
                    <span style={{ alignSelf: 'center', color: statusColor, fontSize: 11 }}>● {status}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <div style={{ background: techColors.bg, border: `1px solid ${techColors.border}`, padding: 32 }}>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkSoft, marginBottom: 16, letterSpacing: '0.05em' }}>/classe/{data.letter.toLowerCase()}/detail.json</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 32 }}>
                <div style={{ width: 120, height: 120, background: data.color, color: techColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, fontWeight: 800, letterSpacing: '-0.04em' }}>{data.letter}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.yellow, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>Classe énergétique</div>
                  <div style={{ fontSize: 28, color: techColors.ink, fontWeight: 700, lineHeight: 1.1, marginBottom: 14 }}>{data.label}</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <TechBadge color={idx >= 5 ? techColors.red : idx >= 4 ? techColors.amber : techColors.green}>
                      {idx >= 5 ? 'Passoire' : idx >= 4 ? 'À surveiller' : 'Conforme'}
                    </TechBadge>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: 28, border: `1px solid ${techColors.border}` }}>
                <div style={{ padding: 18, borderRight: `1px solid ${techColors.border}` }}>
                  <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.inkMute, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>Énergie primaire</div>
                  <div style={{ ...techStyles.mono, fontSize: 22, color: techColors.yellow, fontWeight: 600 }}>{data.range}</div>
                  <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.inkMute }}>kWh/m²/an</div>
                </div>
                <div style={{ padding: 18 }}>
                  <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.inkMute, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>Émissions GES</div>
                  <div style={{ ...techStyles.mono, fontSize: 22, color: techColors.yellow, fontWeight: 600 }}>{data.co2}</div>
                  <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.inkMute }}>kgCO₂/m²/an</div>
                </div>
              </div>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.yellow, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>// Cadre réglementaire</div>
              <p style={{ fontSize: 14, color: techColors.ink, lineHeight: 1.6, margin: '0 0 24px' }}>
                {idx === 6 && 'Location interdite depuis le 01/01/2025 (loi Climat). Gel des loyers en vigueur. Travaux indispensables pour relouer.'}
                {idx === 5 && 'Location interdite depuis le 01/01/2028. Audit énergétique obligatoire à la vente.'}
                {idx === 4 && 'Interdiction de location prévue pour le 01/01/2034. Anticipation fortement recommandée.'}
                {idx === 3 && 'Aucune restriction immédiate. Performance énergétique moyenne, marges d\'amélioration significatives.'}
                {idx < 3 && 'Logement performant. Aucune contrainte réglementaire. Valorisation à la revente.'}
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="#" style={{ flex: 1, padding: '14px 20px', background: techColors.yellow, color: techColors.bg, ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase' }}>→ Faire un DPE</a>
                <a href="#" style={{ flex: 1, padding: '14px 20px', background: techColors.bgPanel, color: techColors.ink, ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', border: `1px solid ${techColors.border}` }}>→ Audit complet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechAccompagnateur() {
  return (
    <section style={{ background: techColors.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="04">Agrément Mon Accompagnateur Rénov'</TechSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, marginTop: 40 }}>
          <div>
            <h2 style={{ fontSize: 80, lineHeight: 0.95, margin: '0 0 32px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
              Accompagnateur<br/>
              <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>certifié</span>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: techColors.inkSoft, margin: '0 0 40px', maxWidth: 560 }}>
              L'agrément MAR (Mon Accompagnateur Rénov') est délivré par l'Anah. Il est obligatoire pour mobiliser MaPrimeRénov' Ampleur et donne accès à un suivi de chantier indépendant.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${techColors.border}`, marginBottom: 32 }}>
              {[
                ['CAPEX accompagnement', "jusqu'à 2 000 €", 'pris en charge'],
                ['Audit énergétique', '850 €', 'inclus'],
                ['Montage dossiers', '∞', 'inclus'],
                ['Suivi chantier', '5 visites', 'inclus'],
              ].map(([k, v, sub], i) => (
                <div key={k} style={{ padding: 24, borderRight: i % 2 === 0 ? `1px solid ${techColors.border}` : 'none', borderBottom: i < 2 ? `1px solid ${techColors.border}` : 'none' }}>
                  <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkMute, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>{k}</div>
                  <div style={{ ...techStyles.mono, fontSize: 24, color: techColors.yellow, fontWeight: 700, marginBottom: 4 }}>{v}</div>
                  <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkSoft }}>// {sub}</div>
                </div>
              ))}
            </div>
            <a href="#" style={{
              padding: '16px 28px', background: techColors.yellow, color: techColors.bg,
              ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 12,
            }}>→ Démarrer un dossier MAR</a>
          </div>
          <div style={{ background: techColors.bgPanel, border: `1px solid ${techColors.borderStrong}`, padding: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${techColors.border}` }}>
              <div>
                <div style={{ ...techStyles.mono, fontSize: 10, color: techColors.yellow, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>● Certificat actif</div>
                <div style={{ fontSize: 22, color: techColors.ink, fontWeight: 700, lineHeight: 1.1 }}>Mon Accompagnateur Rénov'</div>
              </div>
              <div style={{ width: 56, height: 56, background: techColors.green, color: techColors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700 }}>✓</div>
            </div>
            <div style={{ ...techStyles.mono, fontSize: 13, lineHeight: 2 }}>
              {[
                ['titulaire', 'Diag Renov Immo'],
                ['numero', 'MAR-54-2024-0847'],
                ['perimetre', 'Meurthe-et-Moselle [54]'],
                ['délivré_par', 'Anah / Préf. 54'],
                ['valide_de', '2024-09-12'],
                ['valide_jusqu', '2029-09-12'],
                ['statut', 'ACTIF'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dotted ${techColors.border}` }}>
                  <span style={{ color: techColors.inkSoft }}>{k}:</span>
                  <span style={{ color: k === 'statut' ? techColors.green : techColors.ink }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: 16, background: techColors.bg, border: `1px solid ${techColors.border}`, ...techStyles.mono, fontSize: 12, color: techColors.inkSoft, lineHeight: 1.6 }}>
              <span style={{ color: techColors.yellow }}>// hash</span> a4f2c8b9d1e34<br/>
              <span style={{ color: techColors.yellow }}>// vérif</span> mon-accompagnateur-renov.gouv.fr
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechAides() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const questions = [
    { key: 'revenu', label: 'INPUT.revenus_annuels_foyer', options: ['< 20 000', '20 000 - 35 000', '35 000 - 60 000', '> 60 000'] },
    { key: 'travaux', label: 'INPUT.type_de_projet', options: ['Rénovation globale', 'Isolation', 'Chauffage', 'Découverte'] },
    { key: 'surface', label: 'INPUT.surface_habitable', options: ['< 70 m²', '70-120 m²', '120-180 m²', '> 180 m²'] },
  ];
  const result = answers.revenu === '< 20 000' ? 36500 :
    answers.revenu === '20 000 - 35 000' ? 25200 :
    answers.revenu === '35 000 - 60 000' ? 14800 : 8900;
  return (
    <section style={{ background: techColors.bgDeep, padding: '100px 0', borderTop: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="05">Aides mobilisables · 2026</TechSectionLabel>
        <h2 style={{ fontSize: 72, lineHeight: 0.95, margin: '24px 0 56px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
          Cumul des aides<br/>
          <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>maximisé</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32 }}>
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', ...techStyles.mono }}>
              <thead>
                <tr style={{ borderTop: `1px solid ${techColors.borderStrong}`, borderBottom: `1px solid ${techColors.borderStrong}` }}>
                  {['Dispositif', 'Montant max', 'Conditions', 'Pile'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, color: techColors.inkSoft, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DRI.AIDES.map((a) => (
                  <tr key={a.name} style={{ borderBottom: `1px solid ${techColors.border}` }}>
                    <td style={{ padding: '20px 16px', verticalAlign: 'top' }}>
                      <div style={{ fontSize: 16, color: techColors.ink, fontWeight: 600, marginBottom: 4, fontFamily: 'Inter' }}>{a.name}</div>
                      <div style={{ fontSize: 12, color: techColors.inkSoft, fontFamily: 'Inter', lineHeight: 1.4, maxWidth: 300 }}>{a.desc}</div>
                    </td>
                    <td style={{ padding: '20px 16px', verticalAlign: 'top', color: techColors.yellow, fontSize: 18, fontWeight: 700 }}>{a.amount}</td>
                    <td style={{ padding: '20px 16px', verticalAlign: 'top', color: techColors.inkSoft, fontSize: 12 }}>Sous conditions de ressources</td>
                    <td style={{ padding: '20px 16px', verticalAlign: 'top' }}><TechBadge>{a.pill}</TechBadge></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 24, padding: 24, background: techColors.bgPanel, border: `1px solid ${techColors.border}` }}>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.yellow, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 12 }}>// CALCUL THÉORIQUE MAX</div>
              <div style={{ ...techStyles.mono, fontSize: 14, color: techColors.inkSoft, lineHeight: 1.8 }}>
                MaPrimeRénov_Ampleur + CEE + Éco-PTZ →
                <br/><span style={{ color: techColors.yellow, fontSize: 32, fontWeight: 700 }}>cumul = jusqu'à 90% du HT</span>
              </div>
            </div>
          </div>
          <div style={{ background: techColors.bgPanel, border: `1px solid ${techColors.borderStrong}`, padding: 32, position: 'sticky', top: 100, height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${techColors.border}` }}>
              <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.yellow, letterSpacing: '0.05em' }}>$ ./simulateur.sh</div>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.green }}>● running</div>
            </div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 3, background: i <= step ? techColors.yellow : techColors.border }}></div>
              ))}
            </div>
            {step < questions.length ? (
              <>
                <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.inkMute, marginBottom: 6 }}>// step {step + 1} of {questions.length}</div>
                <div style={{ ...techStyles.mono, fontSize: 13, color: techColors.yellow, marginBottom: 14 }}>{questions[step].label} :</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {questions[step].options.map(opt => (
                    <button key={opt} onClick={() => { setAnswers({...answers, [questions[step].key]: opt}); setStep(step + 1); }} style={{
                      padding: '14px 16px', background: techColors.bg, border: `1px solid ${techColors.border}`,
                      color: techColors.ink, ...techStyles.mono, fontSize: 13, cursor: 'pointer', textAlign: 'left',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                      <span><span style={{ color: techColors.yellow, marginRight: 8 }}>{'>'}</span>{opt}</span>
                      <span style={{ color: techColors.inkMute }}>↵</span>
                    </button>
                  ))}
                </div>
                {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: 'transparent', border: 'none', color: techColors.inkMute, ...techStyles.mono, fontSize: 12, cursor: 'pointer' }}>← back</button>}
              </>
            ) : (
              <>
                <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.green, marginBottom: 12 }}>✓ computation done</div>
                <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkSoft, marginBottom: 8 }}>// output.eligible_aid</div>
                <div style={{ fontSize: 72, lineHeight: 1, color: techColors.yellow, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 8, fontFamily: 'Inter' }}>
                  {result.toLocaleString('fr-FR')} €
                </div>
                <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.inkSoft, marginBottom: 20, lineHeight: 1.6 }}>
                  // aides cumulées max<br/>
                  // basé sur rénovation globale<br/>
                  // hors Éco-PTZ
                </div>
                <a href="#" style={{ display: 'block', padding: '14px 20px', background: techColors.yellow, color: techColors.bg, ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 10 }}>→ chiffrage_précis</a>
                <button onClick={() => { setStep(0); setAnswers({}); }} style={{ background: 'transparent', border: 'none', color: techColors.inkMute, ...techStyles.mono, fontSize: 12, cursor: 'pointer', width: '100%' }}>$ ./reset.sh</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechZone() {
  return (
    <section style={{ background: techColors.bg, padding: '100px 0', borderTop: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="06">Zone d'intervention · Département 54</TechSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, marginTop: 40 }}>
          <div style={{ background: techColors.bgPanel, border: `1px solid ${techColors.border}`, aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <pattern id="tech-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke={techColors.border} strokeWidth="0.15"/>
                </pattern>
                <pattern id="tech-grid-major" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke={techColors.borderStrong} strokeWidth="0.2"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#tech-grid)" />
              <rect width="100" height="100" fill="url(#tech-grid-major)" />
              <path d="M 25 8 L 55 5 L 65 18 L 60 30 L 75 40 L 70 55 L 85 65 L 75 80 L 60 85 L 45 80 L 30 70 L 25 55 L 15 40 L 20 25 Z"
                fill={techColors.yellow} fillOpacity="0.08" stroke={techColors.yellow} strokeWidth="0.3" strokeDasharray="1 1" />
              {[
                { name: 'Nancy', x: 50, y: 55, big: true, code: 'HQ' },
                { name: 'Lunéville', x: 70, y: 60 },
                { name: 'Toul', x: 35, y: 50 },
                { name: 'Pont-à-Mousson', x: 48, y: 35 },
                { name: 'Longwy', x: 38, y: 12 },
                { name: 'Briey', x: 30, y: 25 },
                { name: 'Baccarat', x: 80, y: 72 },
              ].map(c => (
                <g key={c.name}>
                  {c.big && <circle cx={c.x} cy={c.y} r="8" fill={techColors.yellow} fillOpacity="0.15" />}
                  <rect x={c.x - 0.8} y={c.y - 0.8} width="1.6" height="1.6" fill={techColors.yellow} />
                  <text x={c.x + 2.5} y={c.y - 1} fontSize="2.5" fill={techColors.ink} fontFamily="JetBrains Mono" fontWeight={c.big ? "700" : "500"}>{c.name.toUpperCase()}</text>
                  {c.big && <text x={c.x + 2.5} y={c.y + 2} fontSize="1.8" fill={techColors.yellow} fontFamily="JetBrains Mono">{c.code}</text>}
                </g>
              ))}
              {/* coordinate ticks */}
              {[0,20,40,60,80,100].map(t => (
                <text key={t} x={t} y={99} fontSize="1.5" fill={techColors.inkMute} fontFamily="JetBrains Mono">{t}</text>
              ))}
            </svg>
            <div style={{ position: 'absolute', top: 16, left: 16, ...techStyles.mono, fontSize: 10, color: techColors.inkSoft }}>
              <div>// CARTE_54</div>
              <div>// proj: WGS84 / 1:280k</div>
              <div>// nodes: 7</div>
            </div>
            <div style={{ position: 'absolute', top: 16, right: 16, ...techStyles.mono, fontSize: 10, color: techColors.yellow, padding: '6px 10px', border: `1px solid ${techColors.yellow}`, background: techColors.bg }}>● HQ NANCY · 48.69°N 6.18°E</div>
          </div>
          <div>
            <h2 style={{ fontSize: 56, lineHeight: 0.95, margin: '0 0 24px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
              7 villes principales,<br/>
              <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>+247 communes</span>.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: techColors.inkSoft, margin: '0 0 32px' }}>
              Intervention possible sur tout le département. Déplacement gratuit jusqu'à 60 km de Nancy. Au-delà, frais kilométriques chiffrés au devis.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, ...techStyles.mono }}>
              {[
                ['NCY', 'Nancy', '0 km'],
                ['LUN', 'Lunéville', '32 km'],
                ['TOL', 'Toul', '28 km'],
                ['PAM', 'Pont-à-Mousson', '34 km'],
                ['LGW', 'Longwy', '78 km'],
                ['BRY', 'Briey', '62 km'],
                ['BCT', 'Baccarat', '55 km'],
                ['+++', 'Autres', '— sur devis'],
              ].map(([code, name, dist]) => (
                <div key={code} style={{ padding: 14, background: techColors.bgPanel, border: `1px solid ${techColors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 10, color: techColors.yellow, letterSpacing: '0.05em' }}>{code}</div>
                    <div style={{ fontSize: 14, color: techColors.ink, fontFamily: 'Inter', fontWeight: 500 }}>{name}</div>
                  </div>
                  <div style={{ fontSize: 12, color: techColors.inkSoft }}>{dist}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechTestimonials() {
  return (
    <section style={{ background: techColors.bgDeep, padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="07">Retours clients · validés</TechSectionLabel>
        <h2 style={{ fontSize: 72, lineHeight: 0.95, margin: '24px 0 56px', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
          /logs/<span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>clients</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DRI.TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: techColors.bgPanel, border: `1px solid ${techColors.border}`, padding: 0 }}>
              <div style={{ ...techStyles.mono, padding: '10px 16px', borderBottom: `1px solid ${techColors.border}`, fontSize: 11, color: techColors.inkSoft, display: 'flex', justifyContent: 'space-between' }}>
                <span>// review_{String(i + 1).padStart(3, '0')}</span>
                <span style={{ color: techColors.green }}>★★★★★</span>
              </div>
              <div style={{ padding: 28 }}>
                <p style={{ fontSize: 16, color: techColors.ink, lineHeight: 1.55, margin: '0 0 28px' }}>
                  <span style={{ color: techColors.yellow, ...techStyles.mono }}>"</span>{t.quote}<span style={{ color: techColors.yellow, ...techStyles.mono }}>"</span>
                </p>
                <div style={{ paddingTop: 20, borderTop: `1px solid ${techColors.border}`, display: 'flex', justifyContent: 'space-between', ...techStyles.mono, fontSize: 12 }}>
                  <span style={{ color: techColors.ink }}>{t.name}</span>
                  <span style={{ color: techColors.inkSoft }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', background: techColors.bgPanel, border: `1px solid ${techColors.border}`, ...techStyles.mono, fontSize: 13, color: techColors.inkSoft, display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: techColors.yellow }}>//</span> Note moyenne sur 47 avis vérifiés</span>
          <span style={{ color: techColors.yellow, fontSize: 18, fontWeight: 700 }}>4.9 / 5.0</span>
        </div>
      </div>
    </section>
  );
}

function TechBlog() {
  return (
    <section style={{ background: techColors.bg, padding: '100px 0', borderTop: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <TechSectionLabel num="08">Documentation · ressources</TechSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ fontSize: 72, lineHeight: 0.95, margin: '24px 0 0', color: techColors.ink, fontWeight: 800, letterSpacing: '-0.03em' }}>
            Articles<br/>& <span style={{ color: techColors.yellow, fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic' }}>analyses</span>.
          </h2>
          <a href="#" style={{ padding: '12px 22px', background: techColors.bgPanel, color: techColors.yellow, ...techStyles.mono, fontSize: 13, fontWeight: 700, textDecoration: 'none', border: `1px solid ${techColors.border}`, letterSpacing: '0.05em', textTransform: 'uppercase' }}>→ ls /blog/*</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DRI.BLOG.map((b, i) => (
            <a key={i} href="#" style={{ background: techColors.bgPanel, border: `1px solid ${techColors.border}`, textDecoration: 'none', display: 'block' }}>
              <div style={{ aspectRatio: '4/3', background: techColors.bg, position: 'relative', borderBottom: `1px solid ${techColors.border}` }}>
                <svg viewBox="0 0 100 75" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <defs>
                    <pattern id={`b-${i}`} width="6" height="6" patternUnits="userSpaceOnUse">
                      <path d="M 6 0 L 0 0 0 6" fill="none" stroke={techColors.border} strokeWidth="0.2"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="75" fill={`url(#b-${i})`} />
                  {/* mini chart */}
                  {i === 0 && <g><path d="M 10 60 L 25 50 L 40 45 L 55 30 L 70 25 L 85 15" fill="none" stroke={techColors.yellow} strokeWidth="0.8"/><circle cx="85" cy="15" r="1.5" fill={techColors.yellow}/></g>}
                  {i === 1 && Array.from({length: 6}).map((_, j) => <rect key={j} x={15 + j * 12} y={50 - j * 6} width="8" height={20 + j * 6} fill={techColors.yellow} fillOpacity={0.3 + j * 0.1}/>)}
                  {i === 2 && <g><circle cx="50" cy="37" r="20" fill="none" stroke={techColors.yellow} strokeWidth="0.8"/><path d="M 50 37 L 50 17 A 20 20 0 0 1 67 47 Z" fill={techColors.yellow} fillOpacity="0.5"/></g>}
                </svg>
                <div style={{ position: 'absolute', top: 12, left: 12, ...techStyles.mono, fontSize: 10, color: techColors.yellow, padding: '3px 8px', background: techColors.bg, border: `1px solid ${techColors.yellow}`, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{b.cat}</div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkSoft, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{b.date}</span><span>{b.readTime}</span>
                </div>
                <h3 style={{ fontSize: 20, color: techColors.ink, margin: '0 0 12px', lineHeight: 1.2, fontWeight: 700 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: techColors.inkSoft, lineHeight: 1.5, margin: 0 }}>{b.excerpt}</p>
                <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.yellow, marginTop: 16 }}>→ read.more()</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechContact() {
  return (
    <section style={{ background: techColors.yellow, color: techColors.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.bg, letterSpacing: '0.05em' }}>[09]</div>
          <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.bg, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>Init · contact</div>
          <div style={{ flex: 1, height: 1, background: techColors.bg, opacity: 0.2 }}></div>
        </div>
        <h2 style={{ fontSize: 168, lineHeight: 0.88, margin: '0 0 48px', color: techColors.bg, fontWeight: 800, letterSpacing: '-0.04em' }}>
          $ ./contact<br/>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic', opacity: 0.4 }}>--start</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64 }}>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: techColors.bg, margin: '0 0 48px', opacity: 0.85 }}>
              Premier échange de 15 min, gratuit, pour qualifier votre projet. Sans engagement, sans pression commerciale.
            </p>
            <div style={{ background: techColors.bg, color: techColors.ink, padding: 32, ...techStyles.mono, fontSize: 14, lineHeight: 1.9 }}>
              <div style={{ color: techColors.yellow, marginBottom: 12 }}>// channels</div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: techColors.inkSoft }}>tel  :</span> <a href={`tel:${DRI.CONTACT.phone}`} style={{ color: techColors.yellow, textDecoration: 'none', fontWeight: 700 }}>{DRI.CONTACT.phone}</a>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: techColors.inkSoft }}>mail :</span> <a href={`mailto:${DRI.CONTACT.email}`} style={{ color: techColors.yellow, textDecoration: 'none' }}>{DRI.CONTACT.email}</a>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: techColors.inkSoft }}>zone :</span> <span style={{ color: techColors.ink }}>Meurthe-et-Moselle (54)</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span style={{ color: techColors.inkSoft }}>hours:</span> <span style={{ color: techColors.ink }}>Lun-Ven 08:00→19:00</span>
              </div>
              <div style={{ color: techColors.green }}>● status: available_now</div>
            </div>
          </div>
          <div style={{ background: techColors.bg, color: techColors.ink, padding: 40 }}>
            <div style={{ ...techStyles.mono, padding: '10px 16px', background: techColors.bgPanel, marginBottom: 24, fontSize: 12, color: techColors.yellow, display: 'flex', justifyContent: 'space-between' }}>
              <span>~/new_request.form</span>
              <span style={{ color: techColors.green }}>● draft</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <TechField label="full_name" placeholder="ex: Marie Dupont" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <TechField label="phone" placeholder="06 ..." />
                <TechField label="email" placeholder="marie@..." />
              </div>
              <TechField label="commune_INSEE" placeholder="ex: Nancy 54395" />
              <div>
                <label style={{ display: 'block', ...techStyles.mono, fontSize: 11, color: techColors.yellow, marginBottom: 10, letterSpacing: '0.05em' }}>project_type[]</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['DPE', 'AUDIT', 'PV', 'CHAUFFAGE', 'RENO_GLOBAL', 'UNKNOWN'].map(b => (
                    <button key={b} style={{ padding: '10px 14px', background: techColors.bgPanel, border: `1px solid ${techColors.border}`, ...techStyles.mono, fontSize: 12, color: techColors.ink, cursor: 'pointer' }}>{b}</button>
                  ))}
                </div>
              </div>
              <TechField label="comment" placeholder="ex: pavillon 1972, classé G, projet de rénovation globale" multiline />
              <button style={{ width: '100%', padding: '18px 24px', background: techColors.yellow, color: techColors.bg, border: 'none', ...techStyles.mono, fontSize: 14, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase' }}>$ ./submit.sh →</button>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.inkMute, lineHeight: 1.5 }}>// Réponse sous 24h · données conformes RGPD · non commerciales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechField({ label, placeholder, multiline }) {
  return (
    <div>
      <label style={{ display: 'block', ...techStyles.mono, fontSize: 11, color: techColors.yellow, marginBottom: 8, letterSpacing: '0.05em' }}>{label}:</label>
      {multiline ? (
        <textarea placeholder={placeholder} rows={3} style={{
          width: '100%', padding: '14px 16px', background: techColors.bgPanel, border: `1px solid ${techColors.border}`,
          fontSize: 14, fontFamily: 'Inter', color: techColors.ink, outline: 'none', resize: 'vertical',
        }} />
      ) : (
        <input placeholder={placeholder} style={{
          width: '100%', padding: '14px 16px', background: techColors.bgPanel, border: `1px solid ${techColors.border}`,
          fontSize: 14, fontFamily: 'Inter', color: techColors.ink, outline: 'none',
        }} />
      )}
    </div>
  );
}

function TechFooter() {
  return (
    <footer style={{ background: techColors.bgDeep, color: techColors.inkSoft, padding: '80px 0 32px', borderTop: `1px solid ${techColors.border}` }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64 }}>
          <div style={{ fontSize: 140, lineHeight: 0.85, color: techColors.ink, fontWeight: 800, letterSpacing: '-0.05em' }}>
            DIAG_<br/>RENOV_<br/>IMMO<span style={{ color: techColors.yellow }}>/</span>
          </div>
          <div style={{ ...techStyles.mono, fontSize: 12, color: techColors.inkSoft, textAlign: 'right', lineHeight: 1.8 }}>
            <div style={{ color: techColors.yellow, marginBottom: 12 }}>// system_info</div>
            <div>v: 2026.04.r8472</div>
            <div>region: 54 / lorraine</div>
            <div>uptime: 4 ans</div>
            <div>clients_served: 200+</div>
            <div style={{ color: techColors.green, marginTop: 12 }}>● status: operational</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 32, borderTop: `1px solid ${techColors.border}`, marginBottom: 48 }}>
          {[
            ['/services', ['/dpe', '/audit', '/pv', '/chauffage']],
            ['/societe', ['/about', '/methode', '/blog', '/faq']],
            ['/legal', ['/mentions', '/cgv', '/cookies', '/rgpd']],
            ['/contact', [DRI.CONTACT.phone, DRI.CONTACT.email, DRI.CONTACT.zone]],
          ].map(([head, items]) => (
            <div key={head}>
              <div style={{ ...techStyles.mono, fontSize: 11, color: techColors.yellow, marginBottom: 16, letterSpacing: '0.05em' }}>{head}</div>
              {items.map(it => <div key={it} style={{ ...techStyles.mono, fontSize: 12, marginBottom: 8, color: techColors.inkSoft }}>{it}</div>)}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: `1px solid ${techColors.border}`, display: 'flex', justifyContent: 'space-between', ...techStyles.mono, fontSize: 11, color: techColors.inkMute, letterSpacing: '0.05em' }}>
          <div>© 2026 DIAG_RENOV_IMMO. SIRET 000 000 000 00000.</div>
          <div>BUILD 8472 · {new Date().toISOString().slice(0, 10)}</div>
        </div>
      </div>
    </footer>
  );
}

function VarTech() {
  return (
    <div style={techStyles.root}>
      <TechNav />
      <TechHero />
      <TechStats />
      <TechServices />
      <TechDPEScale />
      <TechAccompagnateur />
      <TechAides />
      <TechZone />
      <TechTestimonials />
      <TechBlog />
      <TechContact />
      <TechFooter />
    </div>
  );
}

window.VarTech = VarTech;
