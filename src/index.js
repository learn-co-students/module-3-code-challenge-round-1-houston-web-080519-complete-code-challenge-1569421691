document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3469 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const webImage = document.querySelector('#image')

  const webName = document.querySelector('#name')

  const webLikes = document.querySelector('#likes')

  const webUl = document.querySelector('#comments')

  const webButton = document.querySelector('#like_button')

  const webForm = document.querySelector('#comment_form')

  console.log(webImage)

  fetch(imageURL)
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
      console.log(object)
      webImage.src = object.url
      webName.innerText = object.name
      webLikes.innerText = object.like_count
      object.comments.forEach(element => {
        const webLi = document.createElement('li')
        const webLiButton = document.createElement('button')
        webLi.innerText = element.content
        webLiButton.innerText = "Delete"
        webLi.append(webLiButton)
        webUl.append(webLi)
      });
      
      webButton.addEventListener('click', function(){
        console.log('I am clicked!!!!')
        webLikes.innerText = ++object.like_count
        fetch(imageURL)
          .then(function(response) {
            console.log(response)
          })
        fetch('https://randopic.herokuapp.com/likes', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            image_id: 3469
          })
        })
      })

      webForm.addEventListener('submit', function(e){
        e.preventDefault()
        const webInput = document.querySelector('#comment_input')
        webComment = document.createElement('li')
        webCommentButton = document.createElement('button')
        console.log(webInput.value)
        webComment.innerText = webInput.value
        webUl.append(webComment)
        fetch('https://randopic.herokuapp.com/comments', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            image_id: 3469,
            content: webInput.value
          })
        })
      })
    })

})
