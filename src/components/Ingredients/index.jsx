import { Container } from './styles'

import AlfaceImg from '../../img/dishes-image/alface.png'
import AmeixaImg from '../../img/dishes-image/ameixa.png'
import AmendoasImg from '../../img/dishes-image/amendoas.png'
import AnizImg from '../../img/dishes-image/aniz.png'
import CafeImg from '../../img/dishes-image/cafe.png'
import CamaraoImg from '../../img/dishes-image/camarao.png'
import CanelaImg from '../../img/dishes-image/canela.png'
import ClarasImg from '../../img/dishes-image/claras.png'
import DamascoImg from '../../img/dishes-image/damasco.png'
import FarinhaImg from '../../img/dishes-image/farinha.png'
import LimaoImg from '../../img/dishes-image/limao.png'
import MaçaImg from '../../img/dishes-image/maça.png'
import MaracujaImg from '../../img/dishes-image/maracuja.png'
import MassaImg from '../../img/dishes-image/massa.png'
import PaoGrandeImg from '../../img/dishes-image/pao.png'
import PaoPequenoImg from '../../img/dishes-image/paonaan.png'
import PepinoImg from '../../img/dishes-image/pepino.png'
import PessegoImg from '../../img/dishes-image/pessego.png'
import PestoImg from '../../img/dishes-image/pesto.png'
import PresuntoImg from '../../img/dishes-image/presunto.png'
import RabaneteImg from '../../img/dishes-image/rabanete.png'
import RuculaImg from '../../img/dishes-image/rucula.png'
import TomateImg from '../../img/dishes-image/tomate.png'
import WhiskyImg from '../../img/dishes-image/whisky.png'

export function Ingredients({ name }) {
  return (
    <Container>
      <span>{name == "alface" ? <img src={AlfaceImg} alt="" /> : ""}</span>
      <span>{name == "ameixa" ? <img src={AmeixaImg} alt="" /> : ""}</span>
      <span>{name == "amendoas" ? <img src={AmendoasImg} alt="" /> : ""}</span>
      <span>{name == "aniz" ? <img src={AnizImg} alt="" /> : ""}</span>
      <span>{name == "cafe" ? <img src={CafeImg} alt="" /> : ""}</span>
      <span>{name == "camarao" ? <img src={CamaraoImg} alt="" /> : ""}</span>
      <span>{name == "canela" ? <img src={CanelaImg} alt="" /> : ""}</span>
      <span>{name == "claras" ? <img src={ClarasImg} alt="" /> : ""}</span>
      <span>{name == "damasco" ? <img src={DamascoImg} alt="" /> : ""}</span>
      <span>{name == "farinha" ? <img src={FarinhaImg} alt="" /> : ""}</span>
      <span>{name == "limao" ? <img src={LimaoImg} alt="" /> : ""}</span>
      <span>{name == "maca" ? <img src={MaçaImg} alt="" /> : ""}</span>
      <span>{name == "maracuja" ? <img src={MaracujaImg} alt="" /> : ""}</span>
      <span>{name == "massa" ? <img src={MassaImg} alt="" /> : ""}</span>
      <span>{name == "pao" ? <img src={PaoGrandeImg} alt="" /> : ""}</span>
      <span>{name == "paonaan" ? <img src={PaoPequenoImg} alt="" /> : ""}</span>
      <span>{name == "pepino" ? <img src={PepinoImg} alt="" /> : ""}</span>
      <span>{name == "pessego" ? <img src={PessegoImg} alt="" /> : ""}</span>
      <span>{name == "pesto" ? <img src={PestoImg} alt="" /> : ""}</span>
      <span>{name == "presunto" ? <img src={PresuntoImg} alt="" /> : ""}</span>
      <span>{name == "rabanete" ? <img src={RabaneteImg} alt="" /> : ""}</span>
      <span>{name == "rucula" ? <img src={RuculaImg} alt="" /> : ""}</span>
      <span>{name == "tomate" ? <img src={TomateImg} alt="" /> : ""}</span>
      <span>{name == "whisky" ? <img src={WhiskyImg} alt="" /> : ""}</span>
    </Container>
  )
}