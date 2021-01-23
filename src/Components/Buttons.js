import {useHistory} from "react-router-dom";

export const LinkButton = ({style, scrollUpPageLink, link, text = "", disable = false}) => {
    let history = useHistory();

    return (
        <button className={style} disabled={disable}
                onClick={() => link !== scrollUpPageLink ? history.push(link) : window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })}>{text}</button>);
}