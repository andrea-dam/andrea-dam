import React from "react";

export default function LateralIconWrapper(props) {
	return (
		<a
			className="border-[3px] transition-all duration-300 ease-out hover:scale-125 flex items-center justify-center border-neutral-950 rounded-full bg-white text-4xl"
			href={props.href}>
			{props.icon}
		</a>
	);
}
