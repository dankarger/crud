import axios from "axios";

// const axoisApi = axios.create({ baseURL: 'https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/', });
const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/users'
//
// const DATA= async( )=>{
//     const data = await axios.get(API )
//
//     return  data
//     // this.setState({usersList:data.data},()=>console.log('d',data))
// }

 const getUserListFromApi= async ()=>{
    const data = await axios.get(API ) ;
    //   const data=[{id:1,name:'sssoss',image:'some_url',cat:'fdfdfdf'},{id:2,name:'ssffsoss',image:'some_url2',cat:'cat_url2'}]
    //  const data = DATA
    // console.log(data)
    // this.setState({usersList:data.data},()=>console.log('d',data))
     return data.data
}

const DATA =async()=>  await getUserListFromApi()

export default class Api {
    static async getIds() {
        return DATA.map(item => item.id);
    }

    static getUser(id) {
        return DATA.find(item => item.id === id);
    }

    static async getListUsers() {
        console.log(DATA)
        return DATA;
    }

    static addUser(user) {
        DATA.push(user);
    }

    static updateUser(user) {
        const index = DATA.findIndex(x => x.id === user.id);
        if (index === -1) {
            throw new Error("Item not found with id=" + user.id)
        }
        DATA[index] = user;
    }

    static deleteItem(id) {
        const index = DATA.findIndex(x => x.id === id);
        if (index === -1) {
            throw new Error("Item not found with id=" + id)
        }
        DATA.splice(index, 1);
    }
}

//
// const DATA = [
//     {
//         "createdAt": "2021-12-21T21:26:35.860Z",
//         "name": "Jacqueline Lang",
//         "avatar": "https://cdn.fakercloud.com/avatars/ruehldesign_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "1"
//     },
//     {
//         "createdAt": "2021-12-21T19:49:49.825Z",
//         "name": "Marco Gulgowski",
//         "avatar": "https://cdn.fakercloud.com/avatars/desastrozo_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "2"
//     },
//     {
//         "createdAt": "2021-12-22T00:51:12.261Z",
//         "name": "Greg Stanton PhD",
//         "avatar": "https://cdn.fakercloud.com/avatars/panghal0_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "3"
//     },
//     {
//         "createdAt": "2021-12-21T09:54:51.903Z",
//         "name": "Charlotte Walsh IV",
//         "avatar": "https://cdn.fakercloud.com/avatars/anoff_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "4"
//     },
//     {
//         "createdAt": "2021-12-21T11:00:54.424Z",
//         "name": "Miss Yolanda Conn",
//         "avatar": "https://cdn.fakercloud.com/avatars/solid_color_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "5"
//     },
//     {
//         "createdAt": "2021-12-21T14:55:17.676Z",
//         "name": "Arturo Beier",
//         "avatar": "https://cdn.fakercloud.com/avatars/mekal_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "6"
//     },
//     {
//         "createdAt": "2021-12-22T03:45:36.303Z",
//         "name": "Timothy Gaylord",
//         "avatar": "https://cdn.fakercloud.com/avatars/okseanjay_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "7"
//     },
//     {
//         "createdAt": "2021-12-22T09:50:50.700Z",
//         "name": "Ben Herzog",
//         "avatar": "https://cdn.fakercloud.com/avatars/samgrover_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "8"
//     },
//     {
//         "createdAt": "2021-12-22T06:11:13.315Z",
//         "name": "Johanna Balistreri",
//         "avatar": "https://cdn.fakercloud.com/avatars/chaabane_wail_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "9"
//     },
//     {
//         "createdAt": "2021-12-21T20:31:53.923Z",
//         "name": "Geneva Rolfson",
//         "avatar": "https://cdn.fakercloud.com/avatars/jcubic_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "10"
//     },
//     {
//         "createdAt": "2021-12-22T07:37:59.667Z",
//         "name": "Preston Macejkovic",
//         "avatar": "https://cdn.fakercloud.com/avatars/markwienands_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "11"
//     },
//     {
//         "createdAt": "2021-12-22T09:07:21.496Z",
//         "name": "Virginia Beier",
//         "avatar": "https://cdn.fakercloud.com/avatars/adamnac_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "12"
//     },
//     {
//         "createdAt": "2021-12-21T16:49:33.644Z",
//         "name": "Angela Homenick",
//         "avatar": "https://cdn.fakercloud.com/avatars/petar_prog_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "13"
//     },
//     {
//         "createdAt": "2021-12-21T19:39:03.471Z",
//         "name": "Vickie Toy IV",
//         "avatar": "https://cdn.fakercloud.com/avatars/kolage_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "14"
//     },
//     {
//         "createdAt": "2021-12-22T03:26:11.693Z",
//         "name": "Myrtle Rice",
//         "avatar": "https://cdn.fakercloud.com/avatars/vanchesz_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "15"
//     },
//     {
//         "createdAt": "2021-12-22T04:59:03.528Z",
//         "name": "Preston Cronin",
//         "avatar": "https://cdn.fakercloud.com/avatars/cadikkara_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "16"
//     },
//     {
//         "createdAt": "2021-12-22T00:35:28.942Z",
//         "name": "Johnnie Reichel",
//         "avatar": "https://cdn.fakercloud.com/avatars/1markiz_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "17"
//     },
//     {
//         "createdAt": "2021-12-22T06:57:11.090Z",
//         "name": "Robin Rosenbaum",
//         "avatar": "https://cdn.fakercloud.com/avatars/de_ascanio_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "18"
//     },
//     {
//         "createdAt": "2021-12-22T01:02:47.549Z",
//         "name": "Shannon Waters",
//         "avatar": "https://cdn.fakercloud.com/avatars/svenlen_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "19"
//     },
//     {
//         "createdAt": "2021-12-21T14:23:43.646Z",
//         "name": "Dennis Langosh",
//         "avatar": "https://cdn.fakercloud.com/avatars/santi_urso_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "20"
//     },
//     {
//         "createdAt": "2021-12-21T23:32:25.591Z",
//         "name": "Alberto DuBuque",
//         "avatar": "https://cdn.fakercloud.com/avatars/hermanobrother_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "21"
//     },
//     {
//         "createdAt": "2021-12-21T19:05:16.863Z",
//         "name": "Blanca Kuhlman",
//         "avatar": "https://cdn.fakercloud.com/avatars/skkirilov_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "22"
//     },
//     {
//         "createdAt": "2021-12-21T10:38:46.671Z",
//         "name": "Shelley Gerhold",
//         "avatar": "https://cdn.fakercloud.com/avatars/leeiio_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "23"
//     },
//     {
//         "createdAt": "2021-12-22T09:20:10.365Z",
//         "name": "Gilberto Funk III",
//         "avatar": "https://cdn.fakercloud.com/avatars/dshster_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "24"
//     },
//     {
//         "createdAt": "2021-12-22T09:13:27.093Z",
//         "name": "Mary Orn",
//         "avatar": "https://cdn.fakercloud.com/avatars/balintorosz_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "25"
//     },
//     {
//         "createdAt": "2021-12-22T03:12:27.892Z",
//         "name": "Nina Keebler",
//         "avatar": "https://cdn.fakercloud.com/avatars/simobenso_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "26"
//     },
//     {
//         "createdAt": "2021-12-21T16:27:45.535Z",
//         "name": "Walter Jast",
//         "avatar": "https://cdn.fakercloud.com/avatars/michaelmartinho_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "27"
//     },
//     {
//         "createdAt": "2021-12-21T21:50:08.722Z",
//         "name": "Carrie Dibbert PhD",
//         "avatar": "https://cdn.fakercloud.com/avatars/txcx_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "28"
//     },
//     {
//         "createdAt": "2021-12-21T11:39:01.947Z",
//         "name": "Leticia Rath",
//         "avatar": "https://cdn.fakercloud.com/avatars/ipavelek_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "29"
//     },
//     {
//         "createdAt": "2021-12-21T18:02:43.462Z",
//         "name": "Marcia Kling",
//         "avatar": "https://cdn.fakercloud.com/avatars/mateaodviteza_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "30"
//     },
//     {
//         "createdAt": "2021-12-22T06:50:24.472Z",
//         "name": "Chester Wolf",
//         "avatar": "https://cdn.fakercloud.com/avatars/joshmedeski_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "31"
//     },
//     {
//         "createdAt": "2021-12-21T23:52:19.725Z",
//         "name": "Rosemary Hermiston",
//         "avatar": "https://cdn.fakercloud.com/avatars/Stievius_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "32"
//     },
//     {
//         "createdAt": "2021-12-21T10:30:14.409Z",
//         "name": "Terrance Littel",
//         "avatar": "https://cdn.fakercloud.com/avatars/iduuck_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "33"
//     },
//     {
//         "createdAt": "2021-12-21T20:15:26.779Z",
//         "name": "Willis Dietrich",
//         "avatar": "https://cdn.fakercloud.com/avatars/kevka_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "34"
//     },
//     {
//         "createdAt": "2021-12-21T12:37:35.325Z",
//         "name": "Kristie Auer",
//         "avatar": "https://cdn.fakercloud.com/avatars/puzik_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "35"
//     },
//     {
//         "createdAt": "2021-12-22T02:37:05.293Z",
//         "name": "Dean Kuphal",
//         "avatar": "https://cdn.fakercloud.com/avatars/dnezkumar_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "36"
//     },
//     {
//         "createdAt": "2021-12-22T01:59:02.936Z",
//         "name": "Ms. Violet Barrows",
//         "avatar": "https://cdn.fakercloud.com/avatars/adrienths_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "37"
//     },
//     {
//         "createdAt": "2021-12-21T21:15:46.992Z",
//         "name": "Anne Mohr",
//         "avatar": "https://cdn.fakercloud.com/avatars/tbakdesigns_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "38"
//     },
//     {
//         "createdAt": "2021-12-21T13:03:15.615Z",
//         "name": "Kim Kilback",
//         "avatar": "https://cdn.fakercloud.com/avatars/antonyzotov_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "39"
//     },
//     {
//         "createdAt": "2021-12-21T21:46:15.081Z",
//         "name": "Carla Hintz",
//         "avatar": "https://cdn.fakercloud.com/avatars/quailandquasar_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "40"
//     },
//     {
//         "createdAt": "2021-12-21T15:03:29.833Z",
//         "name": "Bernice Brown III",
//         "avatar": "https://cdn.fakercloud.com/avatars/aka_james_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "41"
//     },
//     {
//         "createdAt": "2021-12-21T20:58:36.427Z",
//         "name": "Preston Hegmann II",
//         "avatar": "https://cdn.fakercloud.com/avatars/leonfedotov_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "42"
//     },
//     {
//         "createdAt": "2021-12-22T07:46:03.299Z",
//         "name": "Sonja Kihn",
//         "avatar": "https://cdn.fakercloud.com/avatars/sweetdelisa_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "43"
//     },
//     {
//         "createdAt": "2021-12-21T22:18:59.459Z",
//         "name": "Dale Fritsch",
//         "avatar": "https://cdn.fakercloud.com/avatars/incubo82_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "44"
//     },
//     {
//         "createdAt": "2021-12-21T16:24:14.099Z",
//         "name": "Jonathan Jakubowski",
//         "avatar": "https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "45"
//     },
//     {
//         "createdAt": "2021-12-21T23:07:08.054Z",
//         "name": "Sylvester Larkin",
//         "avatar": "https://cdn.fakercloud.com/avatars/enjoythetau_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "46"
//     },
//     {
//         "createdAt": "2021-12-21T15:53:57.585Z",
//         "name": "Calvin Christiansen",
//         "avatar": "https://cdn.fakercloud.com/avatars/eugeneeweb_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "47"
//     },
//     {
//         "createdAt": "2021-12-21T22:30:12.942Z",
//         "name": "Vernon Hermann",
//         "avatar": "https://cdn.fakercloud.com/avatars/doronmalki_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "48"
//     },
//     {
//         "createdAt": "2021-12-21T18:22:20.127Z",
//         "name": "Noah Lesch",
//         "avatar": "https://cdn.fakercloud.com/avatars/dansowter_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "49"
//     },
//     {
//         "createdAt": "2021-12-21T21:34:56.675Z",
//         "name": "Ms. Abel Torp",
//         "avatar": "https://cdn.fakercloud.com/avatars/jackiesaik_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "50"
//     },
//     {
//         "createdAt": "2021-12-21T13:31:56.820Z",
//         "name": "Amanda Rohan III",
//         "avatar": "https://cdn.fakercloud.com/avatars/nicolasfolliot_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "51"
//     },
//     {
//         "createdAt": "2021-12-21T14:19:07.476Z",
//         "name": "Rudolph Torp",
//         "avatar": "https://cdn.fakercloud.com/avatars/d_nny_m_cher_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "52"
//     },
//     {
//         "createdAt": "2021-12-22T01:23:34.913Z",
//         "name": "Marion West V",
//         "avatar": "https://cdn.fakercloud.com/avatars/xamorep_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "53"
//     },
//     {
//         "createdAt": "2021-12-21T23:03:05.643Z",
//         "name": "Harriet Pollich",
//         "avatar": "https://cdn.fakercloud.com/avatars/arkokoley_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "54"
//     },
//     {
//         "createdAt": "2021-12-22T04:53:14.694Z",
//         "name": "Dr. Milton Schulist",
//         "avatar": "https://cdn.fakercloud.com/avatars/carbontwelve_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "55"
//     },
//     {
//         "createdAt": "2021-12-21T23:33:21.811Z",
//         "name": "Pam Satterfield",
//         "avatar": "https://cdn.fakercloud.com/avatars/mohanrohith_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "56"
//     },
//     {
//         "createdAt": "2021-12-21T12:26:16.726Z",
//         "name": "Irma Cruickshank",
//         "avatar": "https://cdn.fakercloud.com/avatars/johnriordan_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "57"
//     },
//     {
//         "createdAt": "2021-12-21T19:11:53.706Z",
//         "name": "Armando McGlynn",
//         "avatar": "https://cdn.fakercloud.com/avatars/mr_shiznit_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "58"
//     },
//     {
//         "createdAt": "2021-12-21T18:48:30.257Z",
//         "name": "Jacquelyn Harber",
//         "avatar": "https://cdn.fakercloud.com/avatars/devinhalladay_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "59"
//     },
//     {
//         "createdAt": "2021-12-21T22:46:09.145Z",
//         "name": "Genevieve Lockman",
//         "avatar": "https://cdn.fakercloud.com/avatars/alek_djuric_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "60"
//     },
//     {
//         "createdAt": "2021-12-22T04:30:56.869Z",
//         "name": "Mrs. Owen Glover",
//         "avatar": "https://cdn.fakercloud.com/avatars/laurengray_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "61"
//     },
//     {
//         "createdAt": "2021-12-21T10:36:56.200Z",
//         "name": "Abraham Quigley",
//         "avatar": "https://cdn.fakercloud.com/avatars/thiagovernetti_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "62"
//     },
//     {
//         "createdAt": "2021-12-21T15:46:49.410Z",
//         "name": "Ramona Morar DDS",
//         "avatar": "https://cdn.fakercloud.com/avatars/shinze_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "63"
//     },
//     {
//         "createdAt": "2021-12-21T18:22:37.127Z",
//         "name": "Eloise Johns",
//         "avatar": "https://cdn.fakercloud.com/avatars/terryxlife_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "64"
//     },
//     {
//         "createdAt": "2021-12-21T21:43:25.788Z",
//         "name": "Derek Price",
//         "avatar": "https://cdn.fakercloud.com/avatars/jarjan_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "65"
//     },
//     {
//         "createdAt": "2021-12-21T13:21:49.892Z",
//         "name": "Jerald Walter",
//         "avatar": "https://cdn.fakercloud.com/avatars/juanmamartinez_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "66"
//     },
//     {
//         "createdAt": "2021-12-22T08:26:53.604Z",
//         "name": "Jan Schaefer",
//         "avatar": "https://cdn.fakercloud.com/avatars/amanruzaini_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "67"
//     },
//     {
//         "createdAt": "2021-12-22T00:38:09.191Z",
//         "name": "Jessie Torphy",
//         "avatar": "https://cdn.fakercloud.com/avatars/benefritz_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "68"
//     },
//     {
//         "createdAt": "2021-12-21T13:07:31.739Z",
//         "name": "Franklin Rodriguez",
//         "avatar": "https://cdn.fakercloud.com/avatars/adhiardana_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "69"
//     },
//     {
//         "createdAt": "2021-12-21T21:18:42.123Z",
//         "name": "Ernestine Turcotte",
//         "avatar": "https://cdn.fakercloud.com/avatars/swooshycueb_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "70"
//     },
//     {
//         "createdAt": "2021-12-21T12:38:57.097Z",
//         "name": "Miss Isabel Parisian",
//         "avatar": "https://cdn.fakercloud.com/avatars/baliomega_128.jpg",
//         "cat": "http://placeimg.com/640/480/cats",
//         "id": "71"
//     }
// ]
//  export default DATA