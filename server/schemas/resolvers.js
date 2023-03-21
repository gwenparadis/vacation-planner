const { AuthenticationError } = require("apollo-server-express");
const { User, Activity } = require("../models");
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
    getUsers: async (parent, args, context) => {
      try {
        const users = await User.find({});

        return users || [];
      } catch (err) {
        console.log(`Error in users!: ${err}`);
      }
    },

    getProfile: async (parent, { id }, context) => {
      if (context.user) {
        try {
          const profile = await User.findOne({ _id: context.user._id });

          return profile || [];
        } catch (err) {
          console.log(`Error in getProfile!: ${err}`);
        }
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
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
    saveActivity: async (parent, { _id, name, activityDate, price }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: { _id, name, activityDate, price }} },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please login to save activity.");
    },
    removeActivity: async (parent, { id }, context) => {
      console.log(id, "Remove activity", context.user._id);
      if (context.user) {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedActivities: id } },
            { new: true }
          );
          console.log(updatedUser);
          return updatedUser;
        } catch (err) {
          console.log(err);
          res.json(err);
        }
      }
    },
  },
};

module.exports = resolvers;
