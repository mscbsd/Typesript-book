class MeuComponente {
  render() {}
}

// assinatura do construtor
var meuComponente = new MeuComponente();


function MinhaFuncaoFactory() {
  return {
    render: () => {
    }
  }
}

// chamada pela assinatura
var meuComponente = MinhaFuncaoFactory();
