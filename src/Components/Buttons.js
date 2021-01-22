import {useHistory} from "react-router-dom";

export const LinkButton = ({style, scrollUpThePageLink, link, text = "", disable = false}) => {
    let history = useHistory();

    return (
        <button className={style} disabled={disable}
                onClick={() => link !== scrollUpThePageLink ? history.push(link) : window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })}>{text}</button>);
}