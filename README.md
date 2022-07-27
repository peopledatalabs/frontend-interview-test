# People Data Labs -  Frontend Coding Challenge

Here at PDL, we love to chat about data. We started building this internal chat app to satisfy this unquenchable desire, but we need your help to make it better. You can do all of your work in `pages/index.js`. Here's the acceptance criteria for the challenge:

1. Connect to the Socket endpoint to consume message data
2. Display messages
3. Associate a user's profile with each message
4. Add input to send a message with `Enter` key
5. Use [Tailwind CSS](https://tailwindcss.com) to style the chat room
   - Create chat message card
     - Add user's specific color for each chat card
     - Display avatar
   - BONUS: On click, display profile card with user's info

## API Endpoints

1. Socket - `/api/socket` - Consume data from this socket endpoint

2. Profile - `GET /api/profile/me`
3. User - `GET /api/user/:id`
   
   ```json
   {
        "name": "John Doe",
        "username": "johndoe",
        "userColor": "#5c36ba",
        "userId": 12345,
        "email": "johndoe@peopledatalabs.com",
        "avatar": "https://i.pravatar.cc/300",
        "bio": "I am a software engineer",
        "location": "San Francisco, CA",
        "website": "https://www.peopledatalabs.com",
        "social": {
            "github": "https://github.com/peopledatalabs",
            "twitter": "https://twitter.com/peopledatalabs",
            "linkedin": "https://www.linkedin.com/company/peopledatalabs",
            "facebook": "https://www.facebook.com/peopledatalabs",
            "instagram": "https://www.instagram.com/peopledatalabs"
        },
        "createdAt": "2020-01-01T00:00:00.000Z",
        "updatedAt": "2020-01-01T00:00:00.000Z"
    }
   ```

4. Users - `GET /api/users`
   
   ```json
    [
        {
            "name": "John Doe",
            "username": "johndoe",
            "userColor": "#5c36ba"
            // ...
        },
        {
            "name": "Jane Doe",
            "username": "janedoe",
            "userColor": "#5c36ba",
            // ...
        },
        {
            "name": "Jacob Doe",
            "username": "jacobdoe",
            "userColor": "hsl(36,100%,50%)",
            // ...
        }
    ]
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

