// this file will define the features for each <Project /> component
// ** make sure all features follow the same model:
// - (this is what the project offers) vs
// - (this is what the project does) vs
// - (this is what you can do with the project)

// * I kind of like the idea of keep the features list to 2 features.
// It's feeling like I'mm purposely splitting up feature logic just to achieve 3 featuers

const kokoro_features = [
  "'find balance' by recording daily mind, body, and soul activities",
  "customize your profile page, write 'posts' and establish friendships with other kokoro users",
  "toggleable 'dark theme' for users that don't prefer the light theme"
]

const nss_features = [
  "customizable genetic algorithm for unique simulations",
  "sibling animation that runs alongside the genetic algorithm for an entertaining user-experience",
  "two simulation types, one including a user-drawn path to the target goal!"
]

const tesla_now_features = [ 
  "uses real-time data to generate charts/graphs based on Tesla company metrics",
  "gathers and displays the newest articles relating to Tesla as soon as they're published",
  "IDK",
]

const password_manager_features = [
  "uses symmetric encryption to encrypt and decrypt your passwords with a secret key",
  "add, view, modify and remove passwords from the database",
  "IDK",
]

const project_features = {
  kokoro: kokoro_features,
  nss: nss_features,
  tesla_now: tesla_now_features,
  password_manager: password_manager_features
}

export { project_features };