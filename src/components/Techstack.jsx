import SkillsList from "./SkillsList"

function Techstack() {
    const mySkills = [
        { name: "Solidity", color: "rgb(64, 224, 125)" },
        { name: "Foundry", color: "#C1F2B0" },
        { name: "NodeJS", color: "rgb(64, 224, 125)" },
        { name: "Ethers", color: "#C1F2B0" },
    ]

    return (
        <div className="App">
            <SkillsList skills={mySkills} />
        </div>
    )
}

export default Techstack
