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

/**
 * Github Library
 * @example
 * const github = new Github({
 *  username: 'fazt',
 *  token: 'xyz123'
 * });
 *
 * const repositories = github.getRepositories();
 *
 * @see https://developer.github.com/v3/repos/#list-public-repositories
 *
 * @todo Implement the rest of methods
 */
class Github {
  /**
   * @param {Object} options
   * @param {string} options.user your username
   * @param {string} options.token secret token
   */
  constructor({ user, token }) {
    this.user = user;
    this.token = token;
  }

  /**
   * List of all Public User's Repositories
   * @param {Object} options
   * @param {Number} [options.limit=6] The limit of respositories to return
   * @return {Array<Object>} An array of public repositories
   */
  getRepositories({ limit = 6 }) {
    return [];
  }
}
