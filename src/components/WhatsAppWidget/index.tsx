import Link from "next/link";

import { FloatingWhatsApp } from 'react-floating-whatsapp'
function WhatsAppWidget() {
  return (
    <div>
    


      <FloatingWhatsApp
  phoneNumber="7780599423"  // Your WhatsApp number
  accountName="matrixincorporation"
  statusMessage="Typically replies within a few hours"
  chatMessage="Hello! How can we help you today?"
  avatar="https://matrixincorporation.com/_next/image?url=%2Fimages%2Flogo%2Flogo22.png&w=256&q=75"  // URL for an avatar image
  // allowClickAway={true}  // Allow closing by clicking outside the chat window
  notification={true}  // Enable notification
  notificationSound={true}  // Enable notification sound
/>
    </div>
  );
}

export default WhatsAppWidget;

