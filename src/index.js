document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3472

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch('https://randopic.herokuapp.com/images/3472')
  .then(function(response) {
    return response.json()
  })
  .then(function(imageJson) {
    const myImage = document.createElement('img')
    myImage.src = imageJson.url
    const imageCard = document.querySelector("#image_card")
    imageCard.prepend(myImage)

    const imageTitle = document.querySelector('#name')
    imageTitle.innerText = imageJson.name

    const commentsList = document.querySelector("#comments")
    const comments = imageJson.comments
    comments.forEach(function(commentJson) {
      const commentContent = commentJson.content
      const commentLi = document.createElement('li')
      commentLi.innerText = commentContent
      commentsList.append(commentLi)
    })
    
    const likes = document.querySelector('#likes')
    likes.innerText = imageJson.like_count
    likesCount = likes.innerText
    

    document.getElementById('like_button').addEventListener('click', function(event) {
      event.preventDefault()
      likesCount++
      fetch('https://randopic.herokuapp.com/likes', {
        headers: { 'Accept': 'application/json',
                  'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          image_id: '3472',
          like_count: likesCount
        })
      })
      likes.innerText = likesCount
      
    })
    // form.addEventListener('submit', function() {
    //   const newComment = document.querySelector('#comment_input')
    // })
  })

})
