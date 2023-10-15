import express from "express";
import { createUser } from "../modules/user.js";

export const userRouter = express.Router();

userRouter.get("/", async function (req, res) {
    console.info('You\'ve reached the user router!');
    res.status(200).end('Hello World!');
});

// Login
userRouter.post("/login", async function (req, res) {
    const { name, password } = req.body;

    // Validate name and password
    if (!name || !password) {
        if (!name) {
            res.status(401).json({ "error": "Invalid name" });
        }
        if (!password) {
            res.status(401).json({ "error": "Invalid password" });
        }
    }

    // Check if user exists
    else {
        const user = await User.findOne({ "name": name });
        if (user) {
            if (user.password === password) {
                // TODO: Calculate balance when logging in
                console.info('user', user);
                res.status(200).json({ "id": user._id.toString() });
            } else {
                res.status(401).json({ "error": "Invalid password" });
            }
        } else {
            res.status(401).json({ "error": "Invalid user" });
        }
    }

})

// Register a new user
userRouter.post("/register", async function (req, res) {
    const { name, password } = req.body;

    // Validate name and password
    if (!name || !password) {
        if (!name) {
            res.status(401).json({ "error": "Invalid name" });
        }
        if (!password) {
            res.status(401).json({ "error": "Invalid password" });
        }
    }

    // Create user
    else {
        try {
            const result = await createUser(name, password);
            console.info('result', result);
            res.status(200).json({ "user_id": result._id });
        } catch (e) {
            console.error('e', e);
            if (e.code === 11000) {
                res.status(401).json({ "error": "User already exists" });
            } else {
                res.status(500).json({ "error": `Unknown server error: ${e}` });
            }
        }
    }

});


// Get recent transactions
userRouter.get("/transactions", async function (req, res) {
    const { id } = req.body;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }


    // Get recent transactions
    else {
        const recentTransactions = getRecentTransactions(id);
        if (user) {
            console.info('recentTransactions', recentTransactions);
            // Get recent transactions
            res.status(200).json({ "transactions": recentTransactions });
        } else {
            res.status(401).json({ "error": "Invalid user" });
        }
    }


});
userRouter.post("/api/user/balance", async function (req, res, next) {
});
userRouter.post("/api/user/balance", async function (req, res, next) {
  res.redirect("/api/user/transaction")
  req.state=200;
  req.body.balance=cal_trt(req);
});
const cal_trt=async(js)=>{
  sum=0;
  for (item in js.body){
    if(item.decription=="owe"){
      sum=sum+item.balance;
    }
    if(item.decription=="pay"){
      sum=sum-item.balance;
    }
  }
  return sum;
}

