module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd8d37776a052cf8a6030ad74af9a4f4'),
  },
});
