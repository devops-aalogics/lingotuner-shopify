import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import db from "../db.server";

async function deleteShopData(shop: string) {
  await db.$transaction([
    db.session.deleteMany({ where: { shop } }),
    db.translatorSettings.deleteMany({ where: { shop } }),
    db.translationLog.deleteMany({ where: { shop } }),
    db.translationRequest.deleteMany({ where: { shop } }),
  ]);
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, shop, payload } = await authenticate.webhook(request);

  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
    case "customers/data_request":
      // App stores shop-level translation data only, not customer PII.
      console.log(`Compliance: customers/data_request for ${shop}`, payload);
      break;

    case "CUSTOMERS_REDACT":
    case "customers/redact":
      // No customer records persisted; acknowledge redaction request.
      console.log(`Compliance: customers/redact for ${shop}`, payload);
      break;

    case "SHOP_REDACT":
    case "shop/redact": {
      const shopDomain =
        (payload as { shop_domain?: string }).shop_domain ?? shop;
      console.log(`Compliance: shop/redact for ${shopDomain}`);
      await deleteShopData(shopDomain);
      break;
    }

    default:
      console.warn(`Compliance webhook: unhandled topic ${topic}`);
  }

  return new Response();
};
