import express from "express";

export const friendRouter = express.Router();

friendRouter.get("/", async function (req, res, next) {
    console.info('You\'ve reached the friend router!');
    res.status(state).end('Hello World!');
});

// Get total amount owed to user
friendRouter.get("/balance/:uid/:fid", async function (req, res, next) {
    const { uid, fid } = req.params;

    // Validate uid and fid
    if (!uid || !fid) {
        res.status(401).json({ "error": "Invalid uid or fid" });
    }

    // Get balance of a friend
    else {
        const balance = getFriendBalance(uid, fid);
        res.status(200).json({ "balance": balance });
    }
});

// Get transactions between user and friend
friendRouter.get("/transactions/:uid/:fid", async function (req, res, next) {
    const { uid, fid } = req.body;

    // Validate uid and fid
    if (!uid || !fid) {
        res.status(401).json({ "error": "Invalid uid or fid" });
    }

    // Get transactions between user and friend
    else{
        const transactions = getTransactions(uid, fid);
        res.status(200).json({ "transactions": transactions });
    }
});
