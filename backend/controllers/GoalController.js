import AsyncHandler from "express-async-handler";

// get //
const Get = AsyncHandler(async (req, res) => {
  res.json({ message: "get goals" });
});

//   create ///

const create = AsyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new error("please add text field");
  } else {
    console.log(req.body);
  }

  res.json({ message: "set goals" });
});

//   update //
const update = AsyncHandler(async (req, res) => {
  res.json({ message: `update goals ${req.params.id}` });
});

//  Delete ///
const destroy = AsyncHandler(async (req, res) => {
  res.json({ message: `update goals ${req.params.id}` });
});

export default { Get, create, update, destroy };
