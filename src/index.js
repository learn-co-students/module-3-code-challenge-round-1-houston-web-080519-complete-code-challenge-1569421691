let imageId = 3468

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  

  imageContent = document.querySelector('#image_content')

  getImage()
})
let imageContent;


function getImage(){
  console.log('hi')
  fetch(imageURL)
  .then(function(response){
    return response.json()
  })
  .then(function(image){
    placeImage(image)
  })
}

function placeImage(image){
  console.log('le')
  let imageName = document.querySelector('#name')
  imageName.innerText = image.name
  console.log(imageName)

  let commentForm = document.querySelector('#comment_form')
  let commentInput = document.querySelector('#comment_input')
  commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(commentInput.value)
    postComment(imageComments, commentInput)
    
    
  })


  let imagePicture = document.querySelector('#image')
  imagePicture.setAttribute('src', image.url)

  let imageLikes = document.querySelector('#likes')
  imageLikes.innerText = image.like_count

  let likeButton = document.querySelector('#like_button')
    console.log('it ran')
    likeButton.addEventListener('click', function(e){
      e.preventDefault()
      addLike(image, imageLikes)
    })

  let imageComments = document.querySelector('#comments')
  image.comments.forEach(function(comment){
    let imageComment = document.createElement('li')
    imageComment.innerText = comment.content
    imageComments.append(imageComment)

    
  })
}

function addLike(image, imageLikes){
  let number = parseInt(imageLikes.innerText)
  imageLikes.innerText = number + 1
  console.log(imageLikes.innerText)
  fetch(likeURL,{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageId
    })
  })
  



}


function postComment(imageComments, commentInput){
  console.log(commentInput.value)
  let newComment = document.createElement('li')
  newComment.innerText = commentInput.value
  imageComments.append(newComment)


  fetch(commentsURL,{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageId,
      content: commentInput.value
    })
  })


}


