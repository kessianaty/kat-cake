//Ester e Kessia

 import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App () {

  return (
    

    
  <ScrollView>
    
    <View style = {styles.container}>
      <Image style = {styles.paragraph}resizeMethod="center" source = {require("./assets/doces/logo.png")}/>
      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}> Bolo de chocolate </Text>
        <Image style = {styles.img} resizeMethod="center" source = {require("./assets/doces/bolo-de-chocolate-com-brigadeiro-de-ninho.jpeg")}/>
        <Text style = {styles.texto2}>Incomparavel bolo de chocolate com cobertura de ninho </Text>
        <Text style = {styles.texto2}>R$39,99</Text>
      </View>
      
      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}>Bolo de limão</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/Bolo-de-Limao.webp")}/>
        <Text style = {styles.texto2}>Com a poesia da tranformação venha provar nosso delicoso bolo de limão, onde o mais amargo se tornou o mais doce</Text>
        <Text style = {styles.texto2}>R$22,90</Text>
      </View>
      
      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Bolo de morango</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/bolodemorangopicapau.jpg")}/>
        <Text style = {styles.texto2}>"Hummm, bolo de morango" - disse o grande filososfo Pica-Pau</Text>
        <Text style = {styles.texto2}>R$35,10</Text>
      </View>

      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}> Bolo Floresta Branca </Text>
        <Image style = {styles.img} resizeMethod="center" source = {require("./assets/doces/florestabranca.jpeg")}/>
        <Text style = {styles.texto2}>O bolo Floresta Branca é uma deliciosa sobremesa que combina camadas de pão de ló de chocolate, creme branco e cerejas em calda. </Text>
        <Text style = {styles.texto2}>R$72,50</Text>
      </View>

      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}> Torta de limão </Text>
        <Image style = {styles.img} resizeMethod="center" source = {require("./assets/doces/tortalimao.webp")}/>
        <Text style = {styles.texto2}>camadas cremosas e cítricas de limão com uma base crocante de massa. É uma deliciosa combinação de sabores que agrada aos amantes de sobremesas com um toque azedo e doce ao mesmo tempo</Text>
        <Text style = {styles.texto2}>R$26,00</Text>
      </View>

      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Torta de morango</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/tortamorango.jpg")}/>
        <Text style = {styles.texto2}>O contraste entre a doçura dos morangos e a textura da massa cria uma experiência de sabor equilibrada e prazerosa. É uma opção perfeita para os amantes de morango e uma escolha refrescante para qualquer ocasião</Text>
        <Text style = {styles.texto2}>R$27,50</Text>
      </View>

      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Broa</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/broa.jpg")}/>
        <Text style = {styles.texto2}>Seu aroma e sabor únicos fazem dela uma opção deliciosa para um lanche ou para acompanhar refeições</Text>
        <Text style = {styles.texto2}>R$4,15</Text>
      </View>

      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Pudim de leite condensado</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/pudimleitecondenado.jpg")}/>
        <Text style = {styles.texto2}>É uma opção deliciosa e reconfortante para quem aprecia sobremesas doces e cremosas</Text>
        <Text style = {styles.texto2}>R$35,15</Text>
      </View>

      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Rocambole de prestigio</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/rocambole.jpg")}/>
        <Text style = {styles.texto2}>Cada fatia revela uma combinação perfeita entre o sabor intenso do chocolate e o frescor do coco</Text>
        <Text style = {styles.texto2}>R$45,15</Text>
      </View>

      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Sonho de creme</Text>
        <Image style = {styles.img} resizeMethod = "center" source = {require("./assets/doces/sonhodecreme.jpg")}/>
        <Text style = {styles.texto2}>Com uma massa macia e fofinha, é recheado com um delicioso creme de baunilha</Text>
        <Text style = {styles.texto2}>R$3,75</Text>
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#FAE4B5',
    flex: 1,
    padding: 8,
    
  },
  paragraph: {
    
    width: 400,
    height:300,
   justifyContent:'center',
  },
  img: {
    justifyContent:'center',
    width: 200,
    height:200,
    borderRadius: 80,
  },
  cxfoto: {
    backgroundColor: '#FFB0CE',
    margin: 25, 
    padding: 50,
    borderRadius: 100,
    
  },
texto: {
  fontSize: 30,
  color: '#319EFA',
  backgroundColor: '#FFB0CE',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: ''
},
texto2: {
  marginTop: 20, 
  fontSize: 20,
  color: '#1663b1',
  backgroundColor: '#faccef',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: '',
  padding: 10,
  borderRadius:35,
}
});