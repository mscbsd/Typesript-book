/// <reference path="react.d.ts" />

interface Props {
  foo: string;
}

class ComponenteReact extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}

<ComponenteReact foo="bar" />; // funciona
<ComponenteReact foo={0} />; // exibe erro , tem que ser string