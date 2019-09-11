const getData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    const decoded = window.atob(data.content);
    console.log(typeof decoded);
};
const data = getData("https://api.github.com/repos/okyanusatlas/create-test-app/contents/config.yaml");

