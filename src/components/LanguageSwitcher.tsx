
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LanguageSwitcher = () => {
  const { toast } = useToast();

  const handleLanguageSwitch = () => {
    toast({
      title: "English Version",
      description: "English translation coming soon! 🇬🇧",
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLanguageSwitch}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
      title="Switch to English"
    >
      <span className="text-lg">🇬🇧</span>
    </Button>
  );
};

export default LanguageSwitcher;
