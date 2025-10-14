function ProjectLogo({ icon, image }) {
    return <div className="w-[97px] h-[97px] rounded-xl bg-[#002A56] flex justify-center items-center">
        {icon ? <div className="text-5xl">{icon}</div>:<img src={image} />}
    </div>
}

export default ProjectLogo;