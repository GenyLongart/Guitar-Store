module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdro45h4rebbgsh06c4g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarstore_qokc'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'INWmSAqntzoO7Yns7pJCk8jZ4QH1sPq4'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
