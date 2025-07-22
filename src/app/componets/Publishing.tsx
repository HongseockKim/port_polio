import {PublishingStyle} from "@/app/style/PublishingStyle";
import {Suspense} from "react";
import {SuspenseImage} from "@/app/lib/Utill";

const Publishing = () => {
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

    return(
        <PublishingStyle>
            <div className='inner'>
                <h2 className='sect_title'>Publishing</h2>
                <ul className='publishing_list'>
                    {
                        publishingItem.map((item, index) => (
                            <li className='publishing_item' key={index}>
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
            </div>
        </PublishingStyle>
    )
}
export default Publishing