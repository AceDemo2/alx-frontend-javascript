export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const i = mathFunction();
    queue.push(i);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
