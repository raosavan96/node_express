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

exports.mainUserController = (req, res) => {
  const useId = req.params.id;
  const mainUserId = datas[useId];
  res.send(mainUserId);
};

exports.updateValueContorller = (req, res) => {
  const id = req.params.upid;
  const updatedValue = req.body.apiId;
  datas[id].inValue = updatedValue;
  res.send({ message: "Successfully updated" });
};
