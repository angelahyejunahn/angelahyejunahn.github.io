if (document.readyState === 'loading') {  // Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', init);
} else {  // `DOMContentLoaded` has already fired
	init();
}

function init() {
	const sections = Array.from(document.querySelectorAll('.detail-section'));
	const toc = document.getElementById('toc');
	if(!toc){
		//generate TOC Here
	}

	const toclist = document.createElement("ul");
	toc.appendChild(toclist);
	toclist.innerHTML = '';
	sections.forEach(function(sec) {
		const title = sec.querySelector(".detail-section-title").textContent;
		const id = sec.id;
		const node = document.createElement('li');
		const link = document.createElement('a');
		link.className = 'vert-nav-link'
		link.href = '#'+id;
		link.setAttribute('aria-label','go to '+ title);
		const dot = document.createElement('div');
		dot.className = 'dot';
		link.appendChild(dot);
		const text = document.createElement('div');
		text.appendChild(document.createTextNode(title));
		text.className = 'vert-nav-text';
		text.setAttribute('aria-hidden',true);
		node.appendChild(link);
		node.appendChild(text);
		toclist.appendChild(node);
	});
	const menu_links = document.querySelectorAll("#toc a");
	window.addEventListener("scroll", () => {
		const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
	  // check position and update nav
	});

	tippy('.lookup-word',{
		content(reference) {
			console.log(reference.textContent.toLowerCase(),words.findIndex((a) => (a.includes(reference.textContent.toLowerCase()))));
			return definitions[words.findIndex((a) => (a.includes(reference.textContent.toLowerCase())))];
		},
		placement: 'bottom',
		interactive: true,
		animation: 'custom'
	});
}

function createDefinition(word,definition) {
	const popup = document.createElement('span');
	const wordNode = document.createElement('strong');
	wordNode.appendChild(document.createTextNode(word+'- '));
	popup.appendChild(wordNode);
	popup.appendChild(document.createTextNode(definition));
	console.log(popup);
	return popup;
}

const definitions = [
"Finite Element Analysis",
"A viewport is the display area that displays models or analysis results.",
"A load case is a set of loads, supports, and displacement constraints that act on a model at one time. An example is a pressure load.",
"A scenario has one or more events associated with it. Each event is defined by a set of load cases.",
"Result data refers to the data that is obtained by running a simulation. It includes information about stresses and forces on the model.",
"A result plot is a visual representation of the result data.",
"Pre-processing is the first step in FEA, where the model is being created and prepared.",
"Post-processing is the step where the result data is displayed graphically as result plots and graphs.",
"Two or more views are coupled if they display the result data from the same scenario and event.",
"A viewport collection is a collection of one or more viewports. A viewport collection can have up to 9 viewports.",
"A ply represents a single piece of material that is placed in a mold during the composites manufacturing process.",
"A ply pack is a specific combination of plies.",
"A composite layup contains one or more plies. Plies do not have to overlap in the applied region.",
"A sheet represents a reusable piece of material that has a thickness.",
"A stack is a specific combination of sheets that can be reused."
]

const words = [
["fea"],
["viewports","viewport"],
["load cases","load case"],
["events","event"],
["result data"],
["result plots","result plot"],
["pre-processing"],
["post-processing"],
["coupled","coupling"],
["viewport collections","viewport collection"],
["plies","ply"],
["ply packs","ply pack"],
["composite layups","composite layup","layups","layup"],
["sheets","sheet"],
["stacks","stack"]
];