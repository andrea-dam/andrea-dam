import React from "react";

import SidebarLine from "./components/SidebarLine";
import pagine from "./data/pagine.json";

export default function App() {
	return (
		<>
			<div className="container mx-auto px-44 snap-y h-[100dvh] overflow-y-scroll scroll-smooth">
				<section id="header" className="snap-start scroll-my-20 mt-20 h-[100dvh]">
					<header className="flex flex-col mb-20">
						<h1 className="text-8xl font-display tracking-tighter font-medium">Andrea Damiani</h1>
						<h2 className="text-7xl">Web Developer</h2>
					</header>
					<p className="text-end text-2xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi molestiae earum harum
						ducimus at, dolor sequi perferendis minus ipsam? Impedit incidunt quae sunt quasi quos
						architecto cum cumque aliquid?
					</p>
				</section>

				<section id="projects" className="snap-start scroll-my-20 h-[100dvh]">
					<header className="mb-10">
						<h3 className="text-3xl">Progetti</h3>
					</header>
					<div className="grid grid-cols-3 gap-2">
						{pagine.map(progetto => (
							<div className="border-2 w-96 border-black flex flex-col gap-2">
								<img src={progetto.immagine} alt="" />
								<h4 className="text-2xl">{progetto.titolo}</h4>
							</div>
						))}
					</div>
				</section>
			</div>

			<SidebarLine />
		</>
	);
}
