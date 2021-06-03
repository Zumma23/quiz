// import { Router } from 'express';
const { Router } = require("express");
const User = require("../models/User");
const router = Router();

router.get("/users", (req, res) => {
  User.find().then((users) => res.json(users));
});

router.post(
  "/registration",

  async (req, res) => {
    try {
      const { email, password } = req.body;

      const isUsed = await User.findOne({ email });
      if (isUsed) {
        return res.status(300).json({ message: "Занято" });
      }

      const user = new User({
        email,
        password,
      });
      await user.save();
      res.status(201).json({ message: "Создан" });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;

// router.post("/registration",
// [
//   check('email', 'Incorect email').isEmail(),
//   check('password','Incorect password').isLength({min: 6})
// ],
// async (req, res) => {
//   try {
//     const errors = validationResult(req)

//     if(!errors.isEmpty()){
//       return res.status(400).json({
//         errors: errors.array(),
//         message: 'Incorect data from registration'
//       })
//     }
//     const { email, password } = req.body;

//     const isUsed = await User.findOne({ email });
//     if (isUsed) {
//       return res.status(300).json({ message: "Занято" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12)

//     const user = new User({
//       email, password:hashedPassword
//     });
//     await user.save()
//     res.status(201).json({message: 'Создан'})
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = router;

// router.post("/login",
// [
//   check('email', 'Incorect email').isEmail(),
//   check('password','Incorect password')
// ],
// async (req, res) => {
//   try {

//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//       return res.status(400).json({
//         errors: errors.array(),
//         message: 'Incorect data from registration'
//       })
//     }
//     const { email, password } = req.body;

//     const user = await User.findOne({email})
//     if(!user){
//       return res.status(400).json({message: 'Такого Email нет в базе'})
//     }

//     const isMatch = bcrypt.compare(password, user.password)
//     if(!isMatch){
//       return res.status(400).json({message: 'Password is not corect'})
//     }

//     const jwtSecret= '7812738ее21738е7132е78е712378е1е78123'
//     const token = jwt.sign(
//       {userId: user.id},
//       jwtSecret,
//       {expiresIn: '1h'}
//     )

//     res.json({token,userId:user.id})

//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = router;
