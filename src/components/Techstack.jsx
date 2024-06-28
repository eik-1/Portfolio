import SkillsList from "./SkillsList"

function Techstack() {
    const mySkills = [
        { name: "Solidity", color: "#06D001" },
        { name: "Foundry", color: "#C1F2B0" },
        { name: "Javascript", color: "#06D001" },
        { name: "NodeJS", color: "#C1F2B0" },
        { name: "Ethers", color: "#06D001" },
    ]

    return (
        <div className="App">
            <SkillsList skills={mySkills} />
        </div>
    )
}

export default Techstack
