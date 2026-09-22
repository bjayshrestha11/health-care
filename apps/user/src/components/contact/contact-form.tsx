import { contactIntro } from "@/content/contact";
import { mapEmbed, siteConfig } from "@/content/site";
import { Button } from "@health-care/ui/components/button";
import { Card, CardContent } from "@health-care/ui/components/card";
import { Input } from "@health-care/ui/components/input";
import { Label } from "@health-care/ui/components/label";
import { Textarea } from "@health-care/ui/components/textarea";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <div className="flex flex-col justify-center rounded-xl border border-primary/15 bg-primary px-6 py-8 text-primary-foreground sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
          Let&apos;s connect
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          We&apos;re here to help.
        </h2>
        <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
          Reach out any time. Our team is available days, nights, weekends, and
          holidays.
        </p>
        <div className="mt-8 space-y-5 text-sm">
          <a
            href={contactIntro.tollFreePhoneHref}
            className="flex items-start gap-3 transition-opacity hover:opacity-80"
          >
            <Phone className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-xs text-primary-foreground/65">
                Phone
              </span>
              <span className="font-medium">{contactIntro.tollFreePhone}</span>
            </span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-start gap-3 transition-opacity hover:opacity-80"
          >
            <Mail className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-xs text-primary-foreground/65">
                Email
              </span>
              <span className="break-all font-medium">{siteConfig.email}</span>
            </span>
          </a>
          <a
            href={mapEmbed.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 transition-opacity hover:opacity-80"
          >
            <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-xs text-primary-foreground/65">
                Office
              </span>
              <span className="font-medium leading-6">
                {siteConfig.address}
              </span>
            </span>
          </a>
        </div>
      </div>

      <Card className="w-full shadow-sm">
        <CardContent className="p-6 sm:p-8">
          {submitted ? (
            <div
              role="status"
              className="flex min-h-96 flex-col items-center justify-center rounded-lg border border-primary/20 bg-primary/5 px-6 py-10 text-center"
            >
              <CheckCircle2
                className="size-11 text-primary"
                aria-hidden="true"
              />
              <p className="mt-4 text-xl font-semibold">Message received</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                Thanks for reaching out. A member of our team will be in touch
                soon.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Complete the form and our team will get back to you.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Your first name"
                    className="h-11 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Your last name"
                    className="h-11 bg-background"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="h-11 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="(xxx) xxx-xxxx"
                    className="h-11 bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us a little about what you need."
                  rows={6}
                  className="min-h-36 resize-y bg-background"
                />
              </div>
              <Button
                type="submit"
                className="h-11 w-full sm:w-auto sm:min-w-44"
              >
                Send message
                <Send className="size-4" aria-hidden="true" />
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
