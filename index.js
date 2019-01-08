const student = {
  ask: function(question, answer) {
    console.log(question);
    student.responds = answer;
  }
};


student.ask("You are Alan Hong. You wake up at your bougie penthouse in Downtown Houston. Do you sleep in, or go to work early to deploy the discussion question?", function(answer){
  switch(answer){
    case 'Stay in bed':
      student.ask("You awaken at 8:50 with 10 minutes left to reach work. Do you walk or call an Uber?",function(answer){
        switch(answer){
          case 'Uber':
            student.ask("The Uber driver stops at JP McNastys for a morning beer. One last customer walks out and then stumbles onto the ground. This Uber driver has built a fine crust on his seats and you start getting ansy. Do you stay in his car, join him, or decide to walk instead?", function(answer){
              switch(answer){
                case 'Walk':
                  walk()
                break
                case 'Join him':
                  return console.log("You die of dysentery. You could have drank at WeWork, what else is that free beer for?")
                break
                case 'Stay in his car':
                  return console.log("You die of dysentery. It's the crust, it got inside you fingernails. Come on man, this was totally not cool.")
                break
              }
            })
          break
          case 'Walk':
            walk()
          break
        }
      })
    break
    case 'Deploy discussion question':
      student.ask("You arrive early. Josh, Alan, Vidhi and Jordan are all discussing the computational limits of a sandwich. This is totally not making any sense to you but you decide to walk closer and maybe listen to the conversation. Do you join or nah?", function(answer){
        switch(answer){
          case 'Join':
            return console.log('You die of dysentery. This is the only outcome, it is inevitable. Shoulda went straight to your labs and checked your attendance.')
          break
          case 'Nah':
            return console.log("You have successfully avoided dysentery. Great job. You start to feel funny inside and look down at your hands. But your hands are no longer hands, they are now bonified developer hands. With these hands, you are now able to type out functions that leave your keyboard flaming. That's pretty sweet, not to mention you have a crap ton of stickers on your laptop now. Dang, you're one cool developer.")
          break
        }
      })
    break
  }
});

function walk(){
  student.ask("It begins to rain. Do you run for the tunnels or brave the rain?", function(answer){
    switch(answer){
      case 'Tunnels':
        return console.log('You die of dysentery. A single tear drops from his bright neon eyes.')
      break
      case 'Brave the rain':
        student.ask("You realize the water is cold and you start to shiver, you need to get to Flatiron ASAP. Some jerk on an electric longboard speeds across from you, splashing you in the process. He looks at you, unamused, muttering something about testing. Should you turn back now or continue walking?", function(answer){
          switch(answer){
            case 'Turn back':
              return console.log("A sharp pain has hit you, you grab your stomach, falling to your knees. You have died of dysentery.")
            break
            case 'Continue walking':
              student.ask('You see the gleeming towers of WeWork, anticipating the warmth and ridiculous lab exercises that come with you entering. You have made it this far and you push the door open and enter the elevator. As you enter in, hair dripping from the rain, you realize Josh is looking at you fiercely. "Have you pushed and commited your work??!?!"', function(answer){
                switch(answer){
                  case 'Have pushed':
                    return console.log("Josh's look softens and a smile forms on his face. He realizes that you have done your work and leaves you be. You start to feel funny inside and look down at your hands. But they aren't hands, they are feathers. They slowly start to change and then all the sudden, burst into a million neon colors all vibing at a perfect ultrafast beat. You transform into a glorious neon parrot and fly off into the sunrise, bobbing your head side to side. You have truly ascended.")
                  break
                  case 'Have not pushed':
                    return console.log("You die of dysentery. That jerk that splashed you with water must have hit some sewer water. It's the only way! A bright neon parrot flies off in the distance, a single tear falling from his bright neon eyes. Shoulda pushed up, you might have been able to load your work back there.")
                  break
                }
              })
            break
          }
        })
      break
    }
  })
}
