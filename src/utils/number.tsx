export const formattedValue = (value: number) => {
 const newValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
 return newValue
}