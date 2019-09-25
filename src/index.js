document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = '3471'

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
  .then(function(response){
    return response.json()
  })
  .then(function(imageId){
    // console.log('imageId')
    method: GET `https://randopic.herokuapp.com/images/:id`
    
    headers: {
      'Content-Type': 'application/json'}
  })



})

