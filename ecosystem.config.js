module.exports = {
  apps: [
    {
      name: "ai-painter-api",
      script: "build.js",
      watch: false,
      instances: 10,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      exec_mode: "cluster",
    },
  ],
};
