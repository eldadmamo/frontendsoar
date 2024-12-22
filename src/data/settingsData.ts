import { NotificationPreference, SecuritySetting, UserProfile } from '../types/settings';

export const defaultUserProfile: UserProfile = {
  name: 'Charlene Reed',
  username: 'charlenereed',
  email: 'charlenereed@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop&auto=format',
  dateOfBirth: '1990-01-25',
  presentAddress: 'San Jose, California, USA',
  permanentAddress: 'San Jose, California, USA',
  city: 'San Jose',
  postalCode: '45962',
  country: 'USA',
};

export const notificationPreferences: NotificationPreference[] = [
  {
    id: 'email-notifications',
    title: 'Email Notifications',
    description: 'Receive email notifications about your account activity',
    enabled: true,
  },
  {
    id: 'push-notifications',
    title: 'Push Notifications',
    description: 'Receive push notifications about your account activity',
    enabled: true,
  },
  {
    id: 'sms-notifications',
    title: 'SMS Notifications',
    description: 'Receive SMS notifications about your account activity',
    enabled: false,
  },
];

export const securitySettings: SecuritySetting[] = [
  {
    id: 'two-factor',
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    enabled: false,
  },
  {
    id: 'biometric',
    title: 'Biometric Login',
    description: 'Use your fingerprint or face to login',
    enabled: true,
  },
  {
    id: 'login-alerts',
    title: 'Login Alerts',
    description: 'Get notified of any unauthorized login attempts',
    enabled: true,
  },
];