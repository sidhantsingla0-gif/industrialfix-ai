export default class ApiError extends Error {
  constructor(statusCode, message, code = 'ERROR') {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
  }

  static badRequest(message = 'Bad request') {
    return new ApiError(400, message, 'BAD_REQUEST');
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message, 'UNAUTHORIZED');
  }

  static forbidden(message = 'Forbidden') {
    return new ApiError(403, message, 'FORBIDDEN');
  }

  static notFound(message = 'Resource not found') {
    return new ApiError(404, message, 'NOT_FOUND');
  }

  static conflict(message = 'Conflict') {
    return new ApiError(409, message, 'CONFLICT');
  }
}