import type { ActionFunctionArgs } from "react-router";
import { handleComplianceWebhook } from "../lib/compliance-webhook.server";

// Legacy URI — kept so older deployed app versions still respond until re-deployed.
export const action = (args: ActionFunctionArgs) =>
  handleComplianceWebhook(args);
