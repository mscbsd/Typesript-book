declare namespace JSX JSX {
  interface ElementClass {
    render: any;
  }
}

class MeuComponenteJsx {
  render() {}
}
function MinhaFuncaoFabricaJsx() {
  return { render: () => {} }
}

<MeuComponenteJsx />; // funciona
<MinhaFuncaoFabricaJsx />; // funciona

class ComponenteInvalido {}
function ComponenteInvalidoFactory() {
  return {};
}

<ComponenteInvalido />; // resulta em erro
<ComponenteInvalidoFactory />; // resulta em erro