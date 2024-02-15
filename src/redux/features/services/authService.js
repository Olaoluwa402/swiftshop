import axios from "axios";

export const loginUser = async ({ email, password }) => {
  const config = {
    header: {
      "Content-Type": "Application/json",
      // Authorization:`Bearer ${token}`
    },
  };

  // call to backend server
  // const users = await axios.get("http://localhost:4000/users", config);
  // const user = users.data.find(
  //   (user) => user.email === email && user.password === password
  // );

  //workaround when no backend server
  const tempUsersFromLocalStorage = localStorage.getItem("tempUsers")
    ? JSON.parse(localStorage.getItem("tempUsers"))
    : null;
  console.log(tempUsersFromLocalStorage, "users");

  if (!tempUsersFromLocalStorage) {
    throw new Error("Invalid credential");
  }
  const user = tempUsersFromLocalStorage.find((user) => {
    return user.email == email && user.password == password;
  });

  if (!user) {
    throw new Error("Invalid credential");
  }
  return user;
};

export const registerUser = async ({
  fisrtName,
  lastName,
  username,
  phone,
  email,
  password,
  token = "123456",
}) => {
  const config = {
    header: {
      "Content-Type": "Application/json",
      // Authorization:`Bearer ${token}`
    },
  };

  const newUser = {
    fisrtName,
    lastName,
    username,
    phone,
    email,
    password,
    token,
  };
  const tempUsersFromLocalStorage = localStorage.getItem("tempUsers")
    ? JSON.parse(localStorage.getItem("tempUsers"))
    : [];

  const exist = tempUsersFromLocalStorage.find(
    (user) => user.email == newUser.email || user.username == newUser.username
  );
  if (exist) {
    throw new Error("credential already taken. use unique username and email");
  }

  const updatedUsers = [...tempUsersFromLocalStorage, newUser];
  localStorage.setItem("tempUsers", JSON.stringify(updatedUsers));

  return newUser;
  // return await axios.post(
  //   "http://localhost:4000/users",
  //   { fisrtName, lastName, username, phone, email, password, token },
  //   config
  // );
};
