module.exports = {
  apps: [
    {
      name: "ai-painter-api",
      script: "build.js",
      watch: false,
      instances: 3,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      exec_mode: "cluster",
    },
  ],
};
