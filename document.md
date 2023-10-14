# Backend Documentation

## Login Page

summary: This page is used to login or signup to the system

POST `"/api/user/login"`
> Notes: This is used to login to the system

```json
{
    "url": "/api/user/login",
    "body":
    {
        "user_name": "str",
        "password": "str"
    },
    "response":
    {
        "state": 200,
        "body":
        {
            "user_id": "str",
            "success": "bool"
        }
    }
}
```

## Sigup Page

summary: This page is used to signup to the system

POST `"/api/user/signup"`
> Note: This is used to signup to the system

```json
{
    "url": "/api/user/signup",
    "body":
    {
        "user_name": "str",
        "password": "str"
    },
    "response": 200
    {
        "user_id": "str",
        "success": "bool"
    }
}
```

> Notes: Frontend should check password strength

## Home Page (Dashboard)

summary: This page is used to display the **Total Amount** and **Friends List with Balance**

GET `"/api/user/balance/:id"`

```json
"response": 200
{
    "balance": "int"
}
```

---

GET `"/api/user/balance_list/:id"`

```json
"response": 200
[
    {
        "friend_id": "str",
        "friend_name": "str",
        "balance": "int",
        "timestamp": "date"
    }
]
```

## Friend History Page

summary: This page is used to display the **Total Amount of a Friend** and **Transaction History with Balance** of a friend

GET `"/api/friend/balance/:uid/:fid"`
> Notes: This is used to display the **Total Amount of a Friend**

```json
"response": 200
{
    "balance": "int",
}
```

---

GET `"/api/friend/balance_list/:uid/:fid`"
> Notes: This is used to display the **Transaction History** of a friend

```json
"response": 200
[
    {
        "transaction_id": "str",
        "balance": "int",
        "description": "str",
        "timestamp": "date",
    }
]
```

## Add Transaction Page

summary: This page is used to display the **Transaction List** of a friend

GET `"/api/user/friends/:id/"`
> Notes: This is used to display the **Friend List** of a user

```json
response: 200
[
    {
        "id": "str", // friend id
        "name": "str" // friend name
    }
]
```

---

GET `"/api/user/groups/:id/"`
> Notes: This is used to display the **Group List** of a user

```json
"response": 200
[
    {
        "id": "str", // group id
        "name": "str", // group name
        "friends":
        [
            {
                "id": "str",
                "name": "str"
            }
        ]
    }
]
```

---

POST `"/api/user/group/:id"`
> Notes: This is used to create a new group

```json
{
    "url": "/api/user/group/:id",
    "body":
    {
        "name": "str", // group name
        "friends":
        [
            {
                "id": "str"
            }
        ]
    },
    "response": 200
    [
        {
            "id": "str",
            "friends":
            [
                {
                    "id": "str",
                    "name": "str"
                }
            ]
        }
    ]
}
```

---

POST `"/api/transaction/add/:id"`
> Notes: This is used to create a new transaction

```json
{
    "url": "/api/transaction/add/:id",
    "body": {
        "description": "str",
        "transactions":
        [
            {
                "id": "str", // group id
                "friends":
                [
                    {
                        "id": "str"
                    }
                ],
                "amount": "int",
            }
        ]
    },
    "response": 200
    {
        "id": "str",
        "success": "bool"
    }
}
```

## Timeline Page

summary: This page is used to display the overall **Transaction List**

GET `"/api/user/timeline/:id/"`

```json
"response": 200
[
    {
        "transaction_id": "str",
        "friend_id": "str",
        "balance": "int",
        "timestamp": "date"
    }
]
```

## Pay Page

summary: This page is similar to **Add Transaction Page** but it is used to pay a friend
