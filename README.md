# back-end

### Issues Endpoints - authentication required

| Method | Endpoint        | Description                       | Response     |
| :----- | :-------------- | :-------------------------------- | :----------- |
| GET    | /api/issues     | full list of all issues           | VALID 200 OK |
| GET    | /api/issues/:id | get a single issue by its id      | VALID 200 OK |
| POST   | /api/issues     | post a issue                      | VALID 201 OK |
| PUT    | /api/issues/:id | edit a specific issue by its id   | VALID 200 OK |
| DELETE | /api/issues/:id | delete a specific issue by its id | VALID 200 OK |

---

### Issues Data

| Porperty    | Type                        | Example                    | Requirements |
| :---------- | :-------------------------- | :------------------------- | :----------- |
| title       | string / max 255 characters | "title of an issue"        | required     |
| description | string                      | "description of the issue" | required     |

---

### Users Endpoints - authentication required for /api/users

| Method | Endpoint       | Description                            | Response     |
| :----- | :------------- | :------------------------------------- | :----------- |
| POST   | /auth/register | takes a username and password          | VALID 201 OK |
| POST   | /auth/login    | takes a username and password          | VALID 200 OK |
| GET    | /api/users     | full list of all users                 | VALID 201 OK |
| GET    | /api/users/:id | specific user with profile information | VALID 200 OK |

---

### Users Data

| Porperty | Type                        | Example    | Requirements      |
| :------- | :-------------------------- | :--------- | :---------------- |
| username | string / max 255 characters | "username" | required & unique |
| password | string / max 255 characters | "password" | required          |

---

### Profile Endpoints - authentication required

| Method | Endpoint          | Description                                                       | Response     |
| :----- | :---------------- | :---------------------------------------------------------------- | :----------- |
| GET    | /api/profiles     | full list of all profiles                                         | VALID 200 OK |
| POST   | /api/profiles     | takes a email, first name, last name, age, and address (optional) | VALID 201 OK |
| PUT    | /api/profiles     | takes a email, first name, last name, age, and address (optional) | VALID 201 OK |
| DELETE | /api/profiles/:id | Deletes a specific profile                                        | VALID 200 OK |

---

### Profile Data

| Porperty   | Type                         | Example           | Requirements      |
| :--------- | :--------------------------- | :---------------- | :---------------- |
| email      | string / max 255 characters  | "email@email.com" | required & unique |
| first name | string / max 255 characters  | "Bob"             | required          |
| last name  | string / max 255 characters  | "Doe"             | required          |
| age        | integer / max 128 characters | 25                | required          |
| address    | string / max 255 characters  | "123 abc st"      | optional          |
