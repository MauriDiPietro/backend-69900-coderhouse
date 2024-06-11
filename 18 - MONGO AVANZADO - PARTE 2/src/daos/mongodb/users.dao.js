import { UserModel } from "./models/user.model.js";
import { getRandomNumber } from "../../utils.js";

export default class UserDaoMongoDB {
  async updateManyAge() {
    try {
      const users = await this.getAllUsers();
      const updatePromises = users.map((user) => {
        return UserModel.findByIdAndUpdate(user._id, {
          $set: { age: getRandomNumber() },
        });
      });

      await Promise.all(updatePromises);
      return { msg: "updated ok" };
    } catch (error) {
      throw new Error(error);
    }
  }

  //! gender: |M| - |F|
  //! age: |18|
  //! FILTRAR --> GET ..../aggregation1?gender=`${gender}`&age=`${age}`
  async aggregation1(gender, age) {
    try {
      return await UserModel.aggregate([
        {
          $match : {
            // gender: gender,
            age: { $gte: parseInt(age) }
          }
        },
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count: { $sum: 1 },
            youngest: { $min: '$age' },
            oldest: { $max: '$age' },
            count_with_pets: {
              $sum: {
                $cond: {
                  if: { $gt: [ { $size: { $ifNull: [ '$pets', [] ] } }, 0 ] },
                  then: 1,
                  else: 0
                }
              }
            }
          }
        },
        {
          $sort: {
            average_age: 1
          }
        }
      ])
    } catch (error) {
      throw new Error(error);
    }
  }

  async addPetToUser(userId, petId) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { new: true }
      );
      /* ------------------------------------ - ----------------------------------- */
      // const user = await UserModel.findById(userId)
      // user.pets.push(petId)
      // user.save()
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById(id) {
    try {
      return await UserModel.findById(id).populate("pets");
      // .explain();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserByName(name) {
    try {
      return await UserModel.find({ first_name: name }).explain();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserByEmail(email) {
    try {
      return await UserModel.find({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUsers(page = 1, limit = 10) {
    try {
      return await UserModel.paginate({}, { page, limit });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(obj) {
    try {
      return await UserModel.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id, obj) {
    try {
      return await UserModel.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
