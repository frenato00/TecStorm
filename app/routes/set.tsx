import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  if (status === "true") {
    await prisma.notification.upsert({
      create: { id: "0", type: "notification", location: 0, description: "" },
      update: {},
      where: { id: "0" },
    });
    return json({});
  } else if (status === "false") {
    await prisma.notification.deleteMany({
      where: { id: "0" },
    });
    return json({});
  } else {
    return json({ error: "Invalid status" }, { status: 400 });
  }
};
