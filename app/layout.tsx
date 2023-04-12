import { Navbar } from "@/components/Navbar/Navbar";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Navbar />

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
