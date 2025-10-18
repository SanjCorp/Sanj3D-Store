import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Sanj3D Store API", version: "1.0.0" },
    servers: [{ url: "https://sanj3d-store.onrender.com/api/v1" }],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

// En tu index.js
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
