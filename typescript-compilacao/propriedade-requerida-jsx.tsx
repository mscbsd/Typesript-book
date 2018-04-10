declare namespace JSX {
  interface IntrinsicElements {
    propriedade: { propRequerida: string; propOpcional?: number }
  }
}

<propriedade propRequerida="outraprop" />; // funciona
<propriedade propRequerida="outraprop" propOpcional={0} />; // funciona
<propriedade />; // exibe erro por nao ter propriedade requerida
<propriedade propRequerida={0} />; // exibe erro , exige string
<propriedade propRequerida="outraprop" propDesconhecida />; // exibe erro por ter propriedade desconhecida
<propriedade propRequerida="outraprop" outra-prop-desconhecida />; // nao tem um identificador valido

var props = { propRequerida: "algumacoisa" };
<foo {...props} />; // funciona

var badProps = {};
<foo {...badProps} />; // exibe erro

var a = <div>
  {["um", "dois"].map(i => <span>{i / 2}</span>)}
</div>

var a = <div>
  {["um", "dois"].map(function (i) { return <span>{i / 2}</span>; })}
</div>