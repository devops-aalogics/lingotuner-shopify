import db from "../db.server";

export async function deleteShopData(shop: string) {
  await db.$transaction([
    db.session.deleteMany({ where: { shop } }),
    db.translatorSettings.deleteMany({ where: { shop } }),
    db.translationLog.deleteMany({ where: { shop } }),
    db.translationRequest.deleteMany({ where: { shop } }),
  ]);
}

export async function handleComplianceWebhook(
  topic: string,
  shop: string,
  payload: unknown,
) {
  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      console.log(`Compliance: customers/data_request for ${shop}`, payload);
      break;

    case "CUSTOMERS_REDACT":
      console.log(`Compliance: customers/redact for ${shop}`, payload);
      break;

    case "SHOP_REDACT": {
      const shopDomain =
        (payload as { shop_domain?: string }).shop_domain ?? shop;
      console.log(`Compliance: shop/redact for ${shopDomain}`);
      await deleteShopData(shopDomain);
      break;
    }

    default:
      console.warn(`Compliance webhook: unhandled topic ${topic}`);
  }
}
