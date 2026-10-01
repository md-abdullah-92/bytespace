import { LoginCard } from "@/components/auth/LoginCard";
import { HeroPanel } from "@/components/auth/HeroPanel";
import { AuthLogo } from "@/components/auth/AuthLogo";

export default function LoginPage() {
  return (
    <main className="bg-grid min-h-screen overflow-hidden bg-brand">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 pb-10 pt-[35px] xl:px-0">
        <AuthLogo />
        <div className="mt-10 grid flex-1 items-start xl:mt-[54px] xl:grid-cols-[1fr_579px]">
          <HeroPanel
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
            className="hidden xl:block"
          />
          <LoginCard className="mx-auto xl:mx-0" />
        </div>
      </div>
    </main>
  );
}