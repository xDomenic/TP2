let temporay = '';

export function DomComponent1({
  lastname,
  otherthing = 'autre default',
  name,
  ...rest
}) {
  // Destructruturing
  // the Old fashion way
  //   const {
  //     keyy,
  //     name,
  //     lastname,
  //     otherthing = 'valeur par default',
  //   } = props;
  temporay = lastname;

  console.log({ rest });

  return <h1>Salut {name} </h1>;
}

export default function DomComponent2(props) {
  return <h1>Salut 2 </h1>;
}
