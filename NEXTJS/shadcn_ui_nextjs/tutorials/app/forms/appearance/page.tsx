import { Separator } from "@/components/ui/separator";
import AppearanceForm from "@/components/component_forms/appearance/appearance-form";
export default function SettingAppearancePage() {
  return (
    <div>
      <div>
        <h3>Appearance</h3>
        <p>
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}
