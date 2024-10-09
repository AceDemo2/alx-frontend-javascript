import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((res) => console.log(`${res.body} ${res.firstName} ${re.slastName}`)
  .catch(() => console.log('Signup system offline'));
