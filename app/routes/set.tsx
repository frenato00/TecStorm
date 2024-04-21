import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const flame = url.searchParams.get("flame") || undefined;
  const status =
    url.searchParams.get("status") === null
      ? flame==="1"
        ? true
        : undefined
      : url.searchParams.get("status") === "true"
        ? true
        : false;

  const temp = url.searchParams.get("temp") || undefined;
  const hum = url.searchParams.get("hum") || undefined;
  await prisma.sensor.upsert({
    create: { id: "0", alert: status, temp, hum, flame },
    update: { alert: status, temp, hum, flame },
    where: { id: "0" },
  });

  return json({});
};
