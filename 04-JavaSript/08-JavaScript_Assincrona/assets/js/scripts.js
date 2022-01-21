const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async() => {
    try{
        const data = await fetch(BASE-URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e){
        console.log(e.message);
    }
};

const loadImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();