export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface User {
backgroundImageUrl: any;
profileImageUrl: any;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
