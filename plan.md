# Epic Task Plan

## Acceptance Criteria

### Auth.js and AuthForm.js

- [ ] Users can sign up for an account
- [ ] Users can sign in to an existing account
- [ ] Users can logout of an account
- [ ] Unauthenticated users see the option to sign in or sign up

### Task.js and TaskForm.js

- [ ] Authenticated users can see a list of to do items
- [ ] Authenticated users can add new to do items
- [ ] Authenticated users can complete to do items
- [ ] Authenticated users can delete to do items (stretch)

## Views

### App.js

- [x] give state for currentUser with a default value that calls getUser()
- [x] has a Route that conditionally renders Task.js based if currentUser and ˝˝!currentUser renders Auth.js with setCurrentUser as a prop

### Auth.js

- [x] Give state for email, password, errorMessage, type
- [ ] Write a handleSubmit with a try catch statement that updates type (SignIn or SignUp)
  - [ ] setCurrentUser with that resp
  - [ ] In the catch, setErrorMessage()
- [ ] return (<AuthForm /> with props)

### Header.js

- returns h3's that update type state onClick

### Task.js

- [ ] Give state for task and setTask with useState(false)
- [ ] defines a logoutUser fxn that awaits logout and then setCurrentUser(null)

## Components

### AuthForm.js

- [ ] returns a form with inputs that update state for email and password onChange and a button to handleSubmit onCick
- [ ] displays an error message if needed

### TaskForm.js

- [ ] displays a form with inputs to enter a task
- [ ] has a handle submit that calls createTask on submit
  - [ ] call createTask fxn
- [ ] gives state to isCompleted with an initial value of false

### TaskList.js

- Displays a list of Tasks
  - returns a list of tasks with a getTask fxn
