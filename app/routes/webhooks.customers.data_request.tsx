import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { handleComplianceWebhook } from "../lib/compliance-webhooks.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, shop, payload } = await authenticate.webhook(request);
  await handleComplianceWebhook(topic, shop, payload);
  return new Response(null, { status: 200 });
};
