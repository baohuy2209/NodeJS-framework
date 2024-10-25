import { Separator } from "@/components/ui/separator";
import NotificationForm from "@/components/component_forms/notifications/notifications-form";
const Notification = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications
        </p>
      </div>
      <Separator />
      <NotificationForm />
    </div>
  );
};

export default Notification;
