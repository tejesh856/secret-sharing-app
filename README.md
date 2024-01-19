<h1 align="center" id="title">Secret Sharing App</h1>

<p align="center"><img src="https://socialify.git.ci/tejesh856/secret-sharing-app/image?description=1&amp;descriptionEditable=The%20project%20is%20a%20web%20application%20that%20allows%20users%20to%20post%20and%20view%20anonymous%20secrets.%20&amp;font=Source%20Code%20Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p id="description">The project is a web application that allows users to post and view anonymous secrets. It includes features such as user authentication posting secrets and viewing a feed of posted secrets. The front end is built using React and the back end includes endpoints for user authentication and secret posting. The application uses React Router for navigation and includes modals for user login and signup. The secrets are fetched from and posted to a backend server via API calls. The project emphasizes user privacy and engagement with a simple and intuitive interface.</p>

<h2>🚀 Demo</h2>

[https://secret-sharing-app-seven.vercel.app/](https://secret-sharing-app-seven.vercel.app/)

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Users can create accounts and sign in. Sessions are managed using JSON Web Tokens (JWT) stored in local storage.
*   Navigation bar with a logo. Dynamic display of login signup and logout buttons based on user authentication status. Modals for login and signup with the ability to switch between them.
*   Form for users to input their email and password to log in. Validation for login credentials. Display of appropriate error messages. Links to switch between login and signup.
*   Form for users to create a new account with a username email and password. Validation for signup inputs. Display of appropriate error messages. Links to switch between login and signup.
*   Display of a list of messages/Secrets fetched from the server. Ability for authenticated users to post new secrets. Conditional rendering based on user authentication status. Modal for login if a non-authenticated user tries to post a secret.
*   Communication with a backend API.API endpoints for user login signup posting secrets and fetching messages.
*   Handling of errors from API responses. Displaying appropriate error messages to the user.
*   Bootstrap classes and responsive design principles for a mobile-friendly layout.
*   Use of alerts to notify users of successful actions or errors.
*   Handling user sessions using local storage. Updating UI based on the user's authentication status.

<h2>🛠️ Installation Steps:</h2>

<p>1. clone frontend repository</p>

```
git clone https://github.com/tejesh856/secret-sharing-app.git
```

<p>2. clone backend repository</p>

```
git clone https://github.com/tejesh856/secret-sharing-api.git
```

<p>3. move the one terminal to frontend project directory</p>

```
cd path-of-frontend-project-repo
```

<p>4. move the other terminal to backend project directory</p>

```
cd path-of-backend-project-repo
```

<p>5. install dependencies</p>

```
npm install
```

<p>6. run frontend server</p>

```
npm start
```

<p>7. run backend server</p>

```
npm start
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   HTML
*   CSS
*   JAVASCRIPT
*   REACT.JS
*   NODE.JS
*   EXPRESS
*   MONGODB
