import { IReview } from '../models/reviews/IReview';
import reviewModel from '../models/reviews/reviews.model';

const createReview = async (dto: IReview) => {
  try {
    //   const existWorker = await workerModel.findOne({ _id: dto.worker_id });

    //   if (!existWorker) {
    //     throw 'existWorker not found';

    const review = await reviewModel.create(dto);
    return review;
  } catch (err: any) {
    throw err;
  }
};

export default { createReview };
