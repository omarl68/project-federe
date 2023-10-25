import User, { UserModel } from '../../model/User';
import KeystoreRepo from '../KeystoreRepo';
import Keystore from '../../model/Keystore';

const update = async (
  user: User,
  accessTokenKey: string,
  refreshTokenKey: string,
): Promise<{ user: User; keystore: Keystore }> => {
  user.updatedAt = new Date();
  await UserModel.updateOne({ _id: user._id }, { $set: { ...user } })
    .lean()
    .exec();
  const keystore = await KeystoreRepo.create(user._id, accessTokenKey, refreshTokenKey);
  return { user: user, keystore: keystore };
};

export default update;
