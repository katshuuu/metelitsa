import { NextResponse } from "next/server";
import { deliverRequest } from "@/lib/mail";
import { fieldErrors, requestSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Некорректный запрос" } }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: fieldErrors(parsed.error) }, { status: 400 });
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  await deliverRequest({
    name: parsed.data.name,
    organization: parsed.data.organization,
    contact: parsed.data.contact,
    message: parsed.data.message,
  });

  return NextResponse.json({ ok: true });
}
