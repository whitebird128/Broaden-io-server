'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      { username: "tassos", firstName: "Tassos", lastName: "Lambrou", email: "tassos.lambrou@students.makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://cdn.filestackcontent.com/IcsyCCzSlCTben1xsYuA", bio: "Determined, quickly adaptive learner with a passion for creating robust and meaningful tech. Technophile with a well-rounded knowledge of most web, mobile, and back-end technologies along with an intuition and desire for solving problems with technology.  Inquiring analytic mind committed to conscientious, rigorous work, lucid written and verbal communication, and overall excellence.", createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { username: "hassurunous", firstName: "Michael", lastName: "Loubier", email: "michael.loubier@students.makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://cdn.filestackcontent.com/zxWyvuKRRZKSpoeP5Uci", bio: "I use Unity/C# to develop therapy routines for patients with dementia and Alzheimer's.", createdAt: new Date(), updatedAt: new Date(), id: 10001 },
      { username: "aliriegray", firstName: "Alirie", lastName: "Gray", email: "alirie.gray@students.makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://cdn.filestackcontent.com/HHqnDmQASNGjPNNMag8H", bio: "Alirie discovered her taste for problem-solving as a physics major in college, and found that computer science was a perfect source of tantalizing puzzles. Since finding her love of building websites, she’s developed an addiction to the rush of initializing a new repository on GitHub. She believes strongly in the power of the internet to create positive social change and her primary goal as a web developer is to become an agent of that change. She loves to spend her free time in nature, especially rock climbing, at the beach, or wherever there’s sunshine.", createdAt: new Date(), updatedAt: new Date(), id: 10002 },
      { username: "jeffchiu", firstName: "Jeff", lastName: "Chiu", email: "jeff.chiu@students.makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://cdn.filestackcontent.com/F0Owm15CROOj8cc4uPL9", bio: "Jeff grew up in the Bay Area, surrounded by the burgeoning technology scene, and started out programming in high school. For the past several years, Jeff has been working towards achieving my professional dream of becoming both a CODER and a DESIGNER. Now, Jeff's excited for the new opportunity as a software engineer.", createdAt: new Date(), updatedAt: new Date(), id: 10003 },
      { username: "austrie", firstName: "Shane", lastName: "Austrie", email: "shane.austrie@students.makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://cdn.filestackcontent.com/zV0OD6NS4WCr5SxUMd21", bio: "Android App and Full Stack Web Developer.", createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      { username: "makeschool", firstName: "Make", lastName: "School", email: "braus@makeschool.com", password: "$2a$10$Sn2y0uVfpKfXLntxYs2w8.UsHuTZspHtEiwIrzmnq/oitUHvS1h7W", avatarURL: "https://i.imgur.com/Er1qYZG.png", bio: "Make School is a 2-year college for software engineers and technical founders.  Learn more at makeschool.com", createdAt: new Date(), updatedAt: new Date(), id: 10005 },
    ], {});

    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkInsert('Person', [{
    name: 'John Doe',
    isBetaMember: false
  }], {});
  */
},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  /*
  Add reverting commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.bulkDelete('Person', null, {});
  */
}
};
