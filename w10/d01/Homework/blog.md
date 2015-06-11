#Fully Authenticated MicroBlog


> Tonight, we are going to build a simple MicroBlog that allows users to 'Log In' and post blog entries.

###Features
- A user should be able to create an account.
- A user should be able to login to their account.
- A post should consist of a title and body.
- Only logged in users should be able to see a list of all posts.
- Only logged in users should be able to add new posts.
- A post should have title and contents attributes, as well as a username attribute.
- A user shouldn't have to enter their username, it should be added automatically based off their being longed in.

### Thoughts

- What does 'logged in?' mean to us? How do we define a user as being 'logged in'?
- What resources do we need to be concerned with here? What are the relationships between them?
- Think about what a session is. How can we use a session not only for authentication, but to also store a reference to the current user?
- It's often easier to test logging in/authentication in incognito mode in chrome.

###Bonus

- Modify your application so that a user can be an admin. Admins should be able to delete any entry.
- Modify the views so that each entry is has an accompanying 'delete' button, but only if the user is an admin.
