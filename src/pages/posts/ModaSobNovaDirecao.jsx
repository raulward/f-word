import ArticleLayout from '../../components/ArticleLayout/ArticleLayout.jsx'
import heroImage from '../../../artigo-sob-a-nova-direcao.svg'

export default function ModaSobNovaDirecao() {
  return (
    <ArticleLayout
      title="A Moda Sob Nova Direção:"
      subtitle="Quando o Roteiro de O Diabo Veste Prada 2 Encontra a Realidade do Met Gala"
      intro="O anúncio da sequência de O Diabo Veste Prada trouxe à tona uma discussão que vai muito além das telas de cinema: a transformação da moda em um tabuleiro de interesses puramente financeiros. O filme, que à primeira vista parece apenas uma continuação estética, apresenta-se como uma análise sobre as forças que estão, de fato, moldando o futuro desse universo."
      author="Bianca Mei"
      hero={<img src={heroImage} alt="A Moda Sob Nova Direção" />}
    >
      <h2>O Declínio da Liberdade Criativa</h2>
      <p>
        No centro da narrativa cinematográfica está a desvalorização das profissões criativas
        e a dificuldade crescente de sustentar o jornalismo de moda sem a dependência total
        de parcerias comerciais. O filme evidencia uma monopolização onde o poder se
        concentra nas mãos de poucos investidores, priorizando o lucro em detrimento da
        mensagem cultural.
      </p>

      <p>
        Até mesmo a icônica <em>Miranda Priestly</em> é retratada sob uma nova luz: ela já não
        é mais a figura de poder absoluto, sendo também controlada por um sistema que prioriza
        o capital. Essa dinâmica levanta questionamentos reais sobre até que ponto nomes como
        Anna Wintour ainda detêm o controle total da situação.
      </p>

      <h2>O Met Gala 2026 como Vitrine da Ficção</h2>
      <p>
        A vida real parece ter imitado a arte durante a última edição do Met Gala. Em um ano
        cujo tema propunha a moda como forma de expressão, o evento enfrentou questionamentos
        sobre sua coerência. Enquanto o público esperava criatividade, o foco no lucro foi
        evidenciado por protestos contra a presença de financiadores como <em>Jeff Bezos</em>
        e <em>Lauren Sánchez</em>, criticados por associações com políticas rígidas de
        imigração.
      </p>

      <p>Alguns pontos cruciais dessa conexão entre realidade e ficção incluíram:</p>

      <p>
        <strong>Protestos e Críticas aos Financiadores:</strong> A presença de
        <em> Jeff Bezos</em> gerou controvérsia devido a ligações com políticas do ICE nos
        Estados Unidos, levando figuras como <em>Bella Hadid</em> a questionarem a coerência
        de participar de um evento ligado a esse cenário.
      </p>

      <p>
        <strong>O Look de Sarah Paulson:</strong> A atriz utilizou uma criação da grife
        <em> Matières Fécales</em>, que critica o 1% mais rico da população, retratando uma
        sociedade cega pelo dinheiro.
      </p>

      <p>
        <strong>Ausências Estratégicas:</strong> Nomes como <em>Zendaya</em>,
        <em> Meryl Streep</em> e <em>Lady Gaga</em> não compareceram, o que foi interpretado
        por muitos como um posicionamento diante do novo cenário comercial do evento.
      </p>

      <p>
        <strong>Exclusividade e Comercialização:</strong> Relatos de que
        <em> Lauren Sánchez</em> teria pago cerca de 10 milhões de dólares para garantir
        presença e exclusividade com a grife Schiaparelli ajudam a explicar por que o tapete
        vermelho funcionou muito mais como uma vitrine comercial do que como uma exposição
        de arte.
      </p>

      <h2>A Resistência do Lado Humano</h2>
      <p>
        Assim como a trajetória de <em>Andrea Sachs</em> no novo filme representa a parte
        mais humana de quem ainda acredita na comunicação como forma de mudar vidas, o
        mercado de moda atual enfrenta o desafio de equilibrar a viabilidade econômica com a
        essência criativa.
      </p>

      <p>
        A grande questão levantada tanto pela ficção quanto pelo Met Gala 2026 é:{' '}
        <em>
          como sustentar a moda como expressão artística dentro de um sistema que a enxerga
          prioritariamente como um balanço financeiro?
        </em>
      </p>
    </ArticleLayout>
  )
}
