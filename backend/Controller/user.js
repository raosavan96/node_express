exports.homePageController = (req, res) => {
  res.send("Home Page hu");
  res.end();
};

exports.fileController = (req, res) => {
  res.render("index.ejs");
};

let datas = [];

exports.userDataContoller = (req, res) => {
  datas.push(req.body);
  res.status(200).send({ message: "Successfully Insert..." });
};

exports.dataController = (req, res) => {
  res.json(datas);
};
