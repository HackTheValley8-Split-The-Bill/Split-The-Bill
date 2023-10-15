// import ObjectId from '../models/ObjectId.js';
import Transaction from '../models/Transaction.js';
import TransactionInfo from '../models/TransactionInfo.js';
import { ObjectId } from 'mongodb';

export const geAllTransactions = async () => {
  const transaction = await Transaction.find()
  return transaction;
  // return [transaction[0].payer.equals(new ObjectId("652b1a37f9e89d6b18dc1db0"))];
}

const createTransaction = async (payer, payee, amount, transactionInfoId) => {
  const transaction = new Transaction({
    payer, payee, amount, transactionInfoId
  });
  return await transaction.save();
}

const createTransactionInfo = async (info) => {
  const transactionInfo = new TransactionInfo(info);
  return await transactionInfo.save();
}

export const addTransaction = async (id, description, transactions) => {
  const _id = ObjectId();
  const details = await Promise.all(
    transactions.map(async transaction => {
      const { group_id, friends, amount } = transaction;
      if (group_id !== undefined) {
        return { amount };
      } else {
        const num = friends.length;
        const average = parseFloat(amount) / friends.length;
        const transactions = await Promise.all(friends.map(item => createTransaction(id, item.id, average, _id)));
        const transactionId = transactions.map(item => item._id);
        return { amount, transactionId }
      }
    })
  );
  const info = { _id, payer: id, description, details }
  return await createTransactionInfo(info);
}

export const getTransactionByUser = async (id) => {
  return await TransactionInfo.find({ payer: id });
}

export const getTransactionByUserAndFriend = async (uid, fid) => {
  return await Transaction.find({ payer: uid, payee: fid });
}

export const getUserBalance = async (uid) => {
  // const cost = await Transaction.find({ payer: uid }).aggregate([{
  //   $group: {
  //     _id: null,
  //     totalAmount: { $sum: "$amount" }
  //   }
  // }]);
  // const pay = await Transaction.find({ payee: uid }).aggregate([{
  //   $group: {
  //     _id: null,
  //     totalAmount: { $sum: "$amount" }
  //   }
  // }]);

  const cost = await Transaction.aggregate([
    { $match: { payer: { $eq: new ObjectId(uid) } } },
    { $project: { _id: null, transactions: "$amount" } },
    { $group: { _id: null, totalAmount: { $sum: "$transactions" } } }
  ]);

  const pay = await Transaction.aggregate([
    { $match: { payee: { $eq: new ObjectId(uid) } } },
    { $project: { _id: null, transactions: "$amount" } },
    { $group: { _id: null, totalAmount: { $sum: "$transactions" } } }
  ]);

  console.log(cost, pay);

  const total_cost = (cost.length === 0) ? 0 : cost[0].totalAmount;
  const total_pay = (pay.length === 0) ? 0 : pay[0].totalAmount;

  return total_cost - total_pay; // sum(cost) - sum(pay)
}

export const getUserAndFriendBalence = async (uid, fid) => {
  const cost = await Transaction.find({ payer: uid, payee: fid }).aggregate([{
    $group: {
      _id: null,
      totalAmount: { $sum: "$amount" }
    }
  }]);
  const pay = await Transaction.find({ payer: fid, payee: uid }).aggregate([{
    $group: {
      _id: null,
      totalAmount: { $sum: "$amount" }
    }
  }]);
  return cost - pay; // sum(cost) - sum(pay)
}

export const getUserList = async (uid) => {
  const result = await Transaction.aggregate([
    {
      $match: {
        $or: [
          { payer: ObjectId(uid) },
          { payee: ObjectId(uid) }
        ]
      }
    },
    {
      $addFields: {
        reversed: {
          $cond: {
            if: { $eq: ["payee", ObjectId(uid)] },
            then: true,
            else: false
          }
        }
      }
    },
    {
      $project: {
        payer: {
          $cond: {
            if: "$reversed",
            then: "$payee",
            else: "$payer"
          }
        },
        payee: {
          $cond: {
            if: "$reversed",
            then: "$payer",
            else: "$payee"
          }
        },
        amount: {
          $cond: {
            if: "$reversed",
            then: { $multiply: ["$amount", -1] },
            else: "$amount"
          }
        },
        createdAt: 1
      }
    },
    { $sort: { createdAt: -1 } }
  ]);
  console.log(result);
  return result;
}

export const getUserAndFriendList = async (uid, fid) => {
  const result = await Transaction.aggregate([
    {
      $match: {
        $or: [
          { payer: ObjectId(uid), payee: ObjectId(fid) },
          { payer: ObjectId(fid), payee: ObjectId(uid) }
        ]
      }
    },
    {
      $addFields: {
        reversed: {
          $cond: {
            if: { $eq: ["$payer", ObjectId(fid)] },
            then: true,
            else: false
          }
        }
      }
    },
    {
      $project: {
        payer: {
          $cond: {
            if: "$reversed",
            then: "$payee",
            else: "$payer"
          }
        },
        payee: {
          $cond: {
            if: "$reversed",
            then: "$payer",
            else: "$payee"
          }
        },
        amount: {
          $cond: {
            if: "$reversed",
            then: { $multiply: ["$amount", -1] },
            else: "$amount"
          }
        },
        createdAt: 1
      }
    },
    { $sort: { createdAt: -1 } }
  ]);
  console.log(result);
  return result;
}
