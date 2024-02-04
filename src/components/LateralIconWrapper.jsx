import React from "react";

export default function LateralIconWrapper(props) {
	return (
		<a
			className="flex items-center justify-center rounded-full border-[3px] border-neutral-950 bg-white text-4xl transition-all duration-300 ease-out hover:scale-125"
			href={props.href}>
			{props.icon}
		</a>
	);
}
