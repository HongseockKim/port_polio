import {PublishingStyle} from "@/app/style/PublishingStyle";
import {Suspense} from "react";
import {SuspenseImage} from "@/app/lib/Utill";
import { motion } from "motion/react";
import useUiStore from "@/app/store/useUiStore";

const Publishing = () => {
    const { tabIndex } = useUiStore();
    const publishingItem = [
        {
            title:'육아정책연구소',
            img:'img/children.png',
            work:'front-dev',
            url:'https://hongseockkim.github.io/portpolio/page/03/'
        },
        {
            title:'대림 코퍼레이션',
            img:'img/daelim.png',
            work:'front-dev',
            url:'https://hongseockkim.github.io/portpolio/page/02/'
        },
        {
            title:'SMEG',
            img:'img/smeg.png',
            work:'front-dev',
            url:'https://hongseockkim.github.io/portpolio/page/01/'
        },
        {
            title:'CANVAS',
            img:'img/canvas.png',
            work:'front-dev',
            url:'https://hongseockkim.github.io/portpolio/page/06/'
        },
    ];

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    }

    return(
        <PublishingStyle>
            <motion.div className='inner'
                        initial={{ scale: 0 }}
                        animate={tabIndex === 2 ? { scale: 1 } : { scale: 0 }}
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
                <h2 className='sect_title'>Publishing</h2>
                <ul className='publishing_list'>
                    {
                        publishingItem.map((item, index) => (
                            <li className='publishing_item' key={index} onClick={() => handleClick(item.url)}>
                                <div className='image_con'>
                                    <Suspense fallback={'이미지 로딩중...'}>
                                        <SuspenseImage src={item.img} alt={item.title}/>
                                    </Suspense>
                                </div>
                                <span className='publishing_title'>{item.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </motion.div>
        </PublishingStyle>
    )
}
export default Publishing