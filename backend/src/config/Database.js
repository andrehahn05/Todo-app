import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

class Database {
  
  constructor() {
    this.init();  
  }

  init() {
    mongoose.connect('mongodb://localhost/todo', {
      useNewUrlParser: true, useUnifiedTopology: true,
    });
  }

}

export default new Database();
