import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("You're in! Watch your inbox for deals.");
    setEmail("");
  };

  return (
    <section className="w-full px-6 mb-20">
      <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-10 md:p-14 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 mb-4">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Get drops & deals first
        </h2>
        <p className="text-sm font-light text-primary-foreground/80 mt-2 max-w-md mx-auto">
          Join 25,000+ gamers. New launches, restocks, and members-only offers —
          straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 bg-background text-foreground border-0 rounded-none placeholder:text-muted-foreground"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 px-6 rounded-none bg-background text-primary hover:bg-background/90"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-[11px] font-light text-primary-foreground/60 mt-3">
          By subscribing you agree to receive marketing emails. Unsubscribe any
          time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;