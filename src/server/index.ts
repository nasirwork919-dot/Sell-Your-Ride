import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { leadsRouter } from "./routes/leads";

const app = express();

app.set("trust proxy", true);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin: true,
    credentials: false,
  })
);

app.use(express.json({ limit: "64kb" }));

const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);
const max = Number(process.env.RATE_LIMIT_MAX ?? 15);

app.use(
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { ok: false, error: "Too many requests. Please try again shortly." },
  })
);

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/leads", leadsRouter);

const port = Number(process.env.PORT ?? 8080);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server] listening on http://localhost:${port}`);
});
