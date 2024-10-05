export default function getFullResponseFromAPI(success) {
  return new Promise((good, error) => {
    if (success) {
      good({status: 200, body: 'Succes',});
    } else {
      error('The fake API is not working currently')
    }
  )};
}
