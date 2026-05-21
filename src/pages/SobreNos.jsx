import TeamCard from '../components/TeamCard/TeamCard.jsx'
import styles from './SobreNos.module.css'

const logoModules = import.meta.glob('../../logos-sobre-nos/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

function normalizeLogoKey(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
}

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, src]) => {
    const filename = path.split('/').pop()
    return [normalizeLogoKey(filename), src]
  }),
)

function getLogoSrc(name, fallback) {
  const firstName = name.split(/\s+/)[0]

  return (
    logos[normalizeLogoKey(name)] ||
    logos[normalizeLogoKey(firstName)] ||
    logos[normalizeLogoKey(fallback)] ||
    null
  )
}

const team = [
  {
    name: 'Natan Barreto',
    logo: 'NB',
    role: 'Diretor de Conteúdo',
    bio: 'Estudante de publicidade e propaganda pela Universidade Católica de Brasília. Se especializa em moda e estética, focando principalmente em estratégia e direção criativa.',
  },
  {
    name: 'Giulia Vieira',
    logo: 'GV',
    role: 'Designer Editorial',
    bio: 'Estudante de publicidade e propaganda pela Universidade Católica de Brasília. Se especializa em moda e estética, focando principalmente em estratégia e direção criativa.',
  },
  {
    name: 'Nicole Cortês',
    logo: 'NC',
    role: 'Designer Editorial',
    bio: 'Estudante de Publicidade e propaganda na Universidade Católica de Brasília. Se especializa em moda, comportamento e cultura visual, busca criar experiências visuais modernas, estratégicas e marcantes.',
  },
  {
    name: 'Victor Oliveira',
    logo: 'VO',
    role: 'Estrategista de Marketing',
    bio: 'Estudante de publicidade e propaganda pela Universidade Católica de Brasília. Atua na criação de estratégias para fortalecimento de presença digital.',
  },
  {
    name: 'Yasmin Gama',
    logo: 'YG',
    role: 'Estrategista de Marketing',
    bio: 'Estrategista de marketing e mídias sociais, estudante de publicidade e propaganda pela Universidade Católica de Brasília. Se especializa em jornalismo e redação, com foco em estratégia e criação de conteúdo.',
  },
  {
    name: 'Olívia Lima',
    logo: 'OL',
    role: 'Administradora',
    bio: 'Formada em Design Visual e estudante de Publicidade e Propaganda na Universidade Católica de Brasília. Atuação com foco no fluxo de operações.',
  },
  {
    name: 'Sarah Lima',
    logo: 'SL',
    role: 'Redatora',
    bio: 'Estudante de jornalismo de comunicação com foco em moda, estética e comunicação criativa. Suas áreas de atuação incluem fotografia, audiovisual e copywriting.',
  },
]

export default function SobreNos() {
  return (
    <main className={styles.page}>
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <h1 className={styles.bannerTitle}>Sobre nós</h1>
          <p className={styles.bannerText}>
            A F-WORD nasceu da visão de geração Z sobre a comunicação e jornalismo de moda. Buscamos
            traduzir a moda e o comportamento como linguagem estética e cultural. Para além da
            tendência, nos preocupamos em revelar os significados e os símbolos por trás de cada
            movimento de moda, da cultura e da sociedade.
          </p>
          <p className={styles.bannerText}>
            Nessa nos comprometemos com a ideia de criar e difundir estética, comportamento, em
            utilizar e compartilhar com responsabilidade as informações que têm acesso. Além de
            sempre se preocupar com a integridade das pessoas que são expostas em nossos conteúdos.
          </p>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className={styles.teamTitle}>Nossa Equipe</h2>
        <div className={styles.teamList}>
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              logo={member.logo}
              logoSrc={getLogoSrc(member.name, member.logo)}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
