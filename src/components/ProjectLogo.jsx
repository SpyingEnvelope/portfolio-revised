function ProjectLogo({ icon, image }) {
    return <div className="w-[97px] h-[97px] rounded-xl bg-[#001F3F] flex justify-center items-center">
        {icon ?? <img src={image} />}
    </div>
}

export default ProjectLogo;