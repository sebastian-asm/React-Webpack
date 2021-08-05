export default function sumTotal(array) {
  const reducer = (acc, curr) => acc + curr.price;
  const sum = array.reduce(reducer, 0);
  return sum;
}
