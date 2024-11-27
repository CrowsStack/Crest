'use client';

import { useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Mail, MapPin, Phone } from "lucide-react";

// Email validation function
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
        setStatusMessage("Please enter a valid email address.");
        return;
    }

    setStatusMessage("Sending...");
    setIsLoading(true);

    try {
        const jsonPayload = JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
        });

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonPayload,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Server Error:", errorData);
            throw new Error(errorData.message || 'Network response was not ok');
        }

        const result = await response.json();
        setStatusMessage(result.message);

        // Reset form data
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });

    } catch (error) {
        setStatusMessage(error instanceof TypeError 
            ? "Network error occurred. Please check your connection." 
            : "Failed to send message, please try again.");
        console.error("Error in handleSubmit:", error);
    } finally {
        setIsLoading(false);
    }
};


  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for any inquiries or assistance
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeInSection>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Gbagada<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    +234 123 XXX XXXX<br />
                    Monday - Friday, 9am - 5pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    Contact@Crestbeam.com.ng<br />
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Service</SelectItem>
                    <SelectItem value="business">Business Service</SelectItem>
                    <SelectItem value="mortgage">Mortgage Service</SelectItem>
                    <SelectItem value="equipment">Equipment Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
              {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
            </form>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
