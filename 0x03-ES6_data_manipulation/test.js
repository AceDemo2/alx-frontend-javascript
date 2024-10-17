const buffer = new ArrayBuffer(5);
const view = new DataView(buffer);

try {
	  view.setInt8(4, 100); // Position out of range
	  console.log("Value set"); // This will still execute
} catch (e) {
	  console.log("Caught error: ", e); // This will never execute
}
const it = 45;
console.log(it.length);
