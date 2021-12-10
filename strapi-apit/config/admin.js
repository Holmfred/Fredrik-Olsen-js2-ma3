module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6d85fff0b89b5a964be5b953c4eb01b'),
  },
});
