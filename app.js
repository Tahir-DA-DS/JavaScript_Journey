const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  myMusic.push({"artist":"Fireboy",
                "title": "Bandana",
                "release_year":2022,
                "formats":["CD", "MP4"]
});

console.log(myMusic);



const myArray = [];

// Only change code below this line
for(let i=9; i>0; i-=2){
  myArray.push(i);
  console.log(i);
}

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    // console.log(arr[i]);
    // console.log(arr[j].length);
  }
}

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

for(let i=0; i<contacts.length; i++){
    console.log(contacts[i].firstName);
  }
  

let check;
function checkObj(obj, checkProp) {
    // Only change code below this line
    check=obj.hasOwnProperty("checkProp")
    console.log(check);
    // Only change code above this line
  }
checkObj();

let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  // Only change code above this line
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
}
if(count>0){
    return count + " Bet";
}else{
    return count + " Hold";
}

}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc('K'));

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

function getUsersGreaterThanOrEqualToFifty(users){
  let usersGreaterThanOrEqualToFifty = 0;
  for(let user in users){
    if(users[user].points >= 50) usersGreaterThanOrEqualToFifty++;
  }
  return usersGreaterThanOrEqualToFifty;
}
console.log('Ans 2');
// console.log(`Users greater than or equal to fifty: ${getUsersGreaterThanOrEqualToFifty(users)}`);
const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

let newUser=   {
    _id: '',
    username: 'Tahir',
    email: '',
    password: '',
    createdAt:'',
    isLoggedIn:''
}

const signUp=(newUser)=>{
    let innerUser=Object.entries(users1);
    
for(const [name, value] of innerUser){
        if((value['email']===newUser.email || value['username']===newUser.username)){
         return 'user already exist'
        }
        }
        return users1.push(newUser)
        }

        
console.log(signUp(newUser));
console.log(users1)

const signIn=()=>{
    let innerUser=Object.entries(users1);
    let userName = prompt("enter user name");
    let passWord = prompt("enter password");
    for(const [name, value] of innerUser){
        if((value['password']===passWord && value['username']===userName)){
            return 'Sign in successful'

    }
}
    return 'sign up here'
}
console.log(signIn());


const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  
const likeProduct=()=>{
  let d= products.length;
  for(let i=0; i<d; i++){
    if(products[i].likes===[]){
        return products[i].likes.push('fg12cy');
    }else{
        return products[i].likes.pop()
    }
    // console.log(products[i].likes==='')
  }
}
likeProduct();
console.log(products);
const s = [5, 6, 7]
// s = [1, 2, 3]
s[2]=45
console.log(s);