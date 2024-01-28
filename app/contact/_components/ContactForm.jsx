"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!name || !email || !message) {
            toast.error("Please fill all the fields");
            setLoading(false);
            return;
        };
        let a = document.createElement("a");
        a.href = `mailto:hi@rahul.eu.org?subject=${name}&body=${message} - ${email}`;
        a.setAttribute("target", "_blank");
        a.click();
        setSuccess(true);
        setLoading(false);
    }

    return (
        <form method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4 px-6">
            <div className="w-full max-w-md mx-auto">
                <Label htmlFor="name">Full Name</Label>
                <Input onChange={(e) => setName(e.target.value)} value={name} autocomplete="off" className="w-full" type="text" id="name" placeholder="John Deo" />
            </div>
            <div className="w-full max-w-md mx-auto">
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} autocomplete="off" className="w-full" type="email" id="email" placeholder="johndeo@gmail.com" />
            </div>
            <div className="w-full max-w-md mx-auto">
                <Label htmlFor="message">Message</Label>
                <Textarea onChange={(e) => setMessage(e.target.value)} value={message} autocomplete="off" id="message" placeholder="What's on your mind?" className="w-full min-h-[120px]"></Textarea>
            </div>
            <div className="w-full max-w-md mx-auto mt-2 flex flex-col gap-2">
                {/* <Button asChild variant="secondary" size="sm" className="text-xs w-fit"><a href="mailto:hi@rahul.eu.org">hi@rahul.eu.org</a></Button> */}
                <Button className="w-full" type="submit">{
                    loading ? (<Loader2 className="w-4 h-4 animate-spin" />) : "Send"
                }</Button>
            </div>
        </form>
    )
}