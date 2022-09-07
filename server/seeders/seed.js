const db = require('../config/connection');
const { User, Todo } = require('../models');
const todoSeeds = require('./todoSeeds.json');
const userSeeds = require('./userSeeds.json')

db.once('open', async () => {
  try { 

  await Todo.deleteMany({});
  await User.deleteMany({})

  // await User.create(userSeeds)

  } catch {

  }
  console.log('all done!');
  process.exit(0);
});
