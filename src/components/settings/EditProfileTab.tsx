import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { defaultUserProfile } from '../../data/settingsData';
import { toast } from 'sonner';
import { Pen } from 'lucide-react';

export default function EditProfileTab() {
  const [profile, setProfile] = useState(defaultUserProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
            >
              <Pen className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 w-full">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Charlene Reed"
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="charlenereed"
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="charlenereed@gmail.com"
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="***********"
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                placeholder="1990-01-25"
                onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="present-address">Present Address</Label>
              <Input
                id="present-address"
                placeholder="San Jose, California, USA"
                onChange={(e) => setProfile({ ...profile, presentAddress: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="permanent-address">Permanent Address</Label>
              <Input
                id="permanent-address"
                placeholder="San Jose, California, USA"
                onChange={(e) => setProfile({ ...profile, permanentAddress: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="San Jose"
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postal-code">Postal Code</Label>
              <Input
                id="postal-code"
                placeholder="45962"
                onChange={(e) => setProfile({ ...profile, postalCode: e.target.value })}
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="USA"
                onChange={(e) => setProfile({ ...profile, country: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end rounded-full">
        <Button type="submit" className='bg-black text-white rounded-lg'>Save Changes</Button>
      </div>
    </form>
  );
}