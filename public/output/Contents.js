var contents = {
  income: 90000,
  title: 'Imperative Programming',
  description: "In computer science, imperative programming is a programming paradigm that uses statements that change a program's state."
};

var calcurateTax = function calcurateTax(income) {
  return income * 0.033;
};

var contentsStyles = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
};
export function Contents() {
  return React.createElement("div", {
    className: "contents",
    lang: "en",
    style: contentsStyles
  }, React.createElement("h1", null, contents.title), React.createElement("p", null, contents.description), React.createElement("output", null, "\uC138\uAE08 3.3% : ", calcurateTax(contents.income)));
}