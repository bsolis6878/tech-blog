const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

async function comment(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea').value.trim();

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

const move = () => {
    document.location.replace(`/dashboard/edit/${post_id}`)
}

document.querySelector('.comment-form').addEventListener('submit', comment);
document.querySelector('#edit').addEventListener('click', move);