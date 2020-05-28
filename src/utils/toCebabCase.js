export const toCebabCase = str => {
  return str
    .replace(/ę/gi, 'e')
    .replace(/ó/gi, 'o')
    .replace(/ą/gi, 'a')
    .replace(/ś/gi, 's')
    .replace(/ł/gi, 'l')
    .replace(/[żź]/gi, 'z')
    .replace(/ć/gi, 'c')
    .replace(/ń/gi, 'n')
    .trim()
    .replace(/[^a-z0-9ęóąśłżźćń]{1,}/gi, '-')
    .toLowerCase()
}
