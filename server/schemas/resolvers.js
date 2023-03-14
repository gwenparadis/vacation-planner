const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Order, Activity } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    getAllActivities: async (parent, args, context) => {
    
      const activities = await Activity.find({})
      console.log(activities);

      return activities;
      },
      
      comment: async () => {
      return Comment.find({});
      }
    },
   
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    
    login: async (parent, { username, password }) => {
        const user = await User.findOne( { username });
        if (!user) {
            throw new AuthenticationError('Invalid login')
        }
        const correctPass = await user.isCorrectPassword(password);
        if(!correctPass) {
            throw new AuthenticationError('Invalid login')
        }
        const token = signToken(user);
        return { token, user };
      },
      saveActivity: async (parent, { activities }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: {savedActivities: activities} },
                { new: true }
            )
            return updatedUser;
        }
        throw new AuthenticationError('Please login to save activity.')
      },
      removeActivity: async (parent, { name }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $pull: { savedActivities: { name: name }} },
            )
            return updatedUser;
          }
        }
      }
    };
      
module.exports = resolvers;
