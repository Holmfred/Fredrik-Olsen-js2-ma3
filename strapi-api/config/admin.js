module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e0be37d3d21b9b8c1dea32c115bab81'),
  },
});
