// Variáveis para armazenar os totais
let saldoTotal = 0;
let totalReceitas = 0;
let totalDespesas = 0;

// Array para armazenar todas as transações
const transacoes = [];

// Função principal para adicionar transação
function adicionarTarefa() {
    // Obter valores dos inputs
    const descricao = document.getElementById('descricao').value;
    const valorInput = document.getElementById('valor').value;
    const valor = parseFloat(valorInput);
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Validar os campos
    if (!descricao || !valorInput || isNaN(valor) || valor <= 0) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Criar objeto de transação
    const transacao = {
        descricao,
        valor,
        tipo,
        data: new Date().toLocaleDateString('pt-BR')
    };

    // Adicionar ao array de transações
    transacoes.push(transacao);

    // Atualizar totais
    if (tipo === 'receita') {
        totalReceitas += valor;
        saldoTotal += valor;
    } else {
        totalDespesas += valor;
        saldoTotal -= valor;
    }

    // Atualizar a exibição na tela
    atualizarTotais();
    atualizarListaTransacoes();

    // Limpar campos
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}

// Função para atualizar os totais exibidos
function atualizarTotais() {
    document.getElementById('saldo').textContent = saldoTotal.toFixed(2);
    document.getElementById('total-receita').textContent = totalReceitas.toFixed(2);
    document.getElementById('total-despesas').textContent = totalDespesas.toFixed(2);
}

// Função para atualizar a lista de transações
function atualizarListaTransacoes() {
    const lista = document.querySelector('ul');
    lista.innerHTML = ''; // Limpa a lista

    // Adiciona cada transação à lista
    transacoes.forEach(transacao => {
        const li = document.createElement('li');
        
        // Define a classe baseada no tipo (para estilização CSS)
        li.className = transacao.tipo === 'receita' ? 'receita-item' : 'despesa-item';
        
        // Formata o valor com + ou -
        const sinal = transacao.tipo === 'receita' ? '+' : '-';
        
        li.innerHTML = `
            <span>${transacao.descricao}</span>
            <span>${sinal} R$ ${transacao.valor.toFixed(2)}</span>
            <span class="data">${transacao.data}</span>
        `;
        
        lista.appendChild(li);
    });
}

// Configuração inicial
document.addEventListener('DOMContentLoaded', () => {
    // Marca "Receita" como selecionada por padrão
    document.getElementById('Receita').checked = true;
});
