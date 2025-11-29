let i = "M 10 100 Q 500 100 1000 100";
let f = "M 10 100 Q 500 100 1000 100";
const s = document.querySelector(".s");

s.addEventListener("mousemove", (dets) => {
  const rect = s.getBoundingClientRect();
  const x = dets.clientX - rect.left;
  const y = dets.clientY - rect.top;

  i = `M 10 100 Q ${x} ${y} 1000 100`;

  gsap.to("svg path", {
    attr: { d: i },
    duration: 0.2,
    ease: "power3.out",
  });
});

s.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: f },
    duration: 1.5,
    ease: "elastic(1,0.2).out",
  });
});



 const inputs = document.querySelectorAll(".form-control");

 function AddClass(){
	 let parent = this.parentNode.parentNode;
	 parent.classList.add("focus");
 }

 function RemoveClass(){
	let parent = this.parentNode.parentNode;
	if(this.value == ''){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", AddClass);
	input.addEventListener("blur", RemoveClass);
});

