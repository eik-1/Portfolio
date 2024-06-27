import SkillsList from "./SkillsList"

function Skills() {
    const mySkills = [
        { name: "Solidity", color: "#06D001" },
        { name: "Foundry", color: "#C1F2B0" },
        { name: "Ethers", color: "#06D001" },
        { name: "React", color: "#C1F2B0" },
    ]

    return (
        <div className="App">
            <SkillsList skills={mySkills} />
        </div>
    )
}

export default Skills
