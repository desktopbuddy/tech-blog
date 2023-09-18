async function createPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#create-post-title').value.trim();
  const content = document.querySelector('#create-post-content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.create-post-form').addEventListener('submit', createPostFormHandler);