export const Header = () => {
    return <header className="flex flex-col">
        <h1 className="text-slate-500 text-6xl font-extrabold">My Name</h1>
        <h2 className="text-slate-500 text-3xl font-thin">My position</h2>
        <p className="text-slate-500 text-base">My summary in one sentence</p>
        <nav>
            <ul>
                <li>About me</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
            <ul>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
            </ul>
        </nav>
    </header>
}