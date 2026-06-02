import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, topic } = await authenticate.webhook(request);

  console.log(`Received compliance webhook: ${topic} for ${shop}`);

  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      // Customer requested their data.
      // This app does not store personal customer data beyond what Shopify
      // provides at runtime (shop domain). No additional action required.
      break;

    case "CUSTOMERS_REDACT":
      // Merchant requested customer data deletion.
      // Delete any stored customer data associated with this shop if applicable.
      break;

    case "SHOP_REDACT":
      // App was uninstalled 48h ago. Delete all shop data.
      // Session cleanup is handled by app/uninstalled webhook.
      break;

    default:
      console.warn(`Unhandled compliance topic: ${topic}`);
      return new Response("Unhandled topic", { status: 404 });
  }

  return new Response(null, { status: 200 });
};
