/**
 * Class to create a Programmer
 */

class Programmer {
  /**
   *
   * @param {Object} user User's Information
   * @param {string} language A programming language name
   */
  constructor(user, language) {
    /**
     * @property {string} fullname Programmer's FullName
     */
    this.fullname = user.fullname;
    /**
     * @property {string} language The Programmer's Programming language
     */
    this.language = language;
  }

  /**
   *
   * @property {Function} getInfo Get the Programmer's Info
   * @returns {void}
   */
  getInfo() {
    console.log(
      `I'm ${this.fullname} and my favorite programming language is ${this.language}`
    );
  }
}

/**
 * Know more in {@link Programmer}
 */
const newProgrammer = new Programmer({ fullname: "Ryan Ray" }, "golang");
newProgrammer.getInfo();