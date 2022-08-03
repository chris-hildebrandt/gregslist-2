import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = []

    /** @type {import('./Models/House').House[]} */

  houses = []
    // new House({state: "CA", city: "Bikini Bottom", year: 1990, img: "https://cdn.spongebobwiki.org/thumb/3/32/Squidward%27s_house_Scavenger_Pants.png/1200px-Squidward%27s_house_Scavenger_Pants.png", price: 5, description: "A peaceful paradise, no need to schedule a visit... Buy it now!"}),
    // new House({state:"MA?", city:"Bikini Bottom", year:2000, img:"https://pbs.twimg.com/media/E0Ki7TvVkAA-Dy8.jpg", price:500000, description:"It's not just a stone! it's a ROCK!"}),
    // new House({state:"UT", city:"hyrum", year: 1905, img:"https://media.istockphoto.com/photos/ruined-shed-picture-id538509975?k=20&m=538509975&s=612x612&w=0&h=Gm1AN2NmeBqhAwhaDqGUH2MRUHYieI7F0C6yEcZD8vI=", price:400000, description: "this beautiful home is a historical landmark offering gorgeous views of scenic Hyrum UT"}),
  

  // jobs = [
  //   new Job({company:"Shady Dealings & Sons Attorneys at Law", start: "07/27/2022", salary: 100000, rate: "Bi-Weekly", img:"https://slm-assets.secondlife.com/assets/10725048/view_large/Devil.jpg?1417868056", description:"", title:"slave"})
  // ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
