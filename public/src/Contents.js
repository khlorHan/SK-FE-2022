const contents = {
  income: 90_000,
  title: 'Imperative Programming',
  description: `In computer science, imperative programming is a programming paradigm that uses statements that change a program's state.`,
};

const calcurateTax = (income) => income * 0.033;

const contentsStyles = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export function Contents() {
  return (
    <div className="contents" lang="en" style={contentsStyles}>
      <h1>{contents.title}</h1>
      <p>{contents.description}</p>
      <output>세금 3.3% : {calcurateTax(contents.income)}</output>
    </div>
  );
}
