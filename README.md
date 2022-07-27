# People Data Labs -  Frontend Coding Challenge

## Intro

Here at PDL, we love to chat about data. We started building this internal chat app to satisfy this unquenchable desire, but we need your help to make it better. Here's the acceptance criteria for the challenge:

1. Consume each endpoint
2. Use [Tailwind CSS](https://tailwindcss.com) for styling... 
   1. App container - let's get this content centered and responsive
   2. Chat Message Card - We should display the message in a card with the user's details, including avatar
   3. BONUS: Profile Card - We should display the user's information off to the side, or separate page?


## API Endpoints

1. Profile - `GET /api/profile/me`
2. User - `GET /api/user/:id`
   
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

3. Users - `GET /api/users`
   
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



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

