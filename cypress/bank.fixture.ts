import { Bank } from "src/app/shared/models/api/model";

export class BankFixture {
  private static bank1: Bank = {
    uniqueId: 1,
    name: 'Chase Bank',
    addressLine1: '123 Four Street',
    addressLine2: 'Unit 1001',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '98554',
  };

  public static getDefault() {
    return BankFixture.bank1;
  }
}
