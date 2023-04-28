const express = require("express");
const { listen } = require("express/lib/application");
const app = express();

const { append } = require("express/lib/response");
const { Model } = require("sequelize");
const { sequelize } = require("./models");
const users = require("./models").User;
const passport = require("./models").passport;
const team = require("./models").team;
const players = require("./models").players;

const movie = require("./models").movie;
const actors = require("./models").actors;
const movie_actors = require("./models").movie_actors;

const customer = require("./models").customer;

const { Op } = require("sequelize");

//
// async function myfun(){

//   await users.hasOne(passport);
//   await passport.belongsTo(users);
//   // sequelize.sync({alter : true});
// }

// myfun();

// async function myfun12(){
//   const data1=await users.bulkCreate([
//     {userId:100},
//     {userId:400},
//     {userId:500}
//   ])
//   const data2=await passport.bulkCreate([
//     {passportId:110},
//     {passportId:220},
//     {passportId:320},

//   ])
// }
// myfun12();

// users.hasOne(passport);
// passport.belongsTo(users);
// sequelize.sync({alter : true});
// async function myfun1(){
//   // const data1=await users.create({
//   //   userId:14,

//   // })
//   const data2=await passport.findAll({
//     include:[{
//       model:users
//     }]
//   })
//   console.log(data2)
// }

// myfun1()

// One to Many

// async function myfun2(){
//   team.hasMany(players);
//   players.belongsTo(team);
//   sequelize.sync({alter:true})

// }
// myfun2()

// Many to Many
// async function myfun3() {
//   movie.belongsToMany(actors, { through: "actorMovies"},{onDelete:'CASCADE'}),
//     actors.belongsToMany(movie, { through: "actorMovies"},{onDelete:'CASCADE'}),
//     sequelize.sync({ alter: true });
// }
// async function myfun3() {
//   movie.belongsToMany(actors, { through: "movie_actors"},{onDelete:'CASCADE'});
//     actors.belongsToMany(movie, { through: "movie_actors"},{onDelete:'CASCADE'});
//     // sequelize.sync({ alter: true });
// }

// myfun3();

// async function myfun12() {
// const data1 = await movie.bulkCreate([
//   { movieName : "Olympus has Fallen", movieLanguage : "English" },
//   { movieName : "London has Fallen", movieLanguage : "English" },
//   { movieName : "Singham", movieLanguage : "Hindi" },
//   { movieName : "London has Fallen", movieLanguage : "English" },
//   { movieName : 'Om Shanti Om', movieLanguage : 'Hindi'}
// ]);
// const data2 = await actors.bulkCreate([
//   {actorName :'Gerard Buttler'},
//   {actorName :'Ajay Devgan'},
//   {actorName : 'Sharukh Khan'}
// ]);
// const data3= await actors.create({
//   actorName:'Salman Khan',
//   movies:[{
//     movieName:'Ready',
//   }]
// },
// {
//   include:movie
// })

// const data3 = await actors.create({
//   actorName:'Malhar',
//   movies:[{
//     movieName:'malhar',
//   }]
// },{
//   include:movie
// })
// const data4 = await actors.create({
//   actorName:'Sid12',
//   movies:[{
//     movieName:'xyz12',
//   }]
// },{
//   include:movie
// })
// const data4=await actors.update({actorName :'Paresh Raval'},
// {
//   where: {id : 4},
// })
// const data5=await actorMovies.destroy({
//   where : {id : 4},
//   truncate:true,
// })
// const data6=await movie.destroy({
//   where : {id : 8},
// })
// const data7=await movie.findAll();
// console.log(data7)
// }
// myfun12();

app.get("/hp", async (req, res) => {
  movie.belongsToMany(
    actors,
    { through: "movie_actors" },
    { onDelete: "CASCADE" }
  );
  actors.belongsToMany(
    movie,
    { through: "movie_actors" },
    { onDelete: "CASCADE" }
  );

  const data4 = await actors.create(
    {
      actorName: "harsh",
      movies: [
        {
          movieName: "harsh",
        },
      ],
    },
    {
      include: movie,
    }
  );

  // const data5=await actors.findAll({
  //   include: movie,
  //   where:{
  //     id:{
  //       // [Op.ne]:3,
  //       [Op.eq]:3,
  //     }
  //   }

  // });
  const data5 = await actors.findAll({
    include: movie,
  });
  console.log(data5);

  res.end();
});

app.get("/scope", async (req, res) => {
  movie.belongsToMany(
    actors,
    { through: "movie_actors" },
    { onDelete: "CASCADE" }
  );
  actors.belongsToMany(
    movie,
    { through: "movie_actors" },
    { onDelete: "CASCADE" }
  );
  // movie.addScope('limit5',{
  //   limit:5
  // })

  // movie.addScope('equal',{
  //   where:{

  //     id:{

  //       [Op.eq]:5
  //     }
  //   }
  // })

  // movie.addScope('like',{
  //   where:{

  //     movieName:{
  //       [Op.startsWith]:'O',
  //     },
  //   },

  //   // include will not work as they are not linked together
  //   include:{
  //     model:actors,
  //   }

  // })

  // // var data=await movie.scope('limit5').findAll();
  // var data=await movie.scope('like','equal').findAll();
  // console.log(data);

  var data6 = await movie.destroy(
    {
      where: { id: 33 },
    },
    {
      include: [{
        model: movie_actors,
      }],
    }
  );
  res.end();
  // res.json(data)
});

app.get("/hooks", async (req, res) => {
  const addData = await customer.create({
    customerName: "Rajesh",
  });

  console.log(addData);
  res.send(addData);
});

app.listen(9090, (req, res) => {
  console.log("Connected Successfully");
});
