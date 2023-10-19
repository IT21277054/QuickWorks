import { Response, Request } from 'express';
import userService from '../services/user.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const dto = req.body;
    const reviewItem = await userService.createReview(dto);
    res.status(200).json(reviewItem);
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

export default { createReview };
