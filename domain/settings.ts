interface PaymentInfoItem {
  type: string
  id: string
  displayText: string
}

interface PaymentInfo {
  displayText: string
  items: PaymentInfoItem[]
}

interface ContactInfoItem {
  type: string
  id: string
  displayText: string
}

interface ContactInfo {
  displayText: string
  items: ContactInfoItem[]
}

interface SocialInfoItem {
  type: string
  id: string
  link: string
  displayText: string
}

interface SocialInfo {
  displayText: string
  items: SocialInfoItem[]
}

interface Footer {
  paymentInfo: PaymentInfo
  contactInfo: ContactInfo
  socialInfo: SocialInfo
  footerText: string
}

export default interface Root {
  name: string
  footer: Footer
}
