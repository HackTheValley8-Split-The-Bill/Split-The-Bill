import express from "express";

export const friendRouter = express.Router();
friendRouter.get("/api/friend/balance/:uid/:fid/", async function (req, res, next) {
});
friendRouter.post("/api/friend/balance/:uid/:fid/", async function (req, res, next) {
  req.state=200;
  req.body.balance=cal_trt(req);
});
function cal_trt(js){
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
var friend_list={
  state: 200,
  body:[

  ]
};
friendRouter.get("/api/user/friends/:id/",async function (req, res, next){
  res.send(friend_list)
});
function add_friend(friend_id,nam){
  friend_list['body'].push({
    id:friend_id,
    name:nam
  })
  return friend_list;
}

