module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b2347f4d8422693c0d49474c38f02c5a'),
  },
});
