export const dataInput: DataInput[] = [
  {
    item: 1,
    input: "nome",
    placeholder: "Digite seu nome e sobrenome",
    label: "Qual seu nome?",
  },
  {
    item: 2,
    input: "email",
    placeholder: "Digite seu email",
    label: "Qual seu email?",
  },
  {
    item: 3,
    input: "nascimento",
    placeholder: "dd/mm/aaaa",
    label: "Data do seu aniversário?",
  },
];

type DataInput = {
  item: number;
  input: string;
  placeholder: string;
  label: string;
};
