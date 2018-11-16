const { addContract, updateContract, getContract, deleteContract } = require("../controllers/Contract");
const { mailSending, mailScheduled } = require("../controllers/Mail");

const routes = (app) => {
  app.route('/api/addContract')
    .post(addContract)
  app.route("/api/updateContract")
    .post(updateContract);
  app.route('/api/getContract')
    .get(getContract)
  app.route('/api/deleteContract')
    .post(deleteContract)
  app.route("/api/mailScheduled")
    .post(mailScheduled);
}
module.exports = routes;