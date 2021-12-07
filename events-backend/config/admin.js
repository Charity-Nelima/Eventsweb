module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37e03759a184c3753d4d1f391290f9d2'),
  },
});
