# Calculadora de Energia - Divisão de Conta de Luz

Aplicação web simples para calcular a divisão proporcional da conta de luz entre duas casas que compartilham um medidor.

## Funcionalidades

- Calcula o consumo mensal de cada casa baseado nas leituras acumuladas
- Divide o valor da conta de forma proporcional ao consumo
- Interface intuitiva e responsiva

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Preencha os campos com as informações solicitadas:
   - **Leituras da Casa de Cima**: Digite a leitura acumulada do mês anterior e do mês atual do medidor específico da casa de cima
   - **Consumo Total do Período**: Digite o consumo total em kWh que vem na sua conta de luz da Energisa
   - **Valor da Conta**: Digite o valor total da conta de luz em reais
3. Clique no botão "Calcular"
4. Os resultados serão exibidos mostrando:
   - Consumos do período (em kWh) de cada casa
   - Proporção de cada casa no consumo total
   - Valor que cada casa deve pagar

## Cálculo Realizado

O sistema calcula:
1. **Consumo da casa de cima no período** = Leitura atual - Leitura do mês anterior
2. **Consumo da casa de baixo** = Consumo total do período - Consumo da casa de cima
3. **Proporção** = (Consumo da casa / Consumo total) × 100
4. **Valor a pagar** = Valor total da conta × (Proporção / 100)

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer instalação ou servidor web
- Funciona offline após carregar os arquivos

## Estrutura do Projeto

```
calculadora_energia/
├── index.html      # Página principal
├── styles.css      # Estilos da aplicação
├── script.js       # Lógica de cálculo
└── README.md       # Este arquivo
```

## Observações

- Todas as validações são feitas automaticamente
- O sistema verifica se as leituras atuais são maiores que as anteriores
- Verifica se o consumo da casa de cima não excede o consumo total do período
- Os valores são formatados automaticamente com separadores decimais brasileiros
- O consumo total do período deve ser obtido diretamente da sua conta de luz da Energisa

