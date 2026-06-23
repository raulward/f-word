import ArticleLayout from '../../components/ArticleLayout/ArticleLayout.jsx'
import styles from './EquilibrivmEModa.module.css'
import heroImage from '../../assets/equilibrivm/capa.jpeg'
import mandingaImage from '../../assets/equilibrivm/image1.png'
import desgracaImage from '../../assets/equilibrivm/image2.png'
import funkGenerationImage from '../../assets/equilibrivm/image3.png'
import nanaImage from '../../assets/equilibrivm/image4.png'
import equilibrivmImage from '../../assets/equilibrivm/image5.png'

export default function EquilibrivmEModa() {
  return (
    <ArticleLayout
      title="A moda como instrumento de transição nas eras na carreira de divas pop:"
      subtitle="Anitta e a era EQUILIBRIVM"
      intro="A moda, juntamente com a música, é uma forma de comunicação capaz de transmitir valores, identidades, crenças e até mesmo posicionamentos sociais."
      author="Duda Lucena"
      hero={
        <img
          src={heroImage}
          alt="Anitta em visual da era EQUILIBRIVM cercada por velas vermelhas"
          style={{ objectPosition: 'center 38%' }}
        />
      }
    >
      <p>
        Dentro do universo da construção de uma imagem de diva pop, a moda sempre caminhou junto,
        até porque, além da sonoridade, o que de fato faz uma artista ser pop é a maneira como ela
        se comunica e se mostra para o mundo. É aí que a moda entra de forma estratégica na
        consolidação das famosas &quot;eras&quot; dentro da carreira de uma artista pop. Dessa
        forma, a moda ultrapassa sua função utilitária e torna-se um importante instrumento de
        construção de significados e posicionamento.
      </p>

      <p>
        Mas afinal, o que é uma era dentro do universo pop? No mercado musical, uma era pode ser
        compreendida como um período específico da carreira de um artista, marcado por uma
        identidade própria, conceitos visuais definidos e uma narrativa que orienta a comunicação
        de um álbum ou projeto. Além do lançamento de novas músicas, uma era representa a
        construção de todo um universo capaz de conectar sonoridade, estética, performances,
        discursos e posicionamentos em uma mesma mensagem.
      </p>

      <p>
        Para as chamadas &quot;divas pop&quot;, as eras desempenham um papel fundamental na
        manutenção de sua relevância cultural e mercadológica. Cada nova fase apresenta ao público
        uma versão diferente da artista, com novos códigos visuais, figurinos, cores, referências e
        comportamentos que dialogam diretamente com os temas abordados em suas músicas. Dessa
        forma, a moda deixa de ser um elemento complementar e passa a atuar como uma das principais
        ferramentas de comunicação dessas transformações.
      </p>

      <p>
        Ao longo das últimas décadas, artistas como Madonna, Lady Gaga, Beyoncé e Taylor Swift
        consolidaram a ideia de que cada álbum pode funcionar como um novo capítulo de suas
        carreiras, acompanhado por transformações visuais que ajudam a comunicar novos
        posicionamentos e narrativas. Nesse contexto, as eras tornam-se verdadeiras estratégias de
        branding, permitindo que o público identifique imediatamente os valores e significados
        associados a cada fase artística.
      </p>

      <p>
        Em um mercado cada vez mais competitivo, a construção visual e estética de uma era musical
        é tão importante quanto as canções, pois contribui ativamente para a consolidação da
        identidade artística e, principalmente, para a conexão emocional com quem consome a artista.
        A roupa, ou o estilo em si, gera identificação imediata. Dessa forma, a consolidação só vem
        de fato quando todos os fatores conseguem conversar entre si: moda, música e a artista.
      </p>

      <p>
        Quando uma artista passa de uma era para outra, essa transição precisa ser bem construída
        visualmente e comunicada de forma estratégica. Caso contrário, gera o efeito oposto:
        rejeição e descontentamento por parte do público, por não se tratar de algo estruturado ou
        artisticamente coeso. É possível observar esse comportamento por meio de comentários nas
        redes sociais, nos quais fãs e entusiastas do universo pop criticam artistas por eras mal
        construídas, desconexas ou forçadas.
      </p>

      <p>
        Algumas cantoras, como a norte-americana Ariana Grande, enfrentam dificuldades justamente
        pela falta de coesão entre uma era e outra. Muitas vezes, o público se apega à estética e à
        imagem construídas em determinada fase da carreira e, quando a artista adota um novo
        conceito, parte dos fãs não acompanha essa transição. Em alguns casos, mudanças muito
        bruscas de estilo acabam não dialogando com as expectativas do público, o que pode gerar
        estranhamento e dificultar a recepção do novo projeto. Por esse motivo, moda e
        posicionamento precisam conversar de maneira conjunta e coesa o tempo todo.
      </p>

      <p>
        Quando voltamos o olhar para o cenário brasileiro, a cantora Anitta e sua nova fase
        EQUILIBRIVM demonstram justamente como conduzir essa transição de eras de maneira
        estratégica. A artista utiliza a moda como um importante instrumento de comunicação,
        construindo uma ponte entre sua fase anterior e seu novo posicionamento.
      </p>

      <p>
        Não é por acaso que, mesmo saindo de uma era marcada por uma estética mais intensa,
        associada a funks mais pesados e performances mais provocativas e muito amada pelos fãs,
        ela migrou para um momento profundamente conectado à espiritualidade e à ancestralidade,
        com uma sonoridade completamente diferente de tudo que já havia apresentado, e ainda assim
        foi muito bem recebida por sua base de fãs.
      </p>

      <p>
        A mudança não foi percebida como uma ruptura, mas como uma evolução natural de sua
        trajetória, resultado de uma construção visual e narrativa cuidadosamente planejada.
      </p>

      <section className={styles.visualBlock} aria-label="Funk Generation X EQUILIBRIVM">
        <h2 className={styles.visualTitle}>Funk Generation X EQUILIBRIVM</h2>
        <div className={styles.imageGrid}>
          <figure className={`${styles.imageFrame} ${styles.portrait}`}>
            <img
              src={funkGenerationImage}
              alt="Anitta em visual da era Funk Generation"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={`${styles.imageFrame} ${styles.portrait}`}>
            <img
              src={equilibrivmImage}
              alt="Anitta em visual da era EQUILIBRIVM"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <p>
        Após uma breve pausa em sua agenda de compromissos nacionais e internacionais em 2025,
        Anitta retornou com uma proposta que refletia aspectos centrais de sua vivência pessoal
        naquele momento: a busca pelo equilíbrio, pela espiritualidade e pela conexão com suas
        raízes culturais. É justamente por isso que o álbum EQUILIBRIVM representa uma das
        transformações mais significativas de sua carreira.
      </p>

      <p>
        Para materializar essa narrativa, a cantora incorporou ao seu trabalho referências ligadas
        ao candomblé, religião da qual faz parte, além de instrumentos, sonoridades e elementos
        visuais profundamente conectados à cultura brasileira. As músicas apresentam letras mais
        reflexivas e uma estética que valoriza a ancestralidade e a identidade nacional. O que mais
        chama a atenção, no entanto, é a forma como todos esses elementos foram organizados de
        maneira coesa, transformando-se em uma era artística completa, na qual a moda desempenha um
        papel fundamental.
      </p>

      <section className={`${styles.visualBlock} ${styles.landscape}`} aria-label="Mandingá">
        <div className={`${styles.imageGrid} ${styles.single}`}>
          <figure className={styles.imageFrame}>
            <img
              src={mandingaImage}
              alt="Anitta na gravação do visual de Mandingá em Belo Horizonte"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <p className={styles.caption}>
          Anitta na gravação do visual de &quot;Mandingá&quot;, em Belo Horizonte.
        </p>
      </section>

      <p>
        A diretora criativa do projeto EQUILIBRIVM, Nídia Aranha, revelou em entrevista à
        Billboard que o conceito de toda a era nasceu da intenção de representar o encontro entre o
        sagrado e o humano, traduzindo visualmente a nova fase de vida de Anitta. Segundo a
        diretora, a proposta era celebrar a alma do Brasil por meio de elementos ligados à
        ancestralidade, à espiritualidade e à cultura nacional. Nesse contexto, a moda assumiu um
        papel central na materialização desses significados, funcionando como um elo entre a
        narrativa musical e a identidade visual do projeto.
      </p>

      <p>
        Todo esse cuidado com a estética também pode ser observado no processo de desenvolvimento
        dos visuais do álbum. Em entrevista ao portal Terra, o produtor Felipe Britto afirmou que
        Anitta participou ativamente da construção estética, chegando ao projeto repleta de
        referências de moda, arte sacra, rituais e comportamento visual. Segundo ele, o desafio
        consistiu em transformar esse conjunto de referências em uma identidade coesa, capaz de
        representar a essência do álbum. Nesse processo, Nídia Aranha teve papel fundamental ao
        organizar esses elementos e conectá-los em uma narrativa visual única.
      </p>

      <section className={`${styles.visualBlock} ${styles.portrait}`} aria-label="Nanã e Desgraça">
        <div className={styles.imageGrid}>
          <figure className={styles.imageFrame}>
            <img
              src={nanaImage}
              alt="Anitta na gravação do visual de Nanã em Belo Horizonte"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles.imageFrame}>
            <img
              src={desgracaImage}
              alt="Anitta na gravação do visual de Desgraça em Belo Horizonte"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <p className={styles.caption}>
          Anitta na gravação do visual de &quot;Nanã&quot; e &quot;Desgraça&quot;, em Belo
          Horizonte.
        </p>
      </section>

      <p>
        A era EQUILIBRIVM demonstra como a moda pode atuar como uma ferramenta estratégica de
        comunicação, transformando elementos visuais em mecanismos de produção de significado e
        fortalecimento da identidade artística.
      </p>

      <p className={styles.sources}>
        <em>
          Fontes:{' '}
          <a
            href="https://billboard.com.br/nidia-aranha-moldou-o-disco-equilibrivm-de-anitta/"
            target="_blank"
            rel="noreferrer"
          >
            Billboard Brasil
          </a>{' '}
          e{' '}
          <a
            href="https://www.terra.com.br/diversao/musica/nao-da-pra-usar-elementos-sagrados-como-cenario-decorativo-diz-produtor-dos-visuais-do-equilibrivm-de-anitta-entrevista,617668d15c4aff17689359d087c84856i6lnwjhp.html"
            target="_blank"
            rel="noreferrer"
          >
            Terra
          </a>
          .
        </em>
      </p>
    </ArticleLayout>
  )
}
