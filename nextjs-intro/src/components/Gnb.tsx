import {Menu, MenuItemProps} from "semantic-ui-react";
import {useRouter} from "next/router";
import * as React from "react";


export default function Gnb() {
    const router = useRouter();
    let activeName: string;
    if (router.pathname === "/") {
        activeName = 'home';
    } else {
        activeName = 'about';
    }
    const onClickGnB = (event:React.MouseEvent<HTMLAnchorElement>, data:MenuItemProps) => {
        switch (data.name) {
            case "home":
                router.push('/');
                break;
            case "about":
                router.push('/about');
                break;
            case "contact us":
                router.push('/contact-us');
                break;
            default:
                router.push('/')
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
            <Menu.Item
                name='contact us'
                active={activeName === 'contact us'}
                onClick={onClickGnB}
            />
        </Menu>
    );
};