const express = require("express");
const app = express();
const mysql = require("mysql2");
app.set("view-engine", "ejs");
const cors=require('cors');


// app.use(cors())


const { Model } = require("sequelize");
const users = require("./models").User;
const {Op}=require('sequelize')

app.get('/products/:id',cors(),function(req,res,next){
  res.json({msg:'This is CORS-enabled for single route!'})
})
// async function myfun(){
//   const data = await users.bulkCreate([
//     {firstName:"Sagar",lastName:"Khatri",email:"sagar@gmail.com"},
//     {firstName:"Nandani",lastName:"Gajjar",email:"nandani@gmail.com"},
//     {firstName:"Meet",lastName:"Vaghasiya",email:"meet@gmail.com"},
//     {firstName:"Nihar",lastName:"Gajjera",email:"nihar@gmail.com"},
//     {firstName:"Niyati",lastName:"Patel",email:"niyati@gmail.com"},
//     {firstName:"Bhavin",lastName:"Khandelval",email:"bhavin@gmail.com"},
//     {firstName:"Rashid",lastName:"Khan",email:"rashid@gmail.com"},
//     {firstName:"Saloni",lastName:"Patel",email:"saloni@gmail.com"},
//     {firstName:"Khushi",lastName:"Racchh",email:"khushi23@gmail.com"},
//     {firstName:"Himani",lastName:"Prajapati",email:"himani@gmail.com"},
//     {firstName:"Milan",lastName:"Chudasama",email:"milan@gmail.com"},
//     {firstName:"Jaini",lastName:"Mehta",email:"jaini@gmail.com"},
//   ])
// }

// myfun()

app.get("/page", async (req, res) => {
  var page = req.query.page || 1;
  var limit = 5;
  var offset = (page - 1) * limit || 0;

  var currentcolumn;
  var targetcolumn;

  if (req.query.currentcolumn) {
    targetcolumn = req.query.id;
    currentcolumn = targetcolumn;
  } else {
    currentcolumn = "firstName";
  }

  // console.log('******************',offset);
  // console.log('******************',page);
  var data = await users.findAll({
    offset,
    limit,
    order: [["id", "asc"]],
  });

  res.json(data);
});

app.get("/form", async (req, res) => {
  var search = req.query.search || 0;
  var firstName = "";
  var lastName = "";
  var email = "";

  for (i = 0; i < search.length; i++) {
    if (search.charAt(i) == "^") {
      for (j = i + 1; j <= search.length; j++) {
        if (search.charAt(j) == "%" || search.charAt(j) == "$") {
          break;
        } else {
          firstName += search.charAt(j);
        }
      }
    } else if (search.charAt(i) == "%") {
      for (j = i + 1; j <= search.length; j++) {
        if (search.charAt(j) == "^" || search.charAt(j) == "$") {
          break;
        } else {
          lastName += search.charAt(j);
        }
      }
    } else if (search.charAt(i) == "$") {
      for (j = i + 1; j <= search.length; j++) {
        if (search.charAt(j) == "^" || search.charAt(j) == "%") {
          break;
        } else {
          email += search.charAt(j);
        }
      }
    }
  }

  var data1 = await users.findAll({
    where: {
      [Op.and]: [
        {
          firstName: {
            [Op.like]: `%${firstName}`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${lastName}`,
          },
        },
        {
          email: {
            [Op.like]: `%${email}`,
          },
        },
      ],
    },
  });
  res.json(data1)
});

app.listen(3002, function () {
  console.log("Server is Listening");
  console.log('CORS-enabled web server listening on port 80')
});
