async function editPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#edit-post-title').value.trim();
  const content = document.querySelector('#edit-post-content').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
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

document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler);