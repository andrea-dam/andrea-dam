import React from "react";

import SidebarLine from "./components/SidebarLine";
import pagine from "./data/pagine.json";

export default function App() {
	return (
		<>
			<div className="container mx-auto h-[100dvh] overflow-y-scroll scroll-smooth px-44">
				<section
					id="header"
					className="mt-20 min-h-[100dvh] scroll-my-20">
					<header className="mb-20 flex flex-col">
						<h1 className="font-display text-8xl font-medium tracking-tighter">
							Andrea Damiani
						</h1>
						<h2 className="text-7xl">Web Developer</h2>
					</header>
					<p className="text-end text-2xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Asperiores nisi molestiae earum harum ducimus at, dolor
						sequi perferendis minus ipsam? Impedit incidunt quae
						sunt quasi quos architecto cum cumque aliquid?
					</p>
				</section>

				<section id="projects" className="min-h-[100dvh] scroll-my-20">
					<header className="mb-10">
						<h3 className="text-4xl">Progetti</h3>
					</header>
					<div className="grid grid-cols-3 gap-x-3 gap-y-9">
						{pagine.map((progetto) => (
							<div
								key={progetto.titolo}
								className="flex flex-col gap-1.5">
								<div className="h-max">
									<img
										className="border-[3px] border-neutral-950"
										src={progetto.immagine}
										alt={progetto.titolo}
									/>
								</div>
								<h4 className="text-2xl">{progetto.titolo}</h4>
								<p>{progetto.descrizione.italian}</p>
								<div>
									<a href={progetto.url} target="_blank">
										Visita
									</a>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>

			<SidebarLine />
		</>
	);
}
