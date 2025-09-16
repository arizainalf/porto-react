import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNodeJs, FaLaravel, FaReact, FaBootstrap, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiAdonisjs, SiPostgresql } from "react-icons/si";

const SkillCard = ({ name, Icon, progressClass, colorClass, iconColor }) => (
    <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2">
            <Icon className={`text-xl ${iconColor}`} />
            <h3 className="text-sm font-medium text-white">{name}</h3>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div className={`progress-bar ${progressClass} ${colorClass}`}></div>
        </div>
    </div>
);

export default function Skills() {
    return (
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
            <SkillCard name="HTML" Icon={FaHtml5} progressClass="progress-bar-95" colorClass="bg-orange-600" iconColor="text-orange-600" />
            <SkillCard name="CSS" Icon={FaCss3Alt} progressClass="progress-bar-75" colorClass="bg-blue-600" iconColor="text-blue-600" />
            <SkillCard name="Javascript" Icon={FaJs} progressClass="progress-bar-80" colorClass="bg-yellow-400" iconColor="text-yellow-400" />
            <SkillCard name="PHP" Icon={FaPhp} progressClass="progress-bar-85" colorClass="bg-violet-600" iconColor="text-violet-600" />
            <SkillCard name="Node Js" Icon={FaNodeJs} progressClass="progress-bar-75" colorClass="bg-green-400" iconColor="text-green-400" />
            <SkillCard name="Laravel" Icon={FaLaravel} progressClass="progress-bar-95" colorClass="bg-red-600" iconColor="text-red-600" />
            <SkillCard name="Express Js" Icon={SiExpress} progressClass="progress-bar-65" colorClass="bg-green-600" iconColor="text-green-600" />
            <SkillCard name="Adonis Js" Icon={SiAdonisjs} progressClass="progress-bar-80" colorClass="bg-indigo-600" iconColor="text-indigo-600" />
            <SkillCard name="React Js" Icon={FaReact} progressClass="progress-bar-50" colorClass="bg-cyan-600" iconColor="text-cyan-600" />
            <SkillCard name="Tailwind CSS" Icon={SiTailwindcss} progressClass="progress-bar-60" colorClass="bg-cyan-400" iconColor="text-cyan-400" />
            <SkillCard name="Bootstrap" Icon={FaBootstrap} progressClass="progress-bar-75" colorClass="bg-purple-600" iconColor="text-purple-600" />
            <SkillCard name="Git & Github" Icon={FaGitAlt} progressClass="progress-bar-80" colorClass="bg-gradient-to-l from-orange-500 to-gray-600" iconColor="text-orange-500" />
            <SkillCard name="Mysql" Icon={FaDatabase} progressClass="progress-bar-80" colorClass="bg-gradient-to-l from-orange-500 to-blue-600" iconColor="text-blue-600" />
            <SkillCard name="PostgreSQL" Icon={SiPostgresql} progressClass="progress-bar-65" colorClass="bg-cyan-800" iconColor="text-cyan-800" />
        </div>
    );
}
