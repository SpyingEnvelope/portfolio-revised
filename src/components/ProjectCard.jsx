import ProjectLogo from "./ProjectLogo";

function ProjectCard({ children, title, links, icon, image }) {
  return (
    <div className="w-[392px] h-[372px] bg-[#020D14] rounded-xl text-left">
      <div className="relative left-5 bottom-10">
        <ProjectLogo icon={icon} image={image} />
      </div>
      <h3 className="relative bottom-5 bold-instrument-sans text-3xl font-bold ml-5">
        {title}
      </h3>
      <div className="ml-5 mr-2 h-[50px] reg-instrument-sans text-[15px] relative bottom-1">{children}</div>
      {/* <ul>
        {links.map((link) => {
            <li key={link.key}><a href={link.href}>{link.text}</a></li>
        })}
    </ul> */}
    </div>
  );
}

export default ProjectCard;
