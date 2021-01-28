const serverURL = "http://localhost:3000";

export const request = (type, endpoint, data = "") => {
    const http = new XMLHttpRequest();

    http.open(type, serverURL + endpoint);
    http.send(data);

    return http.onreadystatechange = () => {
        if (this.readyState === 4 && this.status === 200) {
            return this.responseText;
        }
    }
}