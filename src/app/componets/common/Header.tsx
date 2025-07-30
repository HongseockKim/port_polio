import {HeaderStyle} from "@/app/style/HeaderStyle";
import useUiStore from "@/app/store/useUiStore";


export default function Header() {
    const headerItemList =[
        {
            title: 'About',
            link: '#about'
        },
        {
            title: 'Skill',
            link: '#skill'
        },
        {
            title: 'Publishing',
            link: '#Publishing'
        },
        {
            title: 'Project',
            link: '#project'
        }
    ];
    const {tabIndex} = useUiStore();

    const handleMenuClick = (index: number) => {
        useUiStore.setState({tabIndex: index});
    }

  return (
    <HeaderStyle className={'header'}>
      <h1 className='header_title'>FRONT DEV</h1>
        <ul className='header__menu'>
            {
                headerItemList.map((item, index) => (
                    <li className={`header_item ${tabIndex === index ? 'selected' : ''}`} key={index} onClick={() => handleMenuClick(index)}>
                        {item.title}
                    </li>))
            }
        </ul>
    </HeaderStyle>
  );
}