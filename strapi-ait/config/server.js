module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8060),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fd1708d763c268b861bf19a00df373a8'),
    },
  },
});
