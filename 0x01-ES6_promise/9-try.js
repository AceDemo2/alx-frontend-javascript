function guardrail(mathFunction) {
  let queue = [];
  const i = mathFunction();
  try {
    queue.push(i);
  } catch {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
