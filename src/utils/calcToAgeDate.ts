import moment from "moment";

export function calcToAgeDate(data: string) {
  const dataNascimento = moment(data);
  const dataAtual = moment();

  const idade = dataAtual.diff(dataNascimento, "years");

  return idade;
}
