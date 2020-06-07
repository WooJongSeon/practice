import { Request, Response } from 'express';
import BookService from './BookService';

class BookController {
  static async createOne(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async createMany(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async findOne(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async findAll(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async patchOne(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async updateOne(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async updateMany(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async deleteOne(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
  static async deleteMany(req: Request, res: Response) {
    const payload = req.body;
    try {
      const { data, status } = await BookService.createOne(payload);
      res.status(status).json(data);
    } catch (error) {
      res.status(500).json('error')
    }
  }
}
export default BookController;
// validation 은 앞쪽에서 처리한다.
// 컨트롤러에서는 메소드만 호출한다.
// 결과를 리턴한다.
// 이렇게 만들면 90줄 안쪽으로 컨트롤러를 만들 수 있다.
