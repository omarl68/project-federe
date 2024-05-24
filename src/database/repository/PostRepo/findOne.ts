import IPost, { PostModel } from "../../model/Post";

const findOne = async (report: object): Promise<IPost | null> => {
  return await PostModel.findOne(report);
};
export default findOne;
