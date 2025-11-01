document.getElementById('energyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores do formulário
    const casaCimaMesAnterior = parseFloat(document.getElementById('casaCimaMesAnterior').value);
    const casaCimaMesAtual = parseFloat(document.getElementById('casaCimaMesAtual').value);
    const consumoTotalPeriodo = parseFloat(document.getElementById('consumoTotalPeriodo').value);
    const valorConsumo = parseFloat(document.getElementById('valorConsumo').value);
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const valorBandeira = parseFloat(document.getElementById('valorBandeira').value) || 0;
    
    // Validar se a leitura atual é maior que a anterior
    if (casaCimaMesAtual < casaCimaMesAnterior) {
        alert('Erro: A leitura atual da casa de cima não pode ser menor que a do mês anterior!');
        return;
    }
    
    // Validar se o valor do consumo não é maior que o valor total
    if (valorConsumo > valorConta) {
        alert('Erro: O valor do consumo não pode ser maior que o valor total da conta!');
        return;
    }
    
    // Calcular consumo da casa de cima no período
    const consumoCasaCima = casaCimaMesAtual - casaCimaMesAnterior;
    
    // Validar se o consumo da casa de cima não é maior que o total
    if (consumoCasaCima > consumoTotalPeriodo) {
        alert('Erro: O consumo da casa de cima não pode ser maior que o consumo total do período!');
        return;
    }
    
    // Calcular consumo da casa de baixo
    const consumoCasaBaixo = consumoTotalPeriodo - consumoCasaCima;
    
    // Calcular proporções baseadas no consumo
    const proporcaoCasaCima = consumoTotalPeriodo > 0 ? (consumoCasaCima / consumoTotalPeriodo) * 100 : 0;
    const proporcaoCasaBaixo = consumoTotalPeriodo > 0 ? (consumoCasaBaixo / consumoTotalPeriodo) * 100 : 0;
    
    // Calcular encargos extras totais (valor total - valor consumo - bandeira)
    const encargosExtras = valorConta - valorConsumo - valorBandeira;
    
    // Calcular valores do consumo de cada casa (proporcional ao consumo em kWh)
    const valorConsumoCasaCima = valorConsumo * (proporcaoCasaCima / 100);
    const valorConsumoCasaBaixo = valorConsumo * (proporcaoCasaBaixo / 100);
    
    // Calcular encargos extras de cada casa (divididos 50/50)
    const encargosCasaCima = encargosExtras / 2;
    const encargosCasaBaixo = encargosExtras / 2;
    
    // Calcular bandeira tarifária de cada casa (proporcional ao consumo)
    const bandeiraCasaCima = consumoTotalPeriodo > 0 ? valorBandeira * (consumoCasaCima / consumoTotalPeriodo) : valorBandeira / 2;
    const bandeiraCasaBaixo = consumoTotalPeriodo > 0 ? valorBandeira * (consumoCasaBaixo / consumoTotalPeriodo) : valorBandeira / 2;
    
    // Calcular valores totais a pagar (consumo + encargos 50/50 + bandeira proporcional)
    const valorCasaCima = valorConsumoCasaCima + encargosCasaCima + bandeiraCasaCima;
    const valorCasaBaixo = valorConsumoCasaBaixo + encargosCasaBaixo + bandeiraCasaBaixo;
    
    // Exibir resultados
    document.getElementById('consumoCasaCima').textContent = formatarKWh(consumoCasaCima);
    document.getElementById('consumoCasaBaixo').textContent = formatarKWh(consumoCasaBaixo);
    document.getElementById('consumoTotal').textContent = formatarKWh(consumoTotalPeriodo);
    
    document.getElementById('proporcaoCasaCima').textContent = formatarPercentual(proporcaoCasaCima);
    document.getElementById('proporcaoCasaBaixo').textContent = formatarPercentual(proporcaoCasaBaixo);
    
    document.getElementById('valorCasaCima').textContent = formatarMoeda(valorCasaCima);
    document.getElementById('valorCasaBaixo').textContent = formatarMoeda(valorCasaBaixo);
    document.getElementById('valorTotalVerificado').textContent = formatarMoeda(valorCasaCima + valorCasaBaixo);
    
    // Exibir detalhamento
    document.getElementById('encargosExtras').textContent = formatarMoeda(encargosExtras);
    document.getElementById('bandeiraTotal').textContent = formatarMoeda(valorBandeira);
    document.getElementById('encargosCasaCima').textContent = formatarMoeda(encargosCasaCima);
    document.getElementById('encargosCasaBaixo').textContent = formatarMoeda(encargosCasaBaixo);
    document.getElementById('bandeiraCasaCima').textContent = formatarMoeda(bandeiraCasaCima);
    document.getElementById('bandeiraCasaBaixo').textContent = formatarMoeda(bandeiraCasaBaixo);
    document.getElementById('valorConsumoCasaCima').textContent = formatarMoeda(valorConsumoCasaCima);
    document.getElementById('valorConsumoCasaBaixo').textContent = formatarMoeda(valorConsumoCasaBaixo);
    
    // Mostrar resultados
    document.getElementById('results').classList.remove('hidden');
    
    // Scroll suave para os resultados
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function formatarKWh(valor) {
    return valor.toFixed(2).replace('.', ',') + ' kWh';
}

function formatarPercentual(valor) {
    return valor.toFixed(2).replace('.', ',') + '%';
}

function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function resetForm() {
    document.getElementById('energyForm').reset();
    document.getElementById('results').classList.add('hidden');
    document.getElementById('energyForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

