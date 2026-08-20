-- CreateTable
CREATE TABLE "TranslationLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shop" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "contentType" TEXT NOT NULL DEFAULT 'others',
    "action" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "requestUid" TEXT,
    "itemId" TEXT,
    "statusCode" INTEGER,
    "requestBody" TEXT,
    "responseBody" TEXT,
    "metadata" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TranslationRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shop" TEXT NOT NULL,
    "requestUid" TEXT NOT NULL,
    "contentType" TEXT NOT NULL DEFAULT 'product',
    "itemId" TEXT,
    "itemTitle" TEXT,
    "languages" TEXT NOT NULL,
    "storeLocale" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "isTranslated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TranslationRequest_shop_requestUid_key" ON "TranslationRequest"("shop", "requestUid");
