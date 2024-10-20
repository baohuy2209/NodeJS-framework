// import Image from "next/image";
import { cookies } from "next/headers";

import Mail from "@/components/component_mail_page/mail";
import { accounts, mails } from "@/data/emailData";
export default function Home() {
  const layout = cookies().get("react-resizable-panels:layouts:email");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
