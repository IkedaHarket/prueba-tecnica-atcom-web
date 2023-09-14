import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {

  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform a phone number to the expected format', () => {

    const pipe = new PhoneNumberPipe();
    const inputPhoneNumber = '+56912341234';
    const transformedValue = pipe.transform(inputPhoneNumber);
  
    const expectedValue = '+569 1234 1234';
  
    expect(transformedValue).toEqual(expectedValue);
  });
});
