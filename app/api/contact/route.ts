import { NextResponse } from "next/server";
import React from "react";
import { resend } from "../../../lib/resend";
import AdminEmail from "../../../components/email/Admin-Email";
import UserEmail from "../../../components/email/User-Email";
import { render } from "@react-email/render";

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const {
      name,
      email,
      contactNumber,
      country,
      brandName,
      natureOfBusiness,
      category,
      current_sales_figure,
      average_sales_price,
      target_sales,
    } = values;

    if (!email || !name || !brandName || !natureOfBusiness) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const adminHtml = await render(
      React.createElement(AdminEmail, {
        name,
        email,
        contactNumber,
        country,
        brandName,
        natureOfBusiness,
        category,
        current_sales_figure,
        average_sales_price,
        target_sales,
      }),
    );
    const userHtml = await render(
      React.createElement(UserEmail, { name, email }),
    );

    await resend.emails.send({
      from: `Employ Virtual <${process.env.NO_REPLY_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      bcc: process.env.BCC_EMAIL ? [process.env.BCC_EMAIL] : [],
      subject: `New Contact Inquiry: ${brandName} from ${name}`,
      html: adminHtml,
    });

    await resend.emails.send({
      from: `Employ Virtual <${process.env.NO_REPLY_EMAIL}>`,
      to: email,
      subject: "Thank you for reaching out to Employ Virtual!",
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
