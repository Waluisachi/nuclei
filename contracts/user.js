class User {
  constructor(firstName, lastName, ID, KRAPIN, DOB, address) {
    this.firstName = "";
    this.lastName = "";
    this.ID = "";
    this.KRAPIN = "";
    this.DOB = NULL;
    this.address = "";
  }

  newUser(data){
    return this({
                  firstName: data.firstName,
                  lastName:  data.lastName,
                  ID:        data.ID,
                  KRAPIN:    data.KRAPIN,
                  DOB:       data.DOB,
                  address    data.address
                });
  }
}
