### Authenticate Using NextAuth 


Install the node packages

`cd using-nextauth`
`npm install`
`npm run dev`

You need to create Github Oauth App to get the **Client Id** and **Client Secret**

Create a NEXTAUTH_SECRET environment variable for all environments.
You can use openssl rand -base64 32 or https://generate-secret.vercel.app/32 to generate a random value.

Ref: https://next-auth.js.org/deployment

### For Github 
Callback URL - http://localhost:3000/api/auth/callback/github 



