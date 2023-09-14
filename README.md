## Getting Started with the Chat application

First, edit line 30 to be setSocket(io(ws://localhost:8080), { autoConnect: false })

Then, run the development server for the frontend:

```zsh
cd ./frontend

npm install

npm run dev
```

Edit the cors to be "http://localhost:3000"

Then run the backend for the site

```zsh
cd ./backend

npm install

nodemon server
```

Enter a username and type in the chatbox.
Once you enter a new room, you can send that room number to a friend who will be able to enter that on the main page and you can message freely!
