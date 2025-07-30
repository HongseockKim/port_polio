import {AtSign, Calendar, GraduationCap, MapPin, UserRound} from "lucide-react";
import {AboutStyle} from "@/app/style/AboutStyle";
import useUiStore from "@/app/store/useUiStore";
import {useEffect} from "react";
import { motion } from "motion/react"

const About=() => {
    const { tabIndex } = useUiStore();
    const aboutMe = [
        {
            text:'NickName',
            icon: <UserRound />,
            value: 'RedStone'
        },
        {
            text:'BirthDay',
            icon: <Calendar />,
            value: '92.06.10'
        },
        {
            text:'Address',
            icon: <MapPin />,
            value: '서울특별시 광진구'
        },
        {
            text:'E-mail',
            icon: <AtSign />,
            value: 'gusduswk610@gmail.com'
        },
        {
            text:'Education',
            icon: <GraduationCap />,
            value: '제주관광대학교 ( 메카트로닉스 )'
        },
    ];

    useEffect(() => {

    }, [tabIndex]);

    return(
        <AboutStyle>
            <motion.div className='inner'
                        initial={{ scale: 0 }}
                        animate={tabIndex === 0 ? { scale: 1 } : { scale: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "backOut",
                            scale: {
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }
                        }}

            >
                <h2 className='sect_title'>ABOUT</h2>
                <ul className='about_list'>
                    {
                        aboutMe.map((item, index) => (
                            <li className='about_item' key={index}>
                                <span className='about_icon'>{item.icon}</span>
                                <span className='about_text'>{item.text}</span>:
                                <span className='about_value'>{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
            </motion.div>
        </AboutStyle>
    )
}

export default About