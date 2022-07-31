export const getRandomColor = () => {
  const colors = ['green', 'red', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
