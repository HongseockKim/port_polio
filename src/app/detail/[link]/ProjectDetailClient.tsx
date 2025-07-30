'use client';
import { useRouter } from "next/navigation";
import { ProjectDetailClientStyle } from "@/app/style/ProjectDetailStyle";
import { ArrowLeft } from "lucide-react";
import { ProjectData, ProjectKey, PROJET_DATA } from "@/app/detail/data/PROJET_DATA";
import { Swiper, SwiperSlide } from "swiper/react";
import { SuspenseImage } from "@/app/lib/Utill";
import { Suspense, useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";

interface Props {
    link: string;
}

export default function ProjectDetailClient({ link }: Props) {
    const router = useRouter();
    const projectData: ProjectData | undefined = PROJET_DATA[link as ProjectKey];
    const [sanitizedDescription, setSanitizedDescription] = useState<string>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // 클라이언트에서만 DOMPurify 실행
        if (projectData?.description) {
            import('dompurify').then((DOMPurify) => {
                setSanitizedDescription(DOMPurify.default.sanitize(projectData.description));
            });
        }
    }, [projectData]);

    const handleBack = () => {
        router.back();
    };

    // 클라이언트 렌더링 완료 전까지는 로딩 표시
    if (!isClient) {
        return (
            <ProjectDetailClientStyle>
                <div className='project_detail_header'>
                    <button className='project_detail_back_button'>
                        <ArrowLeft />
                    </button>
                    <h1 className='project_name'>{link}</h1>
                </div>
                <div className='project_content'>
                    <p>로딩 중...</p>
                </div>
            </ProjectDetailClientStyle>
        );
    }

    return (
        <ProjectDetailClientStyle>
            <div className='project_detail_header'>
                <button
                    onClick={handleBack}
                    className='project_detail_back_button'
                >
                    <ArrowLeft />
                </button>
                <h1 className='project_name'>{link}</h1>
            </div>
            <div className='project_content'>
                {projectData ? (
                    <>
                        <div className='data'>
                            <Swiper
                                className='project_detaion_image_swiper'
                                effect={'cards'}
                                grabCursor={true}
                                cardsEffect={{
                                    rotate: true,
                                    perSlideRotate: 6,
                                    slideShadows: false,
                                    perSlideOffset: 20,
                                }}
                                modules={[EffectCards]}
                            >
                                {
                                    projectData.images.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} className='project_detaion_image_swiper_slide'>
                                                <Suspense fallback={'이미지 로딩 중...'}>
                                                    <SuspenseImage
                                                        src={item}
                                                        className='project_image'
                                                        alt={`Project image ${index + 1}`}
                                                    />
                                                </Suspense>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>
                        </div>
                        <div className='text_content_wrap'>
                            <div className='summary data'>
                                <h2 className='sub_title'>SUMMARY</h2>
                                <p>{projectData.summary}</p>
                                <ul className='summary_list'>
                                    {projectData.summaryList.map((item, index) => (
                                        <li className='summary_list_item' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='description data'>
                                <h2 className='sub_title'>DESCRIPTION</h2>
                                <p dangerouslySetInnerHTML={{
                                    __html: sanitizedDescription
                                }}></p>
                            </div>
                            <div className='technology data'>
                                <h2 className='sub_title'>TECHNOLOGY</h2>
                                <ul className='technology_list'>
                                    {projectData.technologyStack.map((tech, index) => (
                                        <li className='technology_item' key={index}>
                                            #{tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>해당 프로젝트에 대한 정보가 없습니다.</p>
                )}
            </div>
        </ProjectDetailClientStyle>
    );
}