import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    alert:
      (await prisma.notification.findMany({ where: { id: "0" } })).length > 0,
  });
};