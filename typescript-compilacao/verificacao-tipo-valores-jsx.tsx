declare namespace JSX {
  interface ElementAttributesProperty {
    props; // especifica o nome da propriedade
  }
}

class MeuComponenteBaseadoValores {
  // especica a propriedade da instancia
  props: {
    umtipovalor?: string;
  }
}

// tipo de atributo do elemento é umtipovalor que é uma string
<MeuComponenteBaseadoValores umtipovalor="umValorQualquer" />