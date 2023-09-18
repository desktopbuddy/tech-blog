async function commentFormHandler (event) {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();

  //Get post_id from current post path
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]

  if (content && post_id) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        content,
        post_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);