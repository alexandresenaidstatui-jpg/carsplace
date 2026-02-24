import Container from "./components/container"; 
import Texto from "./components/label";
import Titulo from "./components/titulo";
import Input from "./components/input";
import Botao from "./components/botão";
import Background from "./components/background";

export default function App(){
  return(
    <Background>
      <Titulo tit={"CARSPLACE"}/>
   <Container>

      <Texto txt={"Usuário"} />
      <Input/>
      <Texto txt={"Senha"} />
      <Input/>
      <Botao titulo={"logar"}/>
    </Container>  
    </Background>
  );
}
   


