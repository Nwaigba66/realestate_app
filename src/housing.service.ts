import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "/assets/WarmBedsHousing.jpeg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 1,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "CA",
      "photo": "/assets/Estate_pictures copy.jpeg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name": "Warm Beds Housing Support",
      "city": "Juneau",
      "state": "AK",
      "photo": "/assets/Inverlochy_House.jpeg",
      "availableUnits": 1,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 3,
      "name": "Homesteady Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "/assets/HomesteadyHousing.jpeg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 4,
      "name": "Happy Homes Group",
      "city": "Gary",
      "state": "IN",
      "photo": '/assets/HousePhoto.jpeg',
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Hopeful Apartment Group",
      "city": "Oakland",
      "state": "CA",
      "photo": "/assets/The_Wehmer_House.jpeg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 6,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "/assets/Image_Johnson_House.jpeg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Hopeful Housing Solutions",
      "city": "Oakland",
      "state": "CA",
      "photo": "/assets/HappyHomesGroup.jpeg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "/assets/HopefulApartmentGroup.jpeg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 9,
      "name": "Capital Safe Towns",
      "city": "Portland",
      "state": "OR",
      "photo": "/assets/House2.jpeg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
  ];

  constructor() { }

  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation |
  undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
