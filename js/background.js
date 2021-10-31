//배경이미지 랜덤화
const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;
//prepend도 가능 => 가장 위에 오게 하는거
document.body.appendChild(bgImage); //가장 뒤에 오게하는거

bgImage.id = 'bgImage';
