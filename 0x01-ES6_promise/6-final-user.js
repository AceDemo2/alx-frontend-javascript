import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
  const photo = uploadPhoto(fileName)
  return Promise.allSettled([user, photo])
    .then((res) => res.map((i) => ({status: i.status, value: (i.status == 'rejected') ? i.reason : i.value,}))
    );
}
