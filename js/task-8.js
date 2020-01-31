"use strict";
import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    const friendFilter = users.filter(user => user.friends.includes(friendName));
    return friendFilter.map(user => user.name)
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]