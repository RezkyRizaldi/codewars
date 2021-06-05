const distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => Math.hypot(x1 - x2, y1 - y2);

const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
