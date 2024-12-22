export interface UserProfile {
    name: string;
    username: string;
    email: string;
    avatar: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
  }
  
  export interface NotificationPreference {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
  }
  
  export interface SecuritySetting {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
  }