const { faker } = require("@faker-js/faker");
const { addDatas } = require("../repository/addDataRepository");

const addData = async (req, res) => {
  try {
    for (var i = 0; i < 100; i++) {
      const data2 = await addDatas ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        companyName: faker.company.name(),
        designation: faker.name.jobTitle(),
      });
    }
    console.log("harshpatel");
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addData };
