import Container from "../components/container"; 
import Texto from "../components/label";
import Titulo from "../components/titulo";
import Input from "../components/input";
import Botao from "../components/botão";


export default function cadastro({navigation}){
  return(
 
      
   <Container>
 <Titulo tit={"XLmotors"}/>
      <Texto txt={"Usuário"} />
      <Input/>
      <Texto txt={"Senha"} />
      <Input/>
      <Botao titulo={"logar"}/>
      <Texto txt={"não tem conta? Criar conta"} />
    </Container>  
   
  );
}
   
