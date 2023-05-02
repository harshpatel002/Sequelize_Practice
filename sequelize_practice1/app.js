const { Model } = require("sequelize");
const users = require("./models").user;
  const { Op } = require("sequelize");
const { faker } = require('@faker-js/faker');





async function myfun() {
  // const data=await users.create({
  //   firstName: 'Rajesh',
  //   lastName: 'Parmar',
  //   email: 'rajesh@gmail.com',
  //   address: 'morbi,gujarat'
  // })
  // const data2=await users.bulkCreate([{
  //   id:32,
  //   firstName: 'Rajesh',
  //   lastName: 'Parmar',
  //   email: 'rajesh@gmail.com',
  //   address: 'kadi,gujarat'
  // },{
  //   id:33,
  //   firstName: 'Harshilkumar',
  //   lastName: 'lathiya',
  //   email: 'harshil@gmail.com',
  //   address: 'gandhinagar,gujarat'
  // }],
  // {
  //   // fields:["firstName","lastName","email","address"],
  //   updateOnDuplicate:["firstName","lastName","email"]
  // })
  // Select Query
  // const data1=await users.findAll();
  // console.log(data1);
  // Select firstName,lastName from user
  // const data1=await users.findAll({
  //   attributes: ['firstName','lastName']
  // });
  // Where
  // const data1=await users.findAll({
  //   where: {id:8}
  // })
  // const data1=await users.findAll({
  //   where: {id:8},
  //   paranoid:false
  // })
  // var data1 = await users.findAll({
  //   order:[
  //     // ["firstName", "ASC"],
  //     // ["lastName", "DESC"],
  //     ["id", "DESC"],
  //   ],
  // });
  // console.log('**************************',data1);
  // and and or operator
  // const data1=await users.findAll({
  //   where:{
  //     // [Op.and]:[{firstName:'Bhavesh'},{lastName:'Purohit'}]
  //     // [Op.or]:[{firstName:'Bhavesh'},{lastName:'Patel'}]
  //     // id:{
  //     //   // [Op.eq]:3
  //     //   // [Op.ne]:3
  //     //   // [Op.gt]:25
  //     //   // [Op.gte]:25
  //     //   // [Op.lt]:25
  //     //   // [Op.lte]:25
  //     //   // [Op.between]:[5,10]
  //     //   [Op.notBetween]:[5,10]
  //     // },
  //     // address:{
  //     //   [Op.is]:null
  //     // }
  //     firstName:{
  //       // [Op.like]:'%il'
  //       [Op.startsWith]:'ha'
  //     }
  //   }
  // })
  // update
  // const data2=await users.update({address:'surat,gujarat'},
  // {
  //   where:{id:11}
  // })


  // for(i=0;i<100;i++){
  //   const data3=await users.bulkCreate([
  //     {
  //     firstName: faker.name.firstName(),
  //     lastName: faker.name.lastName(),
  //     email: faker.internet.email(),
  //   }
  // ])
  // }
  for(i=0;i<10;i++){
    const data3=await users.bulkCreate([
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    }
  ])
  }
}

myfun();
