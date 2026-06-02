import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import db from "../db.server";

export async function handleComplianceWebhook({ request }: ActionFunctionArgs) {
  const { shop, topic } = await authenticate.webhook(request);

  console.log(`Received compliance webhook: ${topic} for ${shop}`);

  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      // No customer PII stored outside Shopify — acknowledge receipt.
      break;

    case "CUSTOMERS_REDACT":
      // No customer PII stored outside Shopify — acknowledge receipt.
      break;

    case "SHOP_REDACT":
      await db.translationLog.deleteMany({ where: { shop } });
      await db.translationRequest.deleteMany({ where: { shop } });
      await db.translatorSettings.deleteMany({ where: { shop } });
      await db.session.deleteMany({ where: { shop } });
      break;

    default:
      console.warn(`Unexpected compliance topic: ${topic}`);
      break;
  }

  return new Response(null, { status: 200 });
}
