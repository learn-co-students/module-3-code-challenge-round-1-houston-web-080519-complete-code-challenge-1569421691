document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3470 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  function fetchMyImage(){
    fetch(`https://randopic.herokuapp.com/images/${imageId}`)
    .then(function(response){
      return response.json()
    })
    .then(function(myImage){

      let imageTitle = document.getElementById('name')
      imageTitle.innerText = myImage.name
      let imageTag = document.getElementById('image')
      imageTag.src = myImage.url
      let likes = document.getElementById('likes')
      likes.innerText = myImage.like_count

      let ul = document.getElementById('comments')
      for(i=0; i < myImage.comments.length; i++){
        let li = document.createElement('li')
        li.innerText = myImage.comments[i].content
        ul.append(li)
      }

      let likeButton = document.getElementById('like_button')
      likeButton.addEventListener('click', function(){
        likes.innerText = myImage.like_count++
        fetch(`https://randopic.herokuapp.com/likes`, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image_id: myImage.id
          })
        })
      })

      let commentInput = document.getElementById('comment_input')
      let form = document.querySelector('form')
      form.addEventListener('submit', function(){
        let li = document.createElement('li')
        li.innerText = commentInput.value
        ul.append(li)
        fetch(`https://randopic.herokuapp.com/comments`, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image_id: myImage.id,
            content: commentInput.value
          })
        })
      }) 

    })
  }
  fetchMyImage()

  

})
