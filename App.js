import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

const Titulo = styled.Text`
  font-size: 30px;
`;
const Resultado = styled.Text`
  color: white;
  font-size: 18px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 25px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcularView = styled.View`
  padding-top: 30px;
  margin-top: 10px;
`;

const ResultadoView = styled.View`
  background-color: ${(props) => props.cor};
  margin-top: 30px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const CalcularBottao = styled.Button``;

const App = () => {
  const [altura, alteraAltura] = useState('');
  const [peso, alteraPeso] = useState('');
  const [imc, alteraIMC] = useState(0);
  const [categoria, alteraCategoria] = useState('normal');
  const [cor, alteraCor] = useState('#4caf50');

  useEffect(() => {
    calcular();
  }, [altura, peso]);

  const calcular = () => {
    const indice = (
      parseFloat(peso.replace(',', '.')) /
      (parseFloat(altura.replace(',', '.')) *
        parseFloat(altura.replace(',', '.')))
    ).toFixed(2);
    alteraIMC(indice);
    if (indice < 18.5) {
      alteraCategoria('magreza');
      alteraCor('#2196f3');
    } else if (indice <= 24.9) {
      alteraCategoria('normal');
      alteraCor('#4caf50');
    } else if (indice <= 29.9) {
      alteraCategoria('sobrepeso');
      alteraCor('#2196f3');
    } else if (indice <= 39.9) {
      alteraCategoria('obesidade');
      alteraCor('#ff9800');
    } else if (indice > 40) {
      alteraCategoria('obesidade gravidade');
      alteraCor('#f44336');
    }
  };
  return (
    <Pagina>
      <Titulo>Calculadora de IMC</Titulo>

      <Input
        placeholder="Peso"
        keyboardType="numeric"
        value={peso}
        onChangeText={(n) => alteraPeso(n)}
      />
      <Input
        placeholder="Altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={(n) => alteraAltura(n)}
      />
      {/* <CalcularView>
        <CalcularBottao title="Calcular" onPress={calcular} />
      </CalcularView> */}
      {imc > 0 && altura !== 0 && (
        <ResultadoView cor={cor}>
          <Resultado>{imc}</Resultado>
          <Resultado>{categoria}</Resultado>
        </ResultadoView>
      )}
    </Pagina>
  );
};

export default App;
