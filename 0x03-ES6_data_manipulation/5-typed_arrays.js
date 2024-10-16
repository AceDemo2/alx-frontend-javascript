export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const dataView = new DataView(buff);
  try {
    dataView.setInt8(position, value);
  }
  catch (e) {
    throw Error('Position outside range');
  }
  return dataView;
}
