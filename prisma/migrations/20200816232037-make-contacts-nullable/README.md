# Migration `20200816232037-make-contacts-nullable`

This migration has been generated by Denis at 8/16/2020, 11:20:37 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `getskill-mvp`.`Profile` MODIFY `contacts` json;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200810003304-init..20200816232037-make-contacts-nullable
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -41,8 +41,8 @@
 model Profile {
   id Int @default(autoincrement()) @id
   publicName String
   avatar String?
-  contacts Json
+  contacts Json?
   user User @relation(fields: [userId], references: [id])
   userId Int
 }
```

