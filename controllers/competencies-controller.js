const db = require('../models');

module.exports = (app) => {

  // Show Competency
  app.get('/competencies/:id', (req, res) => {
    const competencyId = req.params.id
    db.Competency.findById(competencyId)
    .then((competency) => {
      console.log("Response from Competency/Show: ", competency)
      res.status(200)
      res.json({
        message: "Competency request successful",
        competency
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  //TODO: Code Review  whether the competencyId exists, it does not ever hits catch error
    // UPDATE a Competency
  app.put('/competencies/:id/update', (req, res) => {
    const competencyId = req.params.id
    const competency = req.body
    db.Competency.update(competency, {
      where: { id: competencyId }
    }).then((response) => {
        res.status(200)
        res.json({
          message: 'competency updated successfully!',
        })
      }).catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });

  // Create a Competency
  app.post('/rubrics/:rubricId/competencies/create', (req, res) => {
    const newCompetency = {...req.body, rubricId: req.params.rubricId}
    db.Competency.create(newCompetency)
    .then((competency) => {
      console.log("Response from Competency/Create: ", competency)
      res.status(200)
      res.json({
        message: 'competency added successfully!',
        competency
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  //TODO: Code Review  whether the competencyId exists, it does not ever hits catch error
  // Delete a Competency
  app.delete('/competencies/:id', (req, res) => {
    const competencyId = req.params.id
    db.Competency.destroy({ where: { id: competencyId } })
    .then((response) => {
      console.log("Response from Competency/Delete: ", response)
      res.status(200)
      res.json({
        message: 'Competency deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });
}
