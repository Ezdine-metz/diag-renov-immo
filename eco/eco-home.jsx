// Eco — Home page (v2)
// Calmer editorial hero + new sections: Études de cas, Équipe, FAQ.

function EcoHomeHero({ tk }) {
  return (
    <section style={{
      background: tk.bg, padding: `${tk.density.sectionY}px 0 ${tk.density.sectionY + 20}px`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle radial */}
      <div style={{
        position: 'absolute', top: -200, right: -300, width: 900, height: 900, borderRadius: '50%',
        background: `radial-gradient(circle, ${tk.accent}22 0%, transparent 55%)`, pointerEvents: 'none',
      }}></div>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <span style={{ width: 8, height: 8, background: tk.accent, borderRadius: '50%' }}></span>
          <div style={{ ...tk.mono, fontSize: 13, color: tk.inkSoft, letterSpacing: '0.02em' }}>
            Agréé Mon Accompagnateur Rénov' · Meurthe-et-Moselle · depuis 2022
          </div>
          <div style={{ flex: 1, height: 1, background: tk.border, marginLeft: 16 }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 72, alignItems: 'stretch' }}>
          <div>
            <h1 style={{
              ...tk.display,
              fontSize: 112 * tk.heroScale, lineHeight: 0.96,
              margin: 0, color: tk.ink, letterSpacing: '-0.035em',
            }}>
              Comprendre,<br/>
              avant de <span style={{ color: tk.accent, fontStyle: 'italic' }}>rénover.</span>
            </h1>
            <p style={{
              fontSize: 19, lineHeight: 1.6, color: tk.inkSoft, maxWidth: 580,
              margin: '40px 0 40px', fontWeight: 400,
            }}>
              Alex Oudin réalise personnellement vos audits énergétiques, DPE et études travaux. Un seul interlocuteur de la première visite jusqu'à la fin du chantier — sans sous-traitance, sans commission cachée.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
              <a href="#contact" style={{
                padding: '18px 30px', background: tk.accent, color: tk.bg,
                fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                Discutons de votre projet <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a href="services.html" style={{
                padding: '18px 30px', background: 'transparent', color: tk.ink,
                fontSize: 15, fontWeight: 500, textDecoration: 'none', borderRadius: 100,
                border: `1px solid ${tk.border}`,
              }}>Voir nos prestations</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, paddingTop: 32, borderTop: `1px solid ${tk.border}` }}>
              {[
                ['200+', 'foyers conseillés'],
                ['4 ans', "d'activité en Lorraine"],
                ['4,9/5', 'sur 47 avis vérifiés'],
              ].map(([v, l], i) => (
                <div key={i} style={{ paddingRight: 24 }}>
                  <div style={{ ...tk.display, fontSize: 40, lineHeight: 1, color: tk.ink, marginBottom: 6 }}>{v}</div>
                  <div style={{ fontSize: 13, color: tk.inkSoft }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo — Alex Oudin */}
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 560 }}>
            <img src="images/alex-inspection.png" alt="Alex Oudin, fondateur de Diag Renov Immo"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: `linear-gradient(to top, ${tk.bg} 0%, rgba(14,42,30,0.55) 55%, transparent 100%)`,
              padding: '72px 36px 36px',
            }}>
              <div style={{ fontSize: 17, color: tk.ink, fontWeight: 600, marginBottom: 4 }}>Alex Oudin</div>
              <div style={{ fontSize: 14, color: tk.inkSoft, marginBottom: 18 }}>Fondateur · Auditeur certifié</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['OPQIBI', 'RGE', 'MAR'].map(b => (
                  <span key={b} style={{ fontSize: 11, padding: '5px 12px', background: tk.accent, color: tk.bg, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: 4 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeIntro({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: '64px 0', borderTop: `1px solid ${tk.border}`, borderBottom: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 56px' }}>
        <p style={{
          ...tk.display, fontSize: 36, lineHeight: 1.3, color: tk.ink,
          margin: 0, textAlign: 'center', letterSpacing: '-0.02em',
        }}>
          Plus de <span style={{ color: tk.accent, fontStyle: 'italic' }}>4,8 millions de logements</span> en France sont des passoires énergétiques. Le vôtre ne devrait pas en faire partie en 2028.
        </p>
      </div>
    </section>
  );
}

function EcoHomeServices({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="01">Nos prestations</EcoSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: 0, color: tk.ink, letterSpacing: '-0.03em', maxWidth: 800 }}>
            Quatre prestations, <span style={{ color: tk.accent, fontStyle: 'italic' }}>un seul interlocuteur.</span>
          </h2>
          <a href="services.html" style={{ ...tk.mono, fontSize: 13, color: tk.accent, textDecoration: 'none', letterSpacing: '0.05em' }}>→ Détails de chaque prestation</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {DRI.SERVICES.map((s, i) => (
            <a key={s.key} href={`services.html#${s.key}`} style={{
              background: tk.bgPanel, borderRadius: 24, padding: 32,
              border: `1px solid ${tk.border}`, textDecoration: 'none',
              display: 'flex', flexDirection: 'column', minHeight: 440,
              transition: 'all 0.2s', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ ...tk.mono, fontSize: 12, color: tk.inkMute, letterSpacing: '0.05em', marginBottom: 16 }}>0{i+1}/04</div>
              <div style={{
                width: 56, height: 56, borderRadius: 14, background: tk.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, color: tk.bg, ...tk.display, fontSize: 28,
              }}>{s.short[0]}</div>
              <h3 style={{ ...tk.display, fontSize: 26, color: tk.ink, margin: '0 0 12px', lineHeight: 1.15 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55, margin: '0 0 24px', flex: 1 }}>{s.summary}</p>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${tk.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: tk.inkMute }}>{s.duration}</span>
                <span style={{ color: tk.accent, fontSize: 16 }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoHomeDPE({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="02">Échelle DPE · interactive</EcoSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: 0, color: tk.ink, letterSpacing: '-0.03em' }}>
            Où se situe<br/>
            <span style={{ color: tk.accent, fontStyle: 'italic' }}>votre logement ?</span>
          </h2>
          <div style={{ ...tk.mono, fontSize: 13, color: tk.inkMute, textAlign: 'right' }}>
            Cliquez sur une lettre<br/>↓
          </div>
        </div>
        <EcoDPEInteractive tk={tk} />
      </div>
    </section>
  );
}

function EcoHomeProcess({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="03">Notre méthode</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 64px', color: tk.ink, letterSpacing: '-0.03em', maxWidth: 1100 }}>
          Quatre étapes, <span style={{ color: tk.accent, fontStyle: 'italic' }}>zéro mauvaise surprise.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {DRI.PROCESS.map((p, i) => (
            <div key={p.n} style={{
              padding: '32px 32px 32px 0',
              borderTop: `2px solid ${tk.accent}`,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
                <div style={{ ...tk.display, fontSize: 72, lineHeight: 1, color: tk.accent }}>0{p.n}</div>
                <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, letterSpacing: '0.08em' }}>
                  {i === 0 ? 'GRATUIT' : i === DRI.PROCESS.length - 1 ? 'AVEC VOUS' : 'INCLUS'}
                </div>
              </div>
              <h3 style={{ ...tk.display, fontSize: 26, color: tk.ink, margin: '0 0 12px', lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoHomeCases({ tk }) {
  const [active, setActive] = React.useState(0);
  const c = ECO_DATA.CASES[active];
  return (
    <section id="cases" style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="04">Études de cas</EcoSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: 0, color: tk.ink, letterSpacing: '-0.03em' }}>
            Trois logements,<br/>
            <span style={{ color: tk.accent, fontStyle: 'italic' }}>trois trajectoires.</span>
          </h2>
          <div style={{ display: 'flex', gap: 6 }}>
            {ECO_DATA.CASES.map((cs, i) => (
              <button key={cs.id} onClick={() => setActive(i)} style={{
                padding: '10px 18px', background: active === i ? tk.accent : 'transparent',
                color: active === i ? tk.bg : tk.ink, border: `1px solid ${active === i ? tk.accent : tk.border}`,
                borderRadius: 100, ...tk.mono, fontSize: 12, cursor: 'pointer',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>{cs.location}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32 }}>
          <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 32, padding: 0, overflow: 'hidden' }}>
            <div style={{
              aspectRatio: '16/9', background: tk.bg, position: 'relative',
              backgroundImage: `repeating-linear-gradient(45deg, ${tk.border} 0 1px, transparent 1px 24px)`,
              borderBottom: `1px solid ${tk.border}`,
            }}>
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: tk.inkMute, ...tk.mono, fontSize: 13, letterSpacing: '0.05em',
              }}>[ photo · {c.type} · {c.location} ]</div>
              <div style={{ position: 'absolute', top: 20, left: 20, ...tk.mono, fontSize: 11, padding: '6px 10px', background: tk.accent, color: tk.bg, borderRadius: 4, fontWeight: 700, letterSpacing: '0.05em' }}>
                #{String(active + 1).padStart(2, '0')} · {c.location}
              </div>
              <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 4, alignItems: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: c.before.color, color: tk.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...tk.display, fontSize: 22 }}>{c.before.letter}</div>
                <div style={{ ...tk.display, fontSize: 24, color: tk.accent, padding: '0 8px' }}>→</div>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: c.after.color, color: tk.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...tk.display, fontSize: 22 }}>{c.after.letter}</div>
              </div>
            </div>
            <div style={{ padding: 36 }}>
              <h3 style={{ ...tk.display, fontSize: 36, color: tk.ink, margin: '0 0 8px', lineHeight: 1.1 }}>{c.type}</h3>
              <div style={{ ...tk.mono, fontSize: 13, color: tk.inkSoft, marginBottom: 24, letterSpacing: '0.02em' }}>{c.location} · {c.surface} · chantier {c.duration}</div>
              <p style={{ fontSize: 17, color: tk.ink, lineHeight: 1.55, margin: '0 0 24px', fontStyle: 'italic' }}>
                « {c.quote} »
              </p>
              <div style={{ fontSize: 13, color: tk.inkSoft }}>— {c.client}</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: tk.accent, color: tk.bg, borderRadius: 24, padding: 28 }}>
              <div style={{ ...tk.mono, fontSize: 11, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7 }}>Économies annuelles</div>
              <div style={{ ...tk.display, fontSize: 48, lineHeight: 1, fontStyle: 'italic' }}>{c.savings}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 22 }}>
                <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Aides obtenues</div>
                <div style={{ ...tk.display, fontSize: 28, color: tk.accent, lineHeight: 1.1 }}>{c.aides}</div>
              </div>
              <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 22 }}>
                <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Reste à charge</div>
                <div style={{ ...tk.display, fontSize: 28, color: tk.ink, lineHeight: 1.1 }}>{c.rest}</div>
              </div>
            </div>
            <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 28, flex: 1 }}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Travaux réalisés</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.works.map(w => (
                  <div key={w} style={{ display: 'flex', gap: 10, fontSize: 14, color: tk.ink, lineHeight: 1.4 }}>
                    <span style={{ color: tk.accent, ...tk.mono, fontSize: 12 }}>—</span>
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeAccompagnateur({ tk }) {
  return (
    <section style={{ background: tk.accent, color: tk.bg, padding: `${tk.density.sectionY}px 0`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ ...tk.mono, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>§05 — Mon Accompagnateur Rénov'</div>
            <h2 style={{ ...tk.display, fontSize: 96, lineHeight: 0.92, margin: '0 0 32px', letterSpacing: '-0.04em' }}>
              On vous tient<br/>
              <span style={{ fontStyle: 'italic' }}>la main</span> jusqu'au bout.
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, margin: '0 0 40px', maxWidth: 580, opacity: 0.85 }}>
              Mon Accompagnateur Rénov' est l'agrément officiel délivré par l'État aux pros qui vous accompagnent de bout en bout : audit, choix des artisans, dossiers d'aides, contrôle des travaux. Notre prestation peut être prise en charge jusqu'à 2 000 € par l'État.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#contact" style={{ padding: '18px 30px', background: tk.bg, color: tk.accent, fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>Démarrer mon projet →</a>
              <a href="a-propos.html" style={{ padding: '18px 30px', background: 'transparent', color: tk.bg, fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 100, border: `1.5px solid ${tk.bg}` }}>Qui sommes-nous</a>
            </div>
          </div>
          <div style={{ background: tk.bg, color: tk.ink, borderRadius: 32, padding: 36 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
              <div>
                <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Certificat actif</div>
                <div style={{ ...tk.display, fontSize: 22, marginTop: 4 }}>Mon Accompagnateur Rénov'</div>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: tk.accent, color: tk.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700 }}>✓</div>
            </div>
            {[
              ['Titulaire', 'Diag Renov Immo'],
              ['N° agrément', 'MAR-54-2024-0847'],
              ['Périmètre', 'Meurthe-et-Moselle (54)'],
              ['Délivré', 'Anah · 2024'],
              ['Valide', "jusqu'en 2029"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${tk.border}` }}>
                <span style={{ fontSize: 13, color: tk.inkMute }}>{k}</span>
                <span style={{ fontSize: 14, color: tk.ink, fontWeight: 500, fontFamily: k.includes('N°') ? tk.mono.fontFamily : 'inherit' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeAides({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="06">Aides mobilisables</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 56px', color: tk.ink, letterSpacing: '-0.03em', maxWidth: 1000 }}>
          <span style={{ color: tk.accent, fontStyle: 'italic' }}>L'État paie</span><br/>
          une grande partie.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {DRI.AIDES.map((a, i) => (
              <div key={a.name} style={{
                background: i === 0 ? tk.accent : tk.bgPanel,
                color: i === 0 ? tk.bg : tk.ink,
                border: i === 0 ? 'none' : `1px solid ${tk.border}`,
                borderRadius: 20, padding: 28,
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <h3 style={{ ...tk.display, fontSize: 26, margin: 0, lineHeight: 1.1 }}>{a.name}</h3>
                    <span style={{ fontSize: 10, padding: '4px 8px', background: i === 0 ? tk.bg : tk.accent, color: i === 0 ? tk.accent : tk.bg, borderRadius: 100, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a.pill}</span>
                  </div>
                  <p style={{ fontSize: 14, opacity: i === 0 ? 0.85 : 0.7, lineHeight: 1.55, margin: 0 }}>{a.desc}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ ...tk.display, fontSize: 32, lineHeight: 1, fontStyle: 'italic' }}>{a.amount}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ position: 'sticky', top: 100, height: 'fit-content' }}>
            <EcoAidesSimulator tk={tk} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeTeam({ tk }) {
  const alex = ECO_DATA.TEAM[0];
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="07">Votre interlocuteur</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'center' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
            <img src={alex.photo} alt={alex.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: tk.accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>Fondateur &amp; expert certifié</div>
            <h2 style={{ ...tk.display, fontSize: 80, color: tk.ink, margin: '0 0 12px', lineHeight: 1.0 }}>Alex Oudin</h2>
            <div style={{ fontSize: 17, color: tk.inkSoft, marginBottom: 36 }}>Auditeur certifié · Mon Accompagnateur Rénov'</div>
            <p style={{ fontSize: 17, color: tk.inkSoft, lineHeight: 1.75, margin: '0 0 44px' }}>{alex.bio}</p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 44 }}>
              {[
                { code: 'OPQIBI', label: 'Qualifications' },
                { code: 'RGE', label: 'Reconnu Garant' },
                { code: 'MAR', label: 'Agréé État' },
              ].map(({ code, label }) => (
                <div key={code} style={{ padding: '18px 24px', background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 16 }}>
                  <div style={{ fontSize: 10, color: tk.inkMute, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{label}</div>
                  <div style={{ fontSize: 20, color: tk.ink, fontWeight: 700, letterSpacing: '0.04em' }}>{code}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="a-propos.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', background: tk.accent, color: tk.bg, fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>
                Notre histoire →
              </a>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', background: 'transparent', color: tk.ink, fontSize: 14, fontWeight: 500, textDecoration: 'none', borderRadius: 100, border: `1px solid ${tk.border}` }}>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeZone({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="08">Zone d'intervention</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 56px', color: tk.ink, letterSpacing: '-0.03em' }}>
          Sur tout le 54,<br/>
          <span style={{ color: tk.accent, fontStyle: 'italic' }}>de Longwy à Baccarat.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{
            aspectRatio: '5/4', background: tk.bgPanel, borderRadius: 32, position: 'relative', overflow: 'hidden',
            border: `1px solid ${tk.border}`,
          }}>
            <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <pattern id="eco-h-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <circle cx="2.5" cy="2.5" r="0.18" fill={tk.border}/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#eco-h-grid)" />
              <path d="M 25 8 L 55 5 L 65 18 L 60 30 L 75 40 L 70 55 L 85 65 L 75 80 L 60 85 L 45 80 L 30 70 L 25 55 L 15 40 L 20 25 Z"
                fill={tk.accent} fillOpacity="0.1" stroke={tk.accent} strokeWidth="0.3" />
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
                  <circle cx={c.x} cy={c.y} r={c.big ? 2.5 : 1.5} fill={tk.accent} />
                  {c.big && (
                    <circle cx={c.x} cy={c.y} r="6" fill="none" stroke={tk.accent} strokeWidth="0.3">
                      <animate attributeName="r" from="2.5" to="10" dur="2.4s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  <text x={c.x + 3} y={c.y + 1.2} fontSize={c.big ? "3.2" : "2.6"} fill={tk.ink} fontFamily="Inter" fontWeight={c.big ? "600" : "400"}>{c.name}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: 'absolute', top: 20, left: 20, ...tk.mono, fontSize: 11, color: tk.inkMute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Meurthe-et-Moselle / 54</div>
            <div style={{ position: 'absolute', bottom: 20, right: 20, background: tk.accent, color: tk.bg, padding: '10px 16px', borderRadius: 100, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, background: tk.bg, borderRadius: '50%' }}></span> HQ · Nancy
            </div>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: tk.inkSoft, margin: '0 0 28px' }}>
              Nous intervenons dans toutes les communes du département. Premier déplacement gratuit dans un rayon de 60 km autour de Nancy.
            </p>
            <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 24, marginBottom: 20 }}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Principales communes</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Nancy', 'Lunéville', 'Toul', 'Pont-à-Mousson', 'Longwy', 'Briey', 'Baccarat', 'Vandœuvre', 'Villers-lès-Nancy', 'Laxou', 'Jarville', 'Maxéville', 'Frouard', 'Dombasle', 'Champigneulles', 'Saint-Nicolas-de-Port'].map(c => (
                  <div key={c} style={{ padding: '6px 12px', background: tk.bg, border: `1px solid ${tk.border}`, borderRadius: 100, fontSize: 12, color: tk.ink }}>{c}</div>
                ))}
              </div>
            </div>
            <a href={`tel:${DRI.CONTACT.phone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', background: tk.accent, color: tk.bg, borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              <span>Pas listée ? Appelez-nous.</span>
              <span>{DRI.CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeTestimonials({ tk }) {
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="09">Témoignages</EcoSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: 0, color: tk.ink, letterSpacing: '-0.03em' }}>
            Ils sont passés du<br/>
            <span style={{ color: tk.accent, fontStyle: 'italic' }}>rouge au vert.</span>
          </h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setActive((active - 1 + DRI.TESTIMONIALS.length) % DRI.TESTIMONIALS.length)} style={{ width: 44, height: 44, borderRadius: '50%', background: 'transparent', border: `1px solid ${tk.border}`, color: tk.ink, fontSize: 16, cursor: 'pointer' }}>←</button>
            <button onClick={() => setActive((active + 1) % DRI.TESTIMONIALS.length)} style={{ width: 44, height: 44, borderRadius: '50%', background: tk.accent, border: 'none', color: tk.bg, fontSize: 16, cursor: 'pointer', fontWeight: 700 }}>→</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {DRI.TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: i === active ? tk.accent : tk.bgPanel,
              color: i === active ? tk.bg : tk.ink,
              border: `1px solid ${i === active ? tk.accent : tk.border}`,
              borderRadius: 24, padding: 32, cursor: 'pointer',
              transition: 'all 0.2s',
            }} onClick={() => setActive(i)}>
              <div style={{ display: 'flex', gap: 2, fontSize: 14, marginBottom: 24, color: i === active ? tk.bg : tk.accent }}>★★★★★</div>
              <p style={{ ...tk.display, fontSize: 20, lineHeight: 1.4, margin: '0 0 28px', fontStyle: 'italic' }}>"{t.quote}"</p>
              <div style={{ paddingTop: 18, borderTop: `1px solid ${i === active ? 'rgba(14,42,30,0.2)' : tk.border}` }}>
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

function EcoHomeFAQ({ tk }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="10">Questions fréquentes</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 28px', color: tk.ink, letterSpacing: '-0.03em' }}>
              On vous <span style={{ color: tk.accent, fontStyle: 'italic' }}>répond.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: tk.inkSoft, margin: '0 0 28px' }}>
              Les questions qu'on nous pose le plus souvent — sur les diagnostics, les aides, et notre façon de travailler.
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 22px', background: tk.accent, color: tk.bg,
              fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
            }}>Votre question n'est pas là ? <span>→</span></a>
          </div>
          <div>
            {ECO_DATA.FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderTop: `1px solid ${tk.border}` }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24,
                    color: tk.ink, textAlign: 'left',
                  }}>
                    <div style={{ ...tk.display, fontSize: 22, lineHeight: 1.3, color: isOpen ? tk.accent : tk.ink }}>{f.q}</div>
                    <div style={{ ...tk.display, fontSize: 28, color: tk.accent, lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</div>
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: 24, paddingRight: 60 }}>
                      <p style={{ fontSize: 16, color: tk.inkSoft, lineHeight: 1.6, margin: 0 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: `1px solid ${tk.border}` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoHomeBlog({ tk }) {
  return (
    <section id="blog" style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="11">Journal</EcoSectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: 0, color: tk.ink, letterSpacing: '-0.03em' }}>
            Pour <span style={{ color: tk.accent, fontStyle: 'italic' }}>aller plus loin.</span>
          </h2>
          <a href="blog.html" style={{ fontSize: 14, color: tk.accent, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            Tous les articles <span>→</span>
          </a>
        </div>
        {(() => {
          const CAT_BG = {
            'À propos': '#c8e6a0', 'Aides': '#52b757', 'Chauffage': '#e88472',
            'Solaire & Chauffage': '#fab627', 'Solaire': '#c8e6a0',
            'Audit': '#7fa680', 'DPE': '#e6c878', 'Réglementation': '#f1ede0',
          };
          const posts = (typeof ECO_DATA !== 'undefined' && ECO_DATA.BLOG_POSTS) ? ECO_DATA.BLOG_POSTS.slice(0, 3) : DRI.BLOG;
          return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {posts.map((b, i) => (
            <a key={i} href={b.slug ? `blog.html#${b.slug}` : 'blog.html'} style={{
              background: tk.bgPanel, border: `1px solid ${tk.border}`,
              borderRadius: 24, padding: 0, textDecoration: 'none', display: 'block', overflow: 'hidden',
            }}>
              <div style={{
                aspectRatio: '4/3',
                background: CAT_BG[b.cat] || tk.accent,
                position: 'relative', overflow: 'hidden',
                backgroundImage: b.image ? 'none' : 'repeating-linear-gradient(45deg, rgba(14,42,30,0.05) 0 12px, transparent 12px 24px)',
              }}>
                {b.image
                  ? <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Instrument Serif', serif", fontSize: 72, color: 'rgba(14,42,30,0.18)', lineHeight: 1 }}>◐</div>
                }
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '5px 12px', background: tk.bg, color: tk.accent, borderRadius: 100, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{b.cat}</div>
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 11, color: tk.inkMute, marginBottom: 12, ...tk.mono, display: 'flex', justifyContent: 'space-between' }}><span>{b.date}</span><span>{b.readTime}</span></div>
                <h3 style={{ ...tk.display, fontSize: 22, color: tk.ink, margin: '0 0 12px', lineHeight: 1.2 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55, margin: '0 0 16px' }}>{b.excerpt}</p>
                <span style={{ color: tk.accent, fontSize: 13, fontWeight: 600 }}>Lire →</span>
              </div>
            </a>
          ))}
        </div>
          );
        })()}
      </div>
    </section>
  );
}

function EcoHomeContact({ tk }) {
  return (
    <section id="contact" style={{ background: tk.accent, color: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ ...tk.mono, fontSize: 12, letterSpacing: '0.05em', opacity: 0.7 }}>§12</div>
          <div style={{ ...tk.mono, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>Premier contact</div>
          <div style={{ flex: 1, height: 1, background: tk.bg, opacity: 0.2 }}></div>
        </div>
        <h2 style={{ ...tk.display, fontSize: 144, lineHeight: 0.9, margin: '0 0 48px', letterSpacing: '-0.04em' }}>
          On en parle ?<br/>
          <span style={{ fontStyle: 'italic', opacity: 0.45 }}>Vraiment.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.6, margin: '0 0 48px', opacity: 0.85, maxWidth: 480 }}>
              Quinze minutes au téléphone, gratuites, pour cerner votre projet. Sans engagement, sans pression commerciale.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{
                padding: '24px 0', borderTop: `1px solid rgba(14,42,30,0.2)`,
                textDecoration: 'none', color: tk.bg,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 12, opacity: 0.6, ...tk.mono, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Téléphone direct</div>
                  <div style={{ ...tk.display, fontSize: 36, lineHeight: 1.1, fontStyle: 'italic' }}>{DRI.CONTACT.phone}</div>
                </div>
                <span style={{ fontSize: 22 }}>→</span>
              </a>
              <a href={`mailto:${DRI.CONTACT.email}`} style={{
                padding: '24px 0', borderTop: `1px solid rgba(14,42,30,0.2)`,
                textDecoration: 'none', color: tk.bg,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 12, opacity: 0.6, ...tk.mono, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</div>
                  <div style={{ ...tk.display, fontSize: 28, lineHeight: 1.1 }}>{DRI.CONTACT.email}</div>
                </div>
                <span style={{ fontSize: 22 }}>→</span>
              </a>
              <div style={{ padding: '24px 0', borderTop: `1px solid rgba(14,42,30,0.2)`, borderBottom: `1px solid rgba(14,42,30,0.2)` }}>
                <div style={{ fontSize: 12, opacity: 0.6, ...tk.mono, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disponibilités</div>
                <div style={{ ...tk.display, fontSize: 22, lineHeight: 1.2 }}>Lun — Ven · 8h — 19h · Sam matin sur RDV</div>
              </div>
            </div>
          </div>
          <EcoContactForm tk={tk} />
        </div>
      </div>
    </section>
  );
}

function EcoHome() {
  const [tweaks, setTweak] = useTweaks(ECO_TWEAK_DEFAULTS);
  const tk = ecoTokens(tweaks);
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: tk.ink, background: tk.bg }}>
      <EcoNav tk={tk} current="home" />
      <EcoHomeHero tk={tk} />
      <EcoHomeIntro tk={tk} />
      <EcoHomeServices tk={tk} />
      <EcoHomeDPE tk={tk} />
      <EcoHomeProcess tk={tk} />
      <EcoHomeCases tk={tk} />
      <EcoHomeAccompagnateur tk={tk} />
      <EcoHomeAides tk={tk} />
      <EcoHomeTeam tk={tk} />
      <EcoHomeZone tk={tk} />
      <EcoHomeTestimonials tk={tk} />
      <EcoHomeFAQ tk={tk} />
      <EcoHomeBlog tk={tk} />
      <EcoHomeContact tk={tk} />
      <EcoFooter tk={tk} />
      {window.location.search.includes('dev') && <EcoTweaksPanel tweaks={tweaks} setTweak={setTweak} />}
    </div>
  );
}

window.EcoHome = EcoHome;
