import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card } from '../components/ui/card';
import EditProfileTab from '../components/settings/EditProfileTab';
import PreferencesTab from '../components/settings/PreferencesTab';
import SecurityTab from '../components/settings/SecurityTab';
import { User, Mail, Lock } from 'lucide-react';

export default function Settings() {
  return (
    <div className="w-full ">
      <Card className="p-4 md:p-6">
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4 hidden md:block" />
              Edit Profile
            </TabsTrigger>
            <TabsTrigger value="preferences" className="gap-2">
              <Mail className="h-4 w-4 hidden md:block" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Lock className="h-4 w-4 hidden md:block" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <EditProfileTab />
          </TabsContent>

          <TabsContent value="preferences">
            <PreferencesTab />
          </TabsContent>

          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}