const readline = require('readline');

let surveyAns = {}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question(`What's an activity you like doing?`, (activity) => {
    rl.question(`What do you listen to while doing that?`, (music) => {
      rl.question(`What meal is your favourite? (dinner, brunch, etc)`, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (favoriteFood) => {
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {
              console.log(`${name} loves playing ${sport} and enjoys listening to ${music} while ${activity}, they are also great at ${superpower}. They love eating ${favoriteFood} for ${meal}`)

              rl.close();
            })
          })
        })
      })
    })
  })
});



