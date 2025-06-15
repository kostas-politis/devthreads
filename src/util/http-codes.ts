export const HttpCode = Object.freeze({
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
});

export type HttpCode = (typeof HttpCode)[keyof typeof HttpCode];
