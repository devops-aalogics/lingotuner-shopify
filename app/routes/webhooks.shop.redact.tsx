import type { ActionFunctionArgs } from "react-router";
import { handleComplianceWebhook } from "../lib/compliance-webhook.server";

export const action = (args: ActionFunctionArgs) =>
  handleComplianceWebhook(args);
