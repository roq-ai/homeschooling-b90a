interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Teacher', 'Technical Support'],
  tenantName: 'Company',
  applicationName: 'HomeSchooling',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read course', 'Read assignment', 'Read grade', 'Read lesson'],
  ownerAbilities: [
    'Manage grades',
    'Manage lessons',
    'Manage assignments',
    'Manage courses',
    'Manage users',
    'Manage companies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/90b319e4-f0e3-4cde-aeb5-1de1f932f35d',
};
