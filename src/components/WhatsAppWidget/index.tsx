import Link from "next/link";

import { FloatingWhatsApp } from 'react-floating-whatsapp'
function WhatsAppWidget() {
  return (
    <div>
    


      <FloatingWhatsApp
  phoneNumber="8767474066"  // Your WhatsApp number
  accountName="Manoj Engineering"
  statusMessage="Typically replies within a few hours"
  chatMessage="Hello! How can we help you today?"
  avatar="/images/logo/official.jpeg"  // URL for an avatar image
  // allowClickAway={true}  // Allow closing by clicking outside the chat window
  notification={true}  // Enable notification
  notificationSound={true}  // Enable notification sound
/>
    </div>
  );
}

export default WhatsAppWidget;

