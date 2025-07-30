import {ProjectDetailStyle} from "@/app/style/ProjectDetailStyle";
import ProjectDetailClient from "./ProjectDetailClient";

const projects = [
    { link: 'sild' },
    { link: 'BankX' },
    { link: 'seemple' },
    { link: 'haru' },
    { link: 'ThankyouMarket' },
    { link: 'liveTo' },
    { link: 'lxhausys' },
    { link: 'samsung' },
    { link: 'pickkoadmin' },
    { link: 'pickkokiosk' },
    { link: 'pickkoapp' },
    { link: 'caring' },
];

export function generateStaticParams() {
    return projects.map((project) => ({
        link: project.link
    }));
}

interface Props {
    params: Promise< { link: string }>;
}

export default async function ProjectDetail({ params }: Props) {
    const { link } = await params;
    const project = projects.find(p => p.link === link);

    if (!project) {
        return (
            <ProjectDetailStyle>
                <h1>프로젝트를 찾을 수 없습니다</h1>
                <p>요청하신 프로젝트({link})가 존재하지 않습니다.</p>
            </ProjectDetailStyle>
        );
    }

    return (
        <ProjectDetailStyle>
            <ProjectDetailClient link={link} />
        </ProjectDetailStyle>
    );
}