import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const obj = [];
  const num = [19, 20, 34];
  for (const i of num) {
    obj.push(new ClassRoom(i));
  }
  return obj;
}
