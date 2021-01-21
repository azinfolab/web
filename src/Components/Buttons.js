import {useHistory} from "react-router-dom";

export const LinkButton = (link = "/", text = "", disable = false) => {
    let history = useHistory();

    return (<button disabled={disable} onClick={() => link !== "/" ? history.push(link) : window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })}>{text}</button>);
}