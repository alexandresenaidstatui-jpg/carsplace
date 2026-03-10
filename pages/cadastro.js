import Container from "../components/container"; 
import Texto from "../components/label";
import Titulo from "../components/titulo";
import Input from "../components/input";
import Botao from "../components/botão";


export default function cadastro({navigation}){
  return(
 
      
   <Container>
 <Titulo tit={"XLmotors"}/>
      <Texto txt={"Numero ou email"} />
      <Input/>
       <Texto txt={"criar senha"} />
      <Input/>
      <Texto txt={"confirmar senha"} />
        <Input/>
      <Texto txt={"confirmar senha"} />
      <Input/>
      <Botao titulo={"criar"}/>
    </Container>  
   
  );
}
   
