const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users() {},
    user() {},
    books() {},
    book() {},
    me() {},
  },
  //   Mutation: {
  //     addUser() {},
  //     login() {},
  //     saveBook() {},
  //     removeBook() {},
  //   },
};

module.exports = resolvers;
