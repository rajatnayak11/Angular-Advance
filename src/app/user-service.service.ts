import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUsers(){
    return [
      {
        userId: 1,
        userName: "User 1",
        userEmail: "user1@gmail.com",
        userDOB: new Date("Fri Dec 01 2011 01:11:11"),
        userAddress: "Mumbai, Maharashtra"
      },
      {
        userId: 2,
        userName: "User 2",
        userEmail: "user2@gmail.com",
        userDOB: new Date("Fri Dec 02 2012 02:22:22"),
        userAddress: "Chennai, Tamil Nadu"
      },
      {
        userId: 3,
        userName: "User 3",
        userEmail: "user3@gmail.com",
        userDOB: new Date("Fri Dec 03 2013 03:33:33"),
        userAddress: "Bangalore, Karnataka"
      },
      {
        userId: 4,
        userName: "User 4",
        userEmail: "user4@gmail.com",
        userDOB: new Date("Fri Dec 04 2014 04:44:44"),
        userAddress: "Bhopal, Madhya Pradesh"
      },
      {
        userId: 5,
        userName: "User 5",
        userEmail: "user5@gmail.com",
        userDOB: new Date("Fri Dec 05 2015 05:55:55"),
        userAddress: "Lucknow, Uttar Pradesh"
      }
    ]
  }
}
