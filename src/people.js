export class Welcome {
  heading = 'People';
  firstName = 'John';
  lastName = 'Doe';
  emailAddress = 'john@doe.com';
  people = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      fullName: 'Jane Doe',
      emailAddress: 'jane@doe.com'
    }
  ];
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  submit() {
    var person = {
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.firstName + ' ' + this.lastName,
      emailAddress: this.emailAddress
    };
    this.people.push(person);
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
  }
}
