import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Editoriais from './pages/Editoriais.jsx'
import Artigos from './pages/Artigos.jsx'
import GuestWriters from './pages/GuestWriters.jsx'
import SobreNos from './pages/SobreNos.jsx'
import ModaSobNovaDirecao from './pages/posts/ModaSobNovaDirecao.jsx'
import DiaboVestePrada from './pages/posts/DiaboVestePrada.jsx'
import CabeloComoPolitica from './pages/posts/CabeloComoPolitica.jsx'
import InternetTransformouTendencia from './pages/posts/InternetTransformouTendencia.jsx'
import MuitoAlemDoLook from './pages/posts/MuitoAlemDoLook.jsx'
import OQueVoceVeste from './pages/posts/OQueVoceVeste.jsx'
import FotografiaDeModaAtualidade from './pages/posts/FotografiaDeModaAtualidade.jsx'
import EquilibrivmEModa from './pages/posts/EquilibrivmEModa.jsx'
import QuemContaAModa from './pages/posts/QuemContaAModa.jsx'
import SindromeMeiaNoiteParis from './pages/posts/SindromeMeiaNoiteParis.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="editoriais" element={<Editoriais />} />
        <Route path="artigos" element={<Artigos />} />
        <Route path="artigos/moda-sob-nova-direcao" element={<ModaSobNovaDirecao />} />
        <Route path="artigos/diabo-veste-prada" element={<DiaboVestePrada />} />
        <Route path="artigos/cabelo-como-politica" element={<CabeloComoPolitica />} />
        <Route path="artigos/internet-transformou-tendencia" element={<InternetTransformouTendencia />} />
        <Route path="artigos/muito-alem-do-look" element={<MuitoAlemDoLook />} />
        <Route path="artigos/o-que-voce-veste" element={<OQueVoceVeste />} />
        <Route path="artigos/fotografia-de-moda-na-atualidade" element={<FotografiaDeModaAtualidade />} />
        <Route path="artigos/equilibrivm-e-a-moda" element={<EquilibrivmEModa />} />
        <Route path="artigos/quem-conta-a-moda" element={<QuemContaAModa />} />
        <Route path="artigos/sindrome-meia-noite-paris" element={<SindromeMeiaNoiteParis />} />
        <Route path="guest-writers" element={<GuestWriters />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
