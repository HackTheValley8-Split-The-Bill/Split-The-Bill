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
        res.status(401).json({ "error": "Invalid name or password" });
    }

    // Check if user exists
    else {
        try {
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
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }

})

// Register a new user
userRouter.post("/register", async function (req, res) {
    const { name, password } = req.body;

    // Validate name and password
    if (!name || !password) {
        res.status(401).json({ "error": "Invalid name or password" });
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

// Get user total balance
userRouter.get("/balance/:id", async function (req, res) {
    const { id } = req.params;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }

    // Get user balance
    else {
        try {
            const balance = getUserBalance(id);
            if (balance) {
                console.info('user balance', balance);
                res.status(200).json({ "balance": balance });
            } else {
                res.status(401).json({ "error": "Invalid user" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})

// Get recent transactions (transaction history)
userRouter.get("/transactions/:id", async function (req, res) {
    const { id } = req.params;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }

    // Get recent transactions
    else {
        try {
            const transactions = getRecentTransactions(id);
            if (transactions) {
                console.info('recent transactions', transactions);
                res.status(200).json({ "transactions": transactions });
            } else {
                res.status(401).json({ "error": "Invalid user" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})

// Get friends list
userRouter.get("/friends/:id", async function (req, res) {
    const { id } = req.params;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }

    // Get friends list
    else {
        try {
            const friends = getFriends(id);
            if (friends) {
                console.info('friends', friends);
                res.status(200).json({ "friends": friends });
            } else {
                res.status(401).json({ "error": "Invalid user" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})

// Get groups list
userRouter.get("/groups/:id", async function (req, res) {
    const { id } = req.body;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }

    // Get groups list
    else {
        try {
            const groups = getGroups(id);
            if (groups) {
                console.info('groups', groups);
                res.status(200).json(groups);
            } else {
                res.status(401).json({ "error": "Invalid user" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})

// Create a new group
userRouter.post("/group/:id", async function (req, res) {
    const { id, groupName, friends } = req.body;

    // Validate uid, groupName, and friends
    if (!id || !groupName || !friends) {
        res.status(401).json({ "error": "Invalid user id, group name, or friends" });
    }

    // Create group
    else {
        try {
            const group = createGroup(id, groupName, friends);
            if (group) {
                console.info('group', group);
                res.status(200).json(group);
            } else {
                res.status(401).json({ "error": "Invalid group" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})


// Create a new transaction
userRouter.post("/transaction/add/:uid", async function (req, res) {
    const { uid, description, transactions } = req.body;

    // Validate description and transactions
    if (!description || !transactions) {
        res.status(401).json({ "error": "Invalid description or transactions" });
    }

    // Create transaction
    else {
        try {
            const { tid, status } = createTransaction(uid, description, transactions);
            if (tid && status) {
                console.info('transaction', tid, status);
                res.status(200).json({ "tid": tid, "status": status });
            } else {
                res.status(401).json({ "error": "Invalid transaction" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})

// Get timeline (transaction history)
userRouter.get("/timeline/:id", async function (req, res) {
    const { id } = req.body;

    // Validate id
    if (!id) {
        res.status(401).json({ "error": "Invalid user id" });
    }

    // Get timeline
    else {
        try {
            const timeline = getTimeline(id);
            if (timeline) {
                console.info('timeline', timeline);
                res.status(200).json(timeline);
            } else {
                res.status(401).json({ "error": "Invalid user" });
            }
        }
        catch (e) {
            console.error('e', e);
            res.status(500).json({ "error": `Unknown server error: ${e}` });
        }
    }
})