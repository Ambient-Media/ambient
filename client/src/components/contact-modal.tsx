
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in-0 duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900/90 backdrop-blur-xl border-2 border-amber-400/80 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h2 className="text-4xl font-bold font-serif mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-200">
            Ready to discuss your project? Let's explore how we can work together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name *</label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email *</label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">Company</label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400"
              placeholder="Your company"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">Interested Service</label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand-identity">Brand Identity</SelectItem>
                <SelectItem value="web-design">Web Design</SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="print-design">Print Design</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Project Details *</label>
            <Textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400 resize-none"
              placeholder="Tell me about your project, goals, and timeline..."
            />
          </div>
          
          <Button
            type="submit"
            disabled={contactMutation.isPending}
            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {contactMutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
