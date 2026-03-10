import Container from "../components/container"; 
import Input from "../components/input";

import Fontinicial from "../components/Titulofont";
import Texto_inicio from "../components/texto-inicio";
import Botao_inicio from "../components/botão-inicio";
import Botao_inicio2 from "../components/botão-inicio2";
export default function inicio({navigation}){
  return(
 
      
   <Container>
 <Fontinicial tit={"Bem vindos ao XLmotors"}/>
      <Texto_inicio txt={"automoveis de luxo e alta perfomace"} />
      
       <Texto_inicio txt={"criar senha"} />
      <Input/>
      <Texto_inicio txt={"confirmar senha"} />
        <Input/>
      <Texto_inicio txt={"confirmar senha"} />
      <Input/>
      <Botao_inicio titulo={"Vender"}/> 
      <Botao_inicio2 titulo={"comprar"}/>
    </Container>  
   
  );
}
   
