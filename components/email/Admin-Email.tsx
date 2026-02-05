import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdminEmailProps {
  name: string;
  email: string;
  contactNumber: string;
  country: string;
  brandName: string;
  natureOfBusiness: string;
  category: string;
  current_sales_figure: string;
  average_sales_price: string;
  target_sales: string;
}

const brandColor = "#000";
const offBlack = "#000000";

const AdminEmail = ({
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
}: AdminEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Inquiry: {brandName}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={card}>
            {/* Header */}
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={headerTd}>
                  <Img
                    src="https://isjp3gwwykeazkix.public.blob.vercel-storage.com/EmployVirtual_byDigixito.svg"
                    width="120"
                    height="40"
                    alt="Employ Virtual"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </td>
              </tr>
            </table>

            {/* Content */}
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={contentTd}>
                  <Heading style={h1}>New Contact Inquiry</Heading>

                  <Text style={paragraph}>
                    A new inquiry has been submitted through the contact form.
                    Here are the details:
                  </Text>

                  {/* Spacer */}
                  <Spacer height={24} />

                  {/* Info Box */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={infoTable}
                  >
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Full Name</Text>
                        <Text style={infoValue}>{name}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Email Address</Text>
                        <Text style={infoValue}>{email}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Contact Number</Text>
                        <Text style={infoValue}>{contactNumber}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Country</Text>
                        <Text style={infoValue}>{country}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Brand Name</Text>
                        <Text style={infoValue}>{brandName}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Nature of Business</Text>
                        <Text style={infoValue}>{natureOfBusiness}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Category</Text>
                        <Text style={infoValue}>{category || "N/A"}</Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>
                          Current Sales Figure (Daily)
                        </Text>
                        <Text style={infoValue}>
                          {current_sales_figure || "N/A"}
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Average Sales Price (ASP)</Text>
                        <Text style={infoValue}>
                          {average_sales_price || "N/A"}
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td height="12"></td>
                    </tr>
                    <tr>
                      <td style={infoBoxTd}>
                        <Text style={infoLabel}>Target Sales (Daily)</Text>
                        <Text style={infoValue}>{target_sales || "N/A"}</Text>
                      </td>
                    </tr>
                  </table>

                  <Spacer height={24} />

                  <Text style={subText}>
                    You can now review this inquiry and follow up accordingly.
                  </Text>

                  <Spacer height={32} />

                  {/* Footer */}
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={footerTd}>
                        <Text style={footerText}>
                          Regards,
                          <br />
                          <strong style={{ color: "#000000" }}>
                            Employ Virtual
                          </strong>
                        </Text>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminEmail;

/* ---------- Helpers ---------- */

const Spacer = ({ height }: { height: number }) => (
  <table width="100%" cellPadding="0" cellSpacing="0">
    <tr>
      <td
        height={height}
        style={{ fontSize: height, lineHeight: `${height}px` }}
      >
        &nbsp;
      </td>
    </tr>
  </table>
);

/* ---------- Styles ---------- */

const main = {
  backgroundColor: "#f4f4f5",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "32px 16px",
};

const container = {
  maxWidth: "540px",
  margin: "0 auto",
};

const infoTable = {
  width: "100%",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
};

const headerTd = {
  padding: "24px",
  textAlign: "center" as const,
  borderBottom: "1px solid #eeeeee",
};

const contentTd = {
  padding: "24px",
};

const h1 = {
  color: offBlack,
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 16px",
};

const paragraph = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "0",
};

const infoBoxTd = {
  backgroundColor: "#f5f3ff",
  border: `1px solid ${brandColor}`,
  borderRadius: "8px",
  padding: "16px",
};

const infoLabel = {
  fontSize: "11px",
  fontWeight: "bold",
  color: "#6b7280",
  textTransform: "uppercase" as const,
  margin: "0 0 6px",
};

const infoValue = {
  fontSize: "16px",
  fontWeight: "bold",
  color: brandColor,
  margin: "0",
  wordBreak: "break-all" as const,
};

const subText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
};

const footerTd = {
  borderTop: "1px solid #eeeeee",
  paddingTop: "16px",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};
