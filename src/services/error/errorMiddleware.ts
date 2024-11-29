import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/appErrorHandler";

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      type: "ValidationError",
      error: error.message,
      statusCode: 400,
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
        type: "CastError",
        error: error.message,
        statusCode: 400,
      });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: error.message,
      statusCode: error.statusCode,
    });
  }

  return res
    .status(500)
    .json({ error: error.message, statusCode: 500 });
};

export default errorMiddleware;
