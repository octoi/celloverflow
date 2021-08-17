/*
Get random rick roll links from list
and rick roll user 

Expect unexpected rick rolls😜
*/


// may god help you with Youtube ads 
let rickRollLinks = [
  'https://bit.ly/3jZAA4G',
  'https://bit.ly/2VTrhLJ',
  'https://bit.ly/3yUScoA',
  'https://bit.ly/2UnEEmq',
  'https://bit.ly/3xUHfSH',
];

const getRandomRickRollLink = () => {
  const randomNum = Math.floor(Math.random() * rickRollLinks.length);
  return rickRollLinks[randomNum];
}

export default getRandomRickRollLink;