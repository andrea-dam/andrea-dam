import React from "react";

import LateralIconWrapper from "./LateralIconWrapper";
import PhUser from "./icons/PhUser";
import IconParkOutlinePage from "./icons/IconParkOutlinePage";
import FluentCertificate16Regular from "./icons/FluentCertificate16Regular";

export default function SidebarLine() {
	return (
		<div className="fixed inset-y-0 left-10 flex h-full w-[3px] flex-col items-center justify-center gap-3 bg-neutral-950">
			<LateralIconWrapper icon={PhUser()} href="#header" />
			<LateralIconWrapper icon={IconParkOutlinePage()} href="#projects" />
			<LateralIconWrapper icon={FluentCertificate16Regular()} />
		</div>
	);
}
