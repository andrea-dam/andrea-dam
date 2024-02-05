import React from "react";

import LateralIconWrapper from "./LateralIconWrapper";
import PhUser from "./icons/PhUser";
import IconParkOutlinePage from "./icons/IconParkOutlinePage";
import FluentCertificate16Regular from "./icons/FluentCertificate16Regular";

export default function SidebarLine() {
	return (
		<div className="fixed top-0 flex w-full items-center bg-neutral-50 py-7 lg:left-10 lg:h-full lg:w-auto lg:py-0">
			<div className=" flex h-[3px]  w-full items-center justify-center gap-3 bg-neutral-950 lg:inset-y-0 lg:left-10 lg:h-full lg:w-[3px] lg:flex-col">
				<LateralIconWrapper icon={PhUser()} href="#header" />
				<LateralIconWrapper
					icon={IconParkOutlinePage()}
					href="#projects"
				/>
				<LateralIconWrapper icon={FluentCertificate16Regular()} />
			</div>
		</div>
	);
}
