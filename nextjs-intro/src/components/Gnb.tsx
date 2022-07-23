import {Menu} from "semantic-ui-react";
import {useRouter} from "next/router";

export default function Gnb() {
    const router = useRouter();
    let activeName: string;
    if (router.pathname === "/") {
        activeName = 'home';
    }else {
        activeName = 'about';
    }
    const onClickGnB = (e, data) => {
        if (data.name === 'home') {
            router.push('/');
        }else{
            router.push('/about')
        }
    };
    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeName === 'home'}
                onClick={onClickGnB}
            />
            <Menu.Item
                name='about'
                active={activeName === 'about'}
                onClick={onClickGnB}
            />
        </Menu>
    );
};