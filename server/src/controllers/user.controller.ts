import { Response, Request } from 'express';
import userService from '../services/user.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const dto = req.body;
    console.log(dto)
    const reviewItem = await userService.createReview(dto);
    res.status(200).json(reviewItem);
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const getReview = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const reviews = await userService.getReview(user_id);
    res.status(200).json(reviews);
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    const { review_id, comment, star_review } = req.body;

    console.log(review_id)
    const reviews = await userService.updateReview(
      review_id,
      comment,
      star_review,
    );
    res.status(200).json({ msg: 'Updated', reviews });
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { review_id } = req.params;
    const reviews = await userService.deleteReview(review_id);
    res.status(200).json({ msg: 'deleted', reviews });
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

export default { createReview, getReview, updateReview, deleteReview };
