import {AtSign, Calendar, GraduationCap, MapPin, UserRound} from "lucide-react";
import {AboutStyle} from "@/app/style/AboutStyle";

const About=() => {
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

    return(
        <AboutStyle>
            <div className='inner'>
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
            </div>
        </AboutStyle>
    )
}

export default About