import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  MONGODB_CREDENTIALS: str(),
  PORT: port(),
});
