# Documentation

## Login Page

- [x] summary: This page is used to login to the system

```json
{
    "method": "POST",
    "url": "/api/user/login",
    "body": {
        "user_name" : "str",
        "password" : "str"
    },
    "response":
    {
        "state": 200,
        "body": {
            "id" : "str"
        }
    }
}
```

## Register Page

- [x] summary: This page is used to register to the system

```json
{
    "method": "POST",
    "url": "/api/user/register",
    "body": {
        "user_name" : "str",
        "password" : "str"
    },
    "response": {
        "state": 200,
        "body": {
            "user_id" : "str"
        }
    }
}
```

> Notes: Frontend should check password strength.

## Home Page (Dashboard)

- [x] summary: This page is used to display the **Total Balance** and **Recent Transactions**

> Notes: This is used to display the **Total Balance**

```json
{
    "method": "GET",
    "url": "/api/user/balance/:id",
    "response": {
        "state": 200,
        "body": { "balance" : "int" }
    }
}
```

> Notes: This is used to get the **Recent Transactions** of a user

```json
{
    "method": "GET",
    "url": "/api/user/balance_list/:id",
    "response": {
        "state": 200,
        "body": [
            {
                "friend_id" : "str",
                "friend_name" : "str",
                "balance" : "int",
                "timestamp" : "date"
            }
        ]
    }
}
```

## Friend Page

- [x] summary: This page is used to display the **Total Amount of a Friend** and **Transaction List with Balance** of a friend

> Notes: This is used to display the **Total Amount of a Friend**

```json
{
    "method": "GET",
    "url": "/api/friend/balance/:uid/:fid/",
    "response": {
        "state": 200,
        "body": { "balance" : "int" }
    }
}
```

> Notes: This is used to display the **Transaction History** of a friend

```json
{
    "method": "GET",
    "url": "/api/friend/transactions/:uid/:fid/",
    "response": {
        "state": 200,
        "body": [
            {
                "transaction_id" : "str",
                "balance" : "int",
                "description" : "str",
                "timestamp" : "date",
            }
        ]
    }
}
```

## Add Transaction Page

- [ ] summary: This page is used to create a new transaction

> Notes: This is used to display the **Friend List** of a user

```json
{
    "method": "GET",
    "url": "/api/user/friends/:id/",
    "response": {
        "state": 200,
        "body": [
            {
                "id" : "str", // friend id
                "name" : "str" // friend name
            }
        ]
    }
}
```

> Notes: This is used to display the **Group List** of a user

```json
{
    "method": "GET",
    "url": "/api/user/groups/:id/",
    "response": {
        "state": 200,
        "body": [
            {
                "_id" : "str",
                "name" : "str", // group name
                "users" :[ // group members
                    {
                        "id" : "str",
                        "name" : "str"
                    }
                ]
            }
        ]
    }
}
```

> Notes: This is used to create a new group

```json
{
    "method": "POST",
    "url": "/api/user/group/:id",
    "body": {
        "name": "str",
        "friends":[
            { "id" : "str" } // friend id
        ]
    },
    "response": {
        "state": 200,
        "body":[
            {
                "group_id" : "str",
                "friends" : [
                    {
                        "id" : "str",
                        "name" : "str"
                    }
                ]
            }
        ]
    }
}
```

> Notes: This is used to create a new transaction

```json
{
    "method": "POST",
    "url": "/api/transaction/add/:id",
    "body": {
        "description" : "str",
        "transactions": [
            {
                "group_id" : "str",
                "friends" : [
                    {"id" : "str"}
                ],
                "amount" : "int",
            }
        ]
    },
    "response": {
        "state": 200,
        "body": {
            "id" : "str", // group id
            "name" : "str", // group name
            "success" : "bool"
        }
    }
}
```

## Timeline Page

- [ ] summary: This page is used to display the **Transaction List** of a friend

```json
{
    "method": "GET",
    "url": "/api/user/timeline/:id/",
    "response": {
        "state": 200,
        "body": [
            {
                "transaction_id" : "str",
                "friend_id" : "str",
                "balance" : "int",
                "timestamp" : "date"
            }
        ]
    }
}
```

## Pay Page

- [ ] summary: This page is similar to **Add Transaction Page** but it is used to pay a friend
