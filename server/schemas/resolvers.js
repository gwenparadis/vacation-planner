const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Order, Activity } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    getActivities: async (parent, args, context) => {
      try {
        const activities = await Activity.find({});

        return activities || [];
      } catch (err) {
        console.log(`Error in activities!: ${err}`);
      }
    },

    getProfile: async (parent, args, context) => {
      try {
        // TODO: add user id once login functionality enabled
        const profile = await User.findOne({});

        return profile || [];
      } catch (err) {
        console.log(`Error in getProfile!: ${err}`);
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Invalid login");
      }
      const correctPass = await user.isCorrectPassword(password);
      if (!correctPass) {
        throw new AuthenticationError("Invalid login");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveActivity: async (parent, { activity }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: activity } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please login to save activity.");
    },
    removeActivity: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedActivities: _id } }
        );
        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;
