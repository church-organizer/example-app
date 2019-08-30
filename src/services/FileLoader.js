class FileLoader {
    static url = (process.env.API_URL || 'http://localhost:3001') + '/wiki/';


    static getPage(path = "") {
        console.log(this.url);
        if (path !== "") {
            path = "?page=" + path;
        }
        return fetch(this.url + "file/" + path).then(res => {
            return res.json().then(result => result.content);
        });
    }

    static getStructure() {
        return fetch(this.url + "structure/").then(res => {
            return res.json().then(result => result.structure);
        });
    }

    static search(content) {
        return fetch(this.url + "search?input=" + content).then(res => {
            return res.json().then(result => result);
        });
    }
}


export default FileLoader;
