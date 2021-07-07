const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

//배경화면으로 사용할 사진들 배열로 만듬

//랜덤으로 나올 이미지 랜덤으로 출력
const chosenImage = images[Math.floor(Math.random() * images.length)];

//img 태그를 만들어준다
const bgImage = document.createElement("img");

//body 안에 생성 
document.body.appendChild(bgImage);

//img 태그 뒤에 이미지 출력할 링크
bgImage.src = `img/${chosenImage}`;

