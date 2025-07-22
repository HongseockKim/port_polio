'use client';
import {SkillStyle} from "@/app/style/SkillStyle";
import {Activity, Braces, Container, Database, FileCode, Hammer} from "lucide-react";

const Skill = ()=>{
    const skill ={
        language:{
            name: 'Language',
            icon: <Braces />,
            list:[
                {
                    name: 'JavaScript',
                    level: 'Advanced',
                    color: '#F2CF1D',
                },
                {
                    name: 'JAVA',
                    level: 'Beginners',
                    color: '#4A738C',
                    textColor: '#ffffff',
                },
                {
                    name: 'PHP',
                    level: 'Beginners',
                    color: '#6F77A6',
                    textColor: '#ffffff',
                },
            ]
        },
        frontend:{
            name: 'FrontEnd',
            icon:<FileCode />,
            list:[
                {
                    name: 'React.js',
                    color:'#79DCF2',
                },
                {
                    name: 'Next.js',
                    color:'#000000',
                    textColor: '#ffffff',
                },
                {
                    name: 'TypeScript',
                    color:'#116EBF',
                },
                {
                    name: 'Vue.js',
                    color:'#3B8C6E',
                    textColor: '#ffffff',
                },
                {
                    name: 'Electron',
                    color:'#A0EAF2',
                },
            ]
        },
        backend:{
            name: 'Backend',
            icon:<Database />,
            list:[
                {
                    name: 'Node.js',
                    color:'#84BF04',
                    textColor: '#ffffff',
                },
                {
                    name: 'Spring Boot',
                    color: '#6AA63F',
                    textColor: '#ffffff',
                },
                {
                    name: 'CodeIgniter',
                    color: '#F23005'
                },
            ],
            descript:`백엔드 기술 스택의 경우, 전문 백엔드 개발자 수준의 깊이 있는 지식은 아니지만<br/>프론트엔드 개발자로서 전체 개발 프로세스를 이해하고 효율적으로 협업하기 위해 학습했습니다.<br/>개발환경 구축, API 연동 및 수정, 데이터베이스 쿼리 작성과 최적화, ORM과 Query Builder 활용 등을 <br/>직접 경험하면서 클라이언트-서버 간의 데이터 흐름을 깊이 이해할 수 있게 되었고,<br/>이는 백엔드 개발자와의 원활한 소통과 더 나은 프론트엔드 아키텍처 설계에 큰 도움이 되고 있습니다.`
        },
        devops:{
            name: 'Devops',
            icon:<Container />,
            list:[
                {
                    name: 'AWS (EC2, S3)',
                    color: '#273240',
                    textColor: '#ffffff',
                },
                {
                    name: 'Jenkins',
                    color: '#D92B4B',
                    textColor: '#ffffff',
                },
                {
                    name: 'Jira',
                    color: '#D92B4B',
                    textColor: '#ffffff',
                },
                {
                    name: 'Bitbucket',
                    color: '#D92B4B',
                    textColor: '#ffffff',
                }
            ]
        },
        apmAndMonitoring:{
            name: 'Monitoring',
            icon:<Activity />,
            list:[
                {
                    name: 'Sentry',
                    color: '#533473',
                    textColor: '#ffffff',
                },
                {
                    name: 'Datadog',
                    color: '#602EA6',
                    textColor: '#ffffff',
                },
                {
                    name: 'WhaTap',
                    color: '#F24C27',
                    textColor: '#ffffff',
                }
            ]
        },
        otherSkill:{
            name: 'Other Skill',
            icon:<Hammer />,
            list:[
                {
                    name: '3D max',
                    color: '#533473',
                    textColor: '#ffffff',
                },
                {
                    name: 'blender',
                    color: '#ff7227',
                    textColor: '#ffffff',
                },
                {
                    name: 'Substance Painter',
                    color: '#F24C27',
                    textColor: '#ffffff',
                },
                {
                    name: 'twin motion',
                    color: '#000000',
                    textColor: '#ffffff',
                }
            ],
            imageList:['img/other2.jpg',  'img/other_1.jpg',  'img/other_3.jpg',  'img/other_4.jpg',  'img/other_5.png',  'img/other_6.png']
        }
    };
    const skillList = Object.values(skill);
    console.log('skillList',skillList)
    return (
        <SkillStyle>
            <div className='inner'>
                <h2 className='sect_title'>SKILL</h2>
                <ul className='skill_list'>
                    {
                        skillList.map((item, index) => {
                            if(item.name === 'Backend') return;
                            return(
                                <li className='skill_list_items' key={index}>
                                    <span className='skill_icon'>{item.icon}</span>
                                    <span className='skill_name'>{item.name}</span>
                                    <ul className='skill_sub_list'>
                                        {
                                            item.list.map((subItem, subIndex) => {
                                                return (
                                                    <li className='skill_sub_item' key={subIndex}>
                                                        {subItem.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </SkillStyle>
    );
}
export default Skill