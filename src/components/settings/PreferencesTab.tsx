import { useState } from 'react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { notificationPreferences } from '../../data/settingsData';
import { toast } from 'sonner';

export default function PreferencesTab() {
  const [preferences, setPreferences] = useState(notificationPreferences);

  const handleToggle = (id: string) => {
    setPreferences(preferences.map(pref => 
      pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
    ));
    toast.success('Preference updated successfully');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {preferences.map((preference) => (
          <div key={preference.id} className="flex items-center justify-between space-x-4">
            <div>
              <Label htmlFor={preference.id} className="text-base">
                {preference.title}
              </Label>
              <p className="text-sm text-muted-foreground">
                {preference.description}
              </p>
            </div>
            <Switch
              id={preference.id}
              checked={preference.enabled}
              onCheckedChange={() => handleToggle(preference.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}