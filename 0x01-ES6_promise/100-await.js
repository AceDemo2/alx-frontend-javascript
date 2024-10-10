import uploadPhoto from './utils.js'
import createUser from './utils.js'

export default function asyncUploadUser() {
	const photo = uploadPhoto();
	const user = createUser();
	
