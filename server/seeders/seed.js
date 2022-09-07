const db = require('../config/connection');
const { User, Todo } = require('../models');
const todoSeeds = require('./todoSeeds.json');
const userSeeds = require('./userSeeds.json')

db.once('open', async () => {
  try { 

  await Todo.deleteMany({});
  await User.deleteMany({})

  await User.create(userSeeds)

  for (let i = 0; i < todoSeeds.length; i++) {
    const { _id } = await Todo.create(todoSeeds[i]);
    const user = await User.findOneAndUpdate(
      { username: "Michele" },
      {
        $addToSet: {
          todos: _id,
        },
      }
    );
  }

  } catch {
    console.error(err)
    process.exit(1)
  }
  console.log('all done!');
  process.exit(0);
});
