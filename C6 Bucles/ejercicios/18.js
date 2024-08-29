function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let num = a;

  while (num <= b) {
    producto *= num;
    num++;           
  }
  if (producto === -0) {
    producto = 0;
  }
  return producto;
}

module.exports = productoEntreNúmeros;