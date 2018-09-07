interface Address {
  name: string
  description: string
  addressCountry: string
  addressLocality: string
  addressRegion: string
  postOfficeBoxNumber: string
  postalCode: string
  streetAddress: string
  telephone: string
}

export interface Company {
  legalName: string
  description: string
  email: string
  taxID: string
  duns: string
  logo: Buffer
  address: Address
}
