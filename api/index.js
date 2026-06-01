import * as build from "../build/server/index.js";
import { createRequestHandler } from "@react-router/express";
import express from "express";

const app = express();

app.all(
  "*",
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  }),
);

export default app;
