const ops = {
  "+": (v1, v2) => v1 + v2,
  "-": (v1, v2) => v1 - v2,
  "*": (v1, v2) => v1 * v2,
  "/": (v1, v2) => v1 / v2,
  "%": (v1, v2) => v1 % v2,
};

export const opsAvailable = Object.keys(ops);

export function evaluateOperation(op, v1, v2) {
  const result = ops[op](v1, v2);
  return result;
}
