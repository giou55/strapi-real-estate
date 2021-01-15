// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', 'f382d2920d6b3d30e1a0b0a5f159117f'),
//     },
//   },
// });

module.exports = ({ env }) => ({
    host: env("APP_HOST", "0.0.0.0"),
    port: env.int("NODE_PORT", 1337),
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET", "f382d2920d6b3d30e1a0b0a5f159117f"),
        },
        url: "/dashboard",
    },
});
