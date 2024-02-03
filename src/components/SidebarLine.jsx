import React from "react";

import LateralIconWrapper from "./LateralIconWrapper";
import PhUser from "./icons/PhUser";
import IconParkOutlinePage from "./icons/IconParkOutlinePage";
import FluentCertificate16Regular from "./icons/FluentCertificate16Regular";

export default function SidebarLine() {
	return (
		<div className="inset-y-0 fixed h-full w-0.5 bg-neutral-950 left-10 flex flex-col justify-center items-center gap-3">
			<LateralIconWrapper icon={PhUser()} href="#header" />
			<LateralIconWrapper icon={IconParkOutlinePage()} href="#projects" />
			<LateralIconWrapper icon={FluentCertificate16Regular()} />
		</div>
	);
}
