module.exports = {
  apps: [
    {
      name: "ai-painter-api",
      script: "build.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
