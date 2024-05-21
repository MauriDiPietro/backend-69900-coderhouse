const socket = io();

let username = null;

if(!username){
    Swal.fire({
      title: "¡Welcome to chat!",
      input: "text",
      text: 'Insert your username:',
      inputValidator: (value) => {
        if (!value) {
          return "Your username is required";
        }
      }
    }).then((input)=>{
        username = input.value;
        socket.emit('newUser', username);
    })
};

const inputMessage = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const actions = document.getElementById('actions');

btn.addEventListener('click', ()=>{
    const newMessage = {
        username,
        message: inputMessage.value
    };
    socket.emit('chat:message', newMessage);
    inputMessage.value = '';
});

socket.on('messages', (data)=>{
    actions.innerHTML = '';
    output.innerHTML = data.map((msg) => {
        return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`
    }).join(' ')
});

socket.on('newUser', (username)=>{
    Toastify({
        text: `🟢 ${username} is logged in`,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
});

inputMessage.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username)
});

socket.on('chat:typing', (usernameTyp)=>{
    actions.innerHTML = `<p>${usernameTyp} is writing a message...</p>`
})