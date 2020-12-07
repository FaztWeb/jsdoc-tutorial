/**
 * Generates a Table Head
 * @param {HTMLTableElement} table The Target Table
 * @param {Array<string>} data An array of string names
 * @returns {void}
 * @author Fazt <faztweb.com>
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);

    th.appendChild(text);
    row.appendChild(th);
  }
}
