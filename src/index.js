let imageId = 3467
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`

function fetchImage(){
  fetch(imageURL).then(response => {
    return response.json()
  }).then(imageObject => {
    console.log(imageObject)
    let image = document.getElementById('image')
    let title = document.getElementById('name')
    let likes = document.getElementById('likes')
    let imageComments = document.getElementById('comments')
    let comments = imageObject.comments
    image.setAttribute('src', imageObject.url)
    title.innerText = imageObject.name
    likes.innerText = imageObject.like_count
    for(let i = 0; i < comments.length; i++){
      commentLi = document.createElement('li')
      commentLi.innerText = comments[i].content
      imageComments.append(commentLi)
    }
    
  })
}

function incrementLikes(){
  let likeButton = document.getElementById('like_button')
  let imageLike = document.getElementById('likes')
  let likeSpan = document.getElementById('likes')
  let numLikes = imageLike.innerText
  
  likeButton.addEventListener('click', function(e){
    numLikes++
    e.preventDefault()
    fetch(likeURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        like_count: numLikes
      })
    }).then(response => {
      return response.json()
    }).then(likes => {
      console.log(likes)
      
    })
  })
}

function addComment(){
  let comment = document.getElementById('comment_input')
  let commentForm = document.getElementById('comment_form')
  let commentList = document.getElementById('comments')
  let commentLi = document.createElement('li')

  commentForm.addEventListener('submit', function(e){
    commentLi.innerText = comment
    commentList.append(commentLi)
    e.preventDefault()
    commentLi.innerText = comment.value
    fetch(commentsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        content: comment
      })
    }).then(response => {
      return response.json()
    })


  })

}


document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  
 
  fetchImage()
  

})

incrementLikes()
addComment()